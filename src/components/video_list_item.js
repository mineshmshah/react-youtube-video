import React from 'react';

const VideoListItems = ({video, onVideoSelect}) =>{
    // const video = props.video;
    const ImageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={()=>onVideoSelect(video)}  className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-Object" src={ImageUrl}/>
                    <div className="media-body">
                        <div className="media-heading">
                            {video.snippet.title}
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
};

export default VideoListItems;