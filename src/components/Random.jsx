import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY; 

export default function Random() {

  const {gif, loading, fetchData} = useGif();

  return (
    <div className='w-1/2  bg-yellow-300 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random GIF</h1>

      {
        loading ? <Spinner/> : <img src={gif} width="450"/>
      }

      <button onClick={()=> fetchData()}
      className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px] font-bold">
        GENERATE
      </button>

    </div>

  );
}
