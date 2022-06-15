import axios from 'axios';
const Key = 'AIzaSyCN_oUKYduKOu7tU3GjjA3C8B1ilP1Pi5Y'

export default axios.create({
         baseURL : 'https://www.googleapis.com/youtube/v3',
        params:{
            part : "snippet",
            maxResults: 10,
            key:Key,
            type: 'video'
        }      
    }
);