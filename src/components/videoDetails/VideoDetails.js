import React from 'react'

function VideoDetails({selectedvideo}) {
  console.log("selectedvideo",selectedvideo)
  let id = selectedvideo?.id?.videoId
  let videoaddress = `https://www.youtube.com/embed/${id}`

  return (
          <div className='spinners'>
            { !selectedvideo ? (
                <div class="spinner spinner-border text-success" role="status">
                  <span class="visually-hidden">Loading...</span>
              </div>
            ) : (
                <>
                  <div>
                    <iframe src={videoaddress}  width="1200" height="615" />
                  </div>
                  <div className='textborder'>
                    <h4>{selectedvideo?.snippet?.title}</h4> 
                    <h6>{selectedvideo?.snippet?.description}</h6> 
                  </div>
                </>
            )
            }
          </div>
  )
}

export default VideoDetails