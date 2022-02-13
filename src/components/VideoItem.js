import React from 'react'

const VideoItem = ({
    video: {
        snippet,
        id: { videoId },
    },
    onVideoClick,
}) => {
    return (
        <div
            className="ui card"
            onClick={() => onVideoClick({ snippet, videoId })}
        >
            <a className="image" href="#">
                <img src={snippet.thumbnails.medium.url} />
            </a>
            <div className="content">
                <a className="header" href="#">
                    {snippet.title}
                </a>
                <div className="meta">
                    <a>Last Seen 2 days ago</a>
                </div>
            </div>
        </div>
    )
}

export default VideoItem
