import React from 'react';
import VideoListItem from './video_list_item'


const VideoList = (props) => {
    const videoItems = props.videos.map((video)=>{
        // pass a property named video and a key from the array
        return (
            <VideoListItem
                onVideoSelect = {props.onVideoSelect}
                key={video.etag}
                video={video}/>
        )
    });
    return(


        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
};

export default VideoList;