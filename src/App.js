import React from 'react'
import SearchBar from './components/SearchBar'
import VideosList from './components/VideosList'
import VideoDetails from './components/VideoDetails'
import youtube from './apis/youtube'
import './components/styles/app.css'

// Youtube Search Bar Access Token: AIzaSyCOVPtskHet2YsFwkZ5C0fE0fk70FNd3pI
class App extends React.Component {
    state = {
        videos: [],
        video: {},
    }
    onTermSubmit = async (term) => {
        const res = await youtube.get('/search', {
            params: { q: term },
        })

        this.setState({ videos: res.data.items })
        this.setState({ videos: res.data.items })
        this.setState({ video: res.data.items[0] })
    }
    onVideoClick = (video) => {
        this.setState({ video })
        console.log('VIDEO', video)
    }

    componentDidMount() {
        this.onTermSubmit('React Js')
    }
    render() {
        return (
            <div className="  ui container">
                <SearchBar setTerm={this.onTermSubmit} />
                <div className="app">
                    <div className="app-left">
                        {' '}
                        <VideoDetails video={this.state.video} />
                    </div>{' '}
                    <div className="app-right">
                        {' '}
                        <VideosList
                            onVideoClick={this.onVideoClick}
                            videos={this.state.videos}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
export default App
