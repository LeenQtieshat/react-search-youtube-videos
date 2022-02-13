import axios from 'axios'

const KEY = 'AIzaSyCOVPtskHet2YsFwkZ5C0fE0fk70FNd3pI'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',

    params: {
        part: 'snippet',
        maxResults: 10,
        type: 'video',
        key: KEY,
    },
})
