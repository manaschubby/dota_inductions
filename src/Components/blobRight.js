import React from "react";
import '../Components/homepage.css';


export default function BlobRight({title, text}) {

    return(
        <div className='blobRight'>
            <div className='blobTitle'>
                {title}
            </div>

            <div className='blobContent'>
                <div className='blobText'>
                    {text}
                </div>

                
            </div>
        </div>
    )

}