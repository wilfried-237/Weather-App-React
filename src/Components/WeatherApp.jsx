import { useState } from "react";
import "./index.css";
import useFetch from './hooks/useFetch';

export default function WeatherApp() {

  const [search, setSearch] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [data, loading, error] = useFetch(search)


  return (
    <div className="WeatherApp">
      <h1>Weather App</h1>
      <div className="search-box">
        <input 
        type="text"
        placeholder="Search City Name"
        onChange={(e)=> setSearchTerm(e.target.value)} />
        <button onClick={()=> setSearch(searchTerm)}>Search</button>
      </div>
      <div className="display">
        <h2>Buea, Cameroun</h2>
        <span>Monday, April 29, 2023</span>
        <p>294.95</p>
        <h4>mist</h4>
      </div>
      <div className="desc">
          <span>
            3.6 <br /> Wind speed
          </span>
          <span>
            88% <br /> Humidity
          </span>
      </div>
    </div>
  );
}
