import React from 'react'

function VideoItem({data , onVideoSelect }) {
  console.log("datas",data)
  return (
    <>
      <div className='videostoright' onClick={() => onVideoSelect(data)} >
        <div>
          <img src={data?.snippet?.thumbnails?.high?.url} />
        </div>
          <strong><p className='snippettitle'>{data?.snippet?.title.slice(0,20)}</p></strong>
      </div>
    </>
  )
}

export default VideoItem