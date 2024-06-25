import React, { useState } from 'react'
import axios from 'axios'


function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')


   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d5b15af371d016db32b9c6170f6b5300`

  const inputValue = (event) => {
    if(event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="App">
      <div className='searchbar w-3/4 lg:w-1/2  bg-white rounded mb-5 top-20 m-auto relative'>
        <input 
        className='p-2 text-black rounded w-full' 
        type="text"
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyDown={inputValue}
        placeholder='Enter Location'/>
      </div>

      <div className='box w-3/4 lg:w-1/2 text-[#2B3A7E] bg-white top-40 relative rounded m-auto'>
        <h1 className='text-center text-4xl text-[#2B3A7E] font-semibold pb-5 pt-5 border-b-2 border-[#2B3A7E]'>Weather App</h1>
        <div className='theDetails'>
          
            <div className='row-one text-center'>
              <h2 className='cityname text-center text-3xl pt-5 p-5 font-semibold'>{data.name}</h2>
              <div className='font-semibold cityDetails flex justify-center flex-col'>
                <h2 className='text-2xl'>{ data.main ? <h2>{ data.main.temp.toFixed()}°F </h2>  : null }</h2>
                <h2 className='text-2xl capitalize'>{ data.weather ? data.weather[0].description : null }</h2>
              </div>
            </div>
          

          { data.name != undefined && 
          
            <div className='row-two m-3 py-4 flex flex-col gap-y-5 justify-center gap-x-5 text-center md:flex-row'>
              <div className='rowtwo-colone border-2 p-5 rounded border-[#2B3A7E]'>
                <h2 className='text-2xl font-semibold'>{ data.main ? data.main.feels_like : null  }°F</h2>
                <h2 className='text-2xl capitalize'>Feels Like</h2>
              </div>
              <div className='rowtwo-coltwo border-2 p-5 rounded border-[#2B3A7E]'>
                <h2 className='text-2xl font-semibold'>{ data.main ? data.main.humidity : null  }%</h2>
                <h2 className='text-2xl capitalize'>Humidity</h2>
              </div>
              <div className='rowtwo-colthree border-2 p-5 rounded border-[#2B3A7E]'>
                <h2 className='text-2xl font-semibold'>{ data.wind ? data.wind.speed : null  } MPH</h2>
                <h2 className='text-2xl capitalize'>Wind Speed</h2>
              </div>
            </div>
          
          }
        </div>
      </div>
    </div>
  );
}

export default App;
