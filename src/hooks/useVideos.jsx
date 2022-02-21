import { useEffect, useState } from "react";
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
     
    const [videos, setVideos] = useState([])

    useEffect(() => {
        search(defaultSearchTerm)   // When render first time set a default search
    }, [defaultSearchTerm])

    const search = async term => {
        const response = await youtube.get('/search', {  // shortcut to make requests to yt api
            params: {
            q: term
            }
        })
        setVideos(response.data.items) // update our videos search     
    }

    return [videos, search]
}

export default useVideos;