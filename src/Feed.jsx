import React, { useState, useEffect } from 'react';
import './Feed.css';
import Post from './Post';
import TweetBox from './TweetBox';
import db from './firebase';
import FlipMove from 'react-flip-move';
import moment from 'moment'
import 'moment/locale/es';
import CircularProgress from '@material-ui/core/CircularProgress';

function Feed() {
    const [posts, setPosts] = useState([]);
    const [date, setDate] = useState(moment().format('LTS'));
    const [loader, setLoader] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            setLoader(false);
        }, 3000)

        db.collection('posts').orderBy("timestamp", "desc").onSnapshot(snap => {

            const newPosts = snap.docs.map(doc => {
                let obj = doc.data()
                let newobj = { ...obj, id: doc.id }
                return newobj
            });

            const limitedPosts = (array, number) => {
                let newarray = [];
                if (typeof number !== 'number') return array;

                for (const item of array) {
                    if (array.indexOf(item) === number) break;
                    newarray.push(item);
                }
                
                return newarray;
            }

            const newElems = limitedPosts(newPosts);
            setPosts(newElems);
        });

        const int = setInterval(() => {
            setDate(moment().format('LTS'));
        }, 10000);

        return () => { console.log("Se desmontó el componente"); return clearInterval(int) };

    }, []);

    useEffect(() => {
        //console.log(date);
    }, [date])

    const anim = ["elevator", "fade", "accordionVertical", "accordionHorizontal"];
    const i = 2;

    return (
        <div className="feed">
            <div className="feed__title">
                <h3>Inicio</h3>
            </div>
            <div className="feed__write" id="back-to-top-anchor">
                <TweetBox />
            </div>

            <div className="feed__content">
                {
                    loader ?
                        <span className="loader"><CircularProgress /></span>
                        :
                        <FlipMove
                            staggerDurationBy="30"
                            duration={500}
                            enterAnimation={anim[i]}
                            leaveAnimation={anim[i]}
                        >
                            {posts.map((post) => (
                                <Post
                                    key={post.timestamp}
                                    timestamp={post.timestamp}
                                    id={post.id}
                                    displayName={post.displayName}
                                    username={post.username}
                                    verified={post.verified}
                                    text={post.text}
                                    avatar={post.avatar}
                                    image={post.image}
                                />))}

                        </FlipMove>

                }

            </div>

        </div>
    )
}

export default Feed


