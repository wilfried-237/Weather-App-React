import { useState } from "react";
import "./index.css";
import useFetch from './hooks/useFetch.jsx';
import Display from "./Display.jsx";

export default function WeatherApp() {

  const [search, setSearch] = useState("buea")
  const [searchTerm, setSearchTerm] = useState("")
  const [getData, loading, error] = useFetch(search)

  function handleClick(){
    if(search != ""){
      setSearch(searchTerm)
    setSearchTerm("")
    }
  }


  return (
    <div className="WeatherApp">
      <h1>Weather App</h1>
      <div className="search-box">
        <input 
        type="text"
        value={searchTerm}
        placeholder="Search City Name"
        onChange={(e)=> setSearchTerm(e.target.value)} />
        <button onClick={()=> handleClick()}>Search</button>
      </div>
      {
        loading && !error?<div className="loading">Loadind Please Wait...</div> : null
      }
      {
        error && <div className="loading">An Error Occured! {error}</div>
      }
      
      
      {
        getData && !loading && !error && <Display data={getData} />
      }
          
      
    </div>
  );
}
