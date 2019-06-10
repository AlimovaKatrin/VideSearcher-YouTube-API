import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return <VideoItem
         key = {video.id.videoId} 
         onVideoSelect={onVideoSelect} 
         video={video} />
    });
    console.log(renderedList)
    return (
        <div className="ui relaxed devided list">
            {renderedList}

        </div>)
}

export default VideoList;