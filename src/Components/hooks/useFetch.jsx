import { useEffect } from "react";
import { useState } from "react";


export default function useFetch(search) {

  const [getData, setGetData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    async function fetchData(getSearch){
        try{
            setLoading(true);
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getSearch}&appid=b41ff4874f3b1798828ea1fed1a3282e`);
            const data = await response.json()

            if(data){
                setGetData(data);
                setLoading(false);
                setError(null)
            }

        }catch(e){
            setError(e.message);
            setLoading(false)
        }
    }

  useEffect(()=>{
    if(search){
        fetchData(search);
    }
  }, [search])


  return [getData, loading, error]
}
