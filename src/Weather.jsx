import {useEffect,useState} from 'react'
import './Weather.css'

import searchIcon from"./assets/search.Webp";
import clearIcon from"./assets/clean.Webp";
import cloudIcon from"./assets/cloud.png";
import drizzleIcon from "./assets/drizzle.png";
import rainIcon from "./assets/rain.png";
import windIcon from "./assets/wind.png";
import snowIcon from "./assets/snow.png";
import humidityIcon from"./assets/humidity.png";

const WeatherDetails=({icon,temp,city,country,lat,log,humidity,wind})=>{
  return(<>
  <div className='image'>
    <img src={icon} alt='Image'/>
  </div>
  <div className='temp'>{temp} &deg;C</div>
  <div className='location'>{city}</div>
  <div className='country'>{country}</div>
  <div className='cord'>
    <div>
      <span className='lat'>latitude:</span>
      <span>{lat}</span>
    </div>
    <div>
      <span className='log'>longitude:</span>
      <span>{log}</span>
    </div>
  </div>
  <div className='data-container'>
    <div className='element'>
      <img src={humidityIcon} alt="humidity" className='icon' />
      <div className='data'>
        <div className='humidity-percent'>{humidity}%</div>
        <div className='text'>Humidity</div>
      </div>
    </div>
    <div className='element'>
      <img src={windIcon} alt="wind" className='icon' />
      <div className='data'>
        <div className='wind-percent'>{wind}Km/h</div>
        <div className='text'>Wind speed</div>
      </div>
    </div>
  </div>
  </>);
};

const weather = () => {
  let api_key="705f18cc8120ec4017ed369d0b5691d9";

  const [text,setText] = useState("chennai")
  const [icon,setIcon]=useState(snowIcon);
  const [temp,setTemp]=useState(0);
  const [city,setCity]=useState("");
  const [country,setCountry]=useState("");
  const [lat,setLat]=useState(0);
  const [lon,setLon]=useState(0);
  const [humidity,setHumidity]=useState(0);
  const [wind,setWind]=useState(0);
  const [cityNotFound,setCityNotFound]=useState(false);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);

  const weatherIconMap={
    "01d": clearIcon,
    "01n": clearIcon,
    "02d": cloudIcon,
    "02n": cloudIcon,
    "03d": drizzleIcon,
    "03n": drizzleIcon,
    "04d": drizzleIcon,
    "04n": drizzleIcon,
    "09d": rainIcon,
    "09n": rainIcon,
    "010d": rainIcon,
    "010n": rainIcon,
    "013d": snowIcon,
    "013n": snowIcon,
  };

  const search= async()=>{
    setLoading(true);
  let url=`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Matric`;
  try{
    let res=await fetch(url);
    let data=await res.json();
    if(data.cod==="404"){
      console.error("City Not Found");
      setCityNotFound(true)
      setLoading(false);
      return;
    }

    setHumidity(data.main.humidity);
    setWind(data.wind.speed);
    setTemp(Math.floor(data.main.temp));
    setCity(data.name);
    setCountry(data.sys.country);
    setLat(data.coord.lat);
    setLon(data.coord.lon);
    const weatherIconCode=data.weather[0].icon;
    setIcon(weatherIconMap[weatherIconCode] || clearIcon);
    setCityNotFound(false);
  }catch(error){
    console.log("An error occurred:",error.message);
    setError("An error occurred whilr fetching weather data.");
  }
  finally{
    setLoading(false); 
  }
 };

 const handleCity=(e)=>{
  setText(e.target.value);
 };
 
 const handleKeyDown=(e)=>{
  if(e.key === "Enter"){
    search();
  }
 };
 useEffect(function(){
  search();
 },[]);

  return (
    <>
    <div className='container'>
        <div className='input-container'>
          <input type='text' className="city-input" placeholder='Enter City Name' 
          onChange={handleCity} value={text} onKeyDown={handleKeyDown}/>
            <div className='search-icon' onClick={()=> search()}>
                <img src={searchIcon} alt='searchicon'/>
            </div>
        </div>
        {loading && <div className='loading-message'>Loading....</div>}
        {error && <div className='error-message'>{error}</div>}
        {cityNotFound && <div className='city-not-found'>City Not Found</div>}
       
        {!loading && !cityNotFound && < WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} log={lon} humidity={humidity} wind={wind} />}

         <p className='copyright'>
            &copy; 2026. Designed by <span>Panneerselvam</span>
        </p>
    </div>
    </>
  );
}

export default weather