import React, { useState } from "react";
import BlobLeft from "./blobs";
import BlobRight from "./blobRight";
import './homepage.css'

import MenuBar from "./menubar";
import MenuIcon from "./menuIcon";

export default function Tabbar(){
    const [menuShown, setMenuShown] = useState(false);
    const blobs = {
        "LECTURES":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when",
        "EVENTS":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when",
        "TALKS":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when",
        "COMPETITONS":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"
    }
    return (<div className='full'>
        <div className='titlebar'>
            <div className='title'>
                <div className='titleTop'>
                    AROUND
                </div>
                <div className='titleDown'>
                    FUTURE
                </div>
            </div>
            { !menuShown && <MenuIcon menuShown={menuShown} setMenuShown={setMenuShown}/>}
            { menuShown && <MenuBar menuShown={menuShown} setMenuShown={setMenuShown}/> }
        </div>

        <div className='content'>
            <div className='blob'>
            <BlobLeft title={"LECTURES"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"} />
            <BlobRight title={"EVENTS"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"} />
            </div>
            <div className='blob'>
            <BlobLeft title={"TALKS"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"} />
            <BlobRight title={"COMPETITONS"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"} />
            </div>

        </div>
    </div>)
}

