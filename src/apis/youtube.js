import axios from 'axios';

const KEY = 'AIzaSyDdq-znzmNy9m698mwcg4JDxzaqWGytDEg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})
