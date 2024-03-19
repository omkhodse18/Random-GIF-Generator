import Axios from "axios";
import { useEffect, useState } from "react"

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY; 
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {

    const [gif,setGIF] = useState('');
    const [loading, setLoading] = useState(false);

    async function fetchData(tag){
        setLoading(true);
    
        const {data} = await Axios.get(tag ? `${url}&tag=${tag}`  : url);
        const gifSrc = data.data.images.downsized_large.url;
        setGIF(gifSrc);
    
        setLoading(false);
      }
    
      useEffect(() => {
        fetchData();
      },[]);

      return {gif, loading, fetchData};

};

export default useGif;
