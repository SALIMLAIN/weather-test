import React, { useEffect, useState } from 'react'
import "./weather.css"






const Weather = () => {

    const [ temp , Settemp] = useState();

    const getWeatherData = async()=>{
      const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Bangalore,in&APPID=747998a47a028eba06cd47417b435031");
      const data = await response.json();
     console.log(data);
     Settemp(data);
  }
  useEffect (()=>{
      getWeatherData();
  },[]);
 

  return (
    <div className='container'>
       
        <div className='weather'>
        <div className='farcast'>
            <h1 className='city'>Bangalore, <span>{temp?.sys?.country}</span></h1>
             <h1 className='tempre'>{`${Math.floor(temp?.main?.temp - 273)} °C`}</h1>
             <h2>Feels like {`${Math.floor(temp?.main?.feels_like - 273)} °C`}.Gentle Breeze</h2>
            
            <h1>Max-temp: { `${Math.floor(temp?.main?.temp_max - 273)} °C`}</h1>
            <h1>Min-temp:  { `${Math.floor(temp?.main?.temp_min - 273)} °C`}</h1>
            <h1>Humidity:  {temp?.main?.humidity } </h1>
            <h1>Pressure:   {temp?.main?.pressure } hPa</h1>
  
        </div>
            
            <div className='days'>
               <div className='day'>
                    <p>july,1</p>
                    <p>temp {24}°C</p>
               </div>
               <div className='day'>
                    <p>july,2</p>
                    <p>temp {24}°C</p>
               </div>
               <div className='day'>
                    <p>july,3</p>
                    <p>temp {24}°C</p>
               </div>
               <div className='day'>
                    <p>july,4</p>
                    <p>temp {24}°C</p>
               </div>
               <div className='day'>
                    <p>july,5</p>
                    <p>temp {24}°C</p>
               </div>
               <div className='day'>
                    <p>july,6</p>
                    <p>temp {24}°C</p>
               </div>
               <div className='day'>
                    <p>july,7</p>
                    <p>temp {24}°C</p>
               </div>
              
            </div>
             
           
        </div>
    </div>
  )
}

export default Weather