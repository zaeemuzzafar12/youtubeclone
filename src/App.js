import './App.css';
import Search from './components/search/Search';
import VideoDetails from './components/videoDetails/VideoDetails';
import VideoList from './components/videoList/VideoList';
import Axios from './components/apis/searchs';
import { useState } from 'react';
function App() {

  const [videoLists , SetvideoLists] = useState([]);
  const [selectedvideo , Setselectedvideo] = useState(null);

  const handleSubmit = async (input) => {
    console.log("App",input)
    const response = await Axios
    .get('/search',{
      params:{
        q:input
      }
    })
    SetvideoLists(response?.data?.items)
  }


  const onVideoSelect = (videoLists) => {
    console.log("$$$$$$$$$$$",videoLists)
    !videoLists ? (
      <div class="spinner-border text-success" role="status">
          <span class="visually-hidden">Loading...</span>
      </div>
    ) : (
      Setselectedvideo(videoLists)
    )
  }

  return (
    <div className="App">
      <Search className="search" onSubmitData={handleSubmit} />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-9'>
          <VideoDetails selectedvideo={selectedvideo} />
          </div>
          <div className='col-md-3'>
              <VideoList videoLists={videoLists} onVideoSelect={onVideoSelect} />
          </div>
        </div>
      </div>
      
   
      

    </div>
  );
}

export default App;
