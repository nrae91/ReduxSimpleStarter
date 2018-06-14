import React from 'react';

const VideoListItem = ({video, onSelection}) => {
    const imgSrc = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onSelection(video)} className="list-group-item">
            <div className="video-list-media">
                <div className="media-left">
                    <img className="media-object"
                         src={imgSrc}
                     />
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>                
            </div>
        </li>
    )
};

export default VideoListItem;