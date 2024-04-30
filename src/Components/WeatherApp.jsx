import { useState } from "react";
import "./index.css";
import useFetch from './hooks/useFetch';
import Display from "./Display.jsx";

export default function WeatherApp() {

  const [search, setSearch] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [getData, loading, error] = useFetch(search)

  function handleClick(){
    setSearch(searchTerm)
    setSearchTerm("")
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
        loading?<div>Loadind Please Wait !</div> : null
      }
      {
        error && <div>An Error Occured! {error}</div>
      }
      
      
      {
        getData && <Display data={getData} />
      }
          
      
    </div>
  );
}
