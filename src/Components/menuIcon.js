import React from "react";
import './homepage.css'

export default function MenuIcon({setMenuShown, menuShown}){

    function menuBarClicked()  {
        console.log("menu clicked")
        setMenuShown(!menuShown);
    }
    return(
    <div className='menuIcon'  onClick={() => {menuBarClicked()}}>
        <div className='bar' />
        <div className='bar' />
        <div className='bar' />
        <div className='bar' />

    </div>)
}