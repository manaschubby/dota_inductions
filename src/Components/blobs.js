import React from "react";
import '../Components/homepage.css';




export default function BlobLeft({title, text}) {

    return(
        <div className='blobLeft'>
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
