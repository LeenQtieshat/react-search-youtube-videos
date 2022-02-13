import React from 'react'

class VideoDetails extends React.Component {
    render() {
        const { videoId = '', snippet = '' } = this.props.video

        return (
            <div style={{ width: '100%' }}>
                <iframe
                    width="100%"
                    height="415"
                    src={`https://www.youtube.com/embed/${videoId || ''}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <div className="ui segment">
                    <h4 className="uui header">{snippet.title || ''}</h4>
                    <p>{snippet.description}</p>
                </div>
            </div>
        )
    }
}

export default VideoDetails
