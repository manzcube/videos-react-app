import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import useVideos from './hooks/useVideos';


const App = () => {
  
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videos, search] = useVideos('programming')

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])

  return (
    <div className='ui container' style={{width: '80%'}}>
      <SearchBar onFormSubmit={search} />

      <div className="ui grid" style={{ marginTop: '80px'}}>
        <div className="ui row">
          <div className="nine wide column">
            <VideoDetail video={selectedVideo} /> 
          </div>
          <div className="seven wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>            
        </div>
      </div>
    </div>
  )
}

export default App;