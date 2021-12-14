import React from 'react'
import Search from './Search'
import './Widget.css'
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';


function Widget() {
    return (
        <div className="widget">
            {/* <h2>Widget</h2> */}
            <Search />
            <div className="widget__content">

                {/* <TwitterTweetEmbed
                    tweetId={'1322327307957243904'}
                    theme="dark"
                /> */}
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="jack"
                    theme="dark"
                    options={{ height: 400 }}
                />

                <p className="widget__footer">Hecho con 🧡</p>

                
                {/* <br /> */}

                {/* <p>Widget Content...</p>
                <p>Widget Content...</p>
                <p>Widget Content...</p>
                <p>Widget Content...</p>
                <p>Widget Content...</p>
                <p>Widget Content...</p>
                <p>Widget Content...</p>
                <p>Widget Content...</p>
                <p>Widget Content...</p>
                <p>Widget Content...</p>
                <br />
                <p>Widget Content...</p>
                <p>Widget Content...</p>
                <p>Widget Content...</p>
                <p>Widget Content...</p>
                <p>Widget Content...</p>
                <p>Widget Content...</p>
                <p>Widget Content...</p>
                <p>Widget Content...</p>
                <p>Widget Content...</p>
                <p>Widget Content...</p> */}
            </div>



        </div>
    )
}

export default Widget
