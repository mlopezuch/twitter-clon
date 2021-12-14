import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import Button from '@material-ui/core/Button';

function Sidebar() {

    const handleClick = () => {
        const anchor = document.querySelector('#back-to-top-anchor');
        console.log("Test");

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <div className="sidebar">
            {/* Twitter icon */}
            <TwitterIcon fontSize="large" className="sidebar__icon"/>

            {/* SidebarOptions */}
            <SidebarOption onClick={handleClick} active Icon={HomeOutlinedIcon} text="Inicio"/>
            <SidebarOption Icon={ExploreOutlinedIcon} text="Explorar"/>
            <SidebarOption Icon={NotificationsNoneOutlinedIcon} text="Notificaciones"/>
            <SidebarOption Icon={EmailOutlinedIcon} text="Mensajes"/>
            <SidebarOption Icon={BookmarkBorderOutlinedIcon} text="Guardados"/>
            <SidebarOption Icon={ListAltOutlinedIcon} text="Listas"/>
            <SidebarOption Icon={PersonOutlineOutlinedIcon} text="Perfil"/>
            <SidebarOption Icon={MoreHorizOutlinedIcon} text="Más opciones"/>
        
            {/* Button -> Tweet */}
            <Button className="sidebar__tweet" fullWidth><b>Twittear</b></Button>
        </div>
    )
}

export default Sidebar
