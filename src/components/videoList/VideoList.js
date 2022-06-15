import React from 'react'
import VideoItem from './videoItem/VideoItem'

function VideoList({videoLists , onVideoSelect}) {
  console.log("videoLists",videoLists)

  
  const list =  videoLists &&
    videoLists.map((data)=>{
      return (
        <div key={data?.id?.videoId} >
            <VideoItem data={data} onVideoSelect={onVideoSelect} />
        </div>
      )
    })
  

  return (
      <div>
          {  
              list
              
          }
      </div>
  )
}

export default VideoList