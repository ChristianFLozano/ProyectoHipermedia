import React from "react";

function Video () {
    return (
        <div>
            <h2>Tutorial</h2>
            <div className="video-container">
                <iframe 
                    src={`https://www.youtube.com/embed/yJIszNXLZRk`} 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

export default Video;
