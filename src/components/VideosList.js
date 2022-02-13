import React from 'react'
import VideoItem from './VideoItem'

class VideosList extends React.Component {
    renderList = () =>
        this.props.videos.map((video) => (
            <VideoItem
                key={video.id.videoId}
                onVideoClick={this.props.onVideoClick}
                video={video}
            />
        ))
    render() {
        return <div>{this.renderList()}</div>
    }
}

export default VideosList
