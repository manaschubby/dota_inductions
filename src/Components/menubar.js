import React from "react";
import '../Components/homepage.css'
import MenuIcon from "./menuIcon";

export default function MenuBar({setMenuShown, menuShown}){

    return(<div className='menuBar'>
        <MenuIcon menuShown={menuShown} setMenuShown={setMenuShown} />
        <div className='menubarItem'>
            ABOUT
        </div>
        <div className='menubarItem'>
            EVENTS
        </div>
        <div className='menubarItem'>
            SPONSORS
        </div>
        <div className='menubarItem'>
            GALLERY
        </div>
    </div>)
}