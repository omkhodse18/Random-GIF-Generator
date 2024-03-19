import { useState } from "react"
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

export default function Tag() {
  
  const [tag, setTag] = useState('programming');
  const {gif, loading, fetchData} = useGif();

  return (
    <div>
      <div className='w-1/2 bg-blue-500 rounded-lg border border-black
      flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random {tag} GIF</h1>

      {
        loading ? <Spinner/> : <img src={gif} width="450"/>
      }

      <input 
      className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
      onChange={(event) =>  setTag(event.target.value)}
      value={tag}
      />


      <button onClick={()=> fetchData(tag)}
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">
        Generate
      </button>

    </div>
    </div>
  );
}