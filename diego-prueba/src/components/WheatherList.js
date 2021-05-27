import React, { useEffect, useState } from 'react';
import WeatherDetail from './WeatherDetail'
import dummy from './dummy.json'
import axios from 'axios';

function WheatherList() {
  const apiKey = 'd5f0701319f91aebc378dae0fc1f22e5';  
  const [apiGet, setgetCallApi] = useState({ response: 'Ok' });
  const [loading, setLoading] = useState(false);

  const [country] = useState(
    [ 
    'London',
    'Mexico',
    'USA',
    'Canada',
    'Brazil'
    ]
  )
  const [pokemons]  = useState(
    [
    'ditto',
    'bulbasaur'
    ]
  )
  const [getApi] = useState
  (
    /*{ 
      type: 'GET', 
      url: 'http://api.openweathermap.org/data/2.5/weather'
    }*/
    {
      type: 'get',
      url:'https://pokeapi.co/api/v2/'
    }
  );
  useEffect(() => {
    
    const callApi = async (pokemon) => {
      setLoading(true);

         await axios.get(getApi.url + pokemon,{ crossdomain: true }).then((result)=>{
        console.log("result",result);
        return false;
      setLoading(false);
              }).catch((error)=>{
        console.log("Error",error);
      });
 
    };
    
    callApi(pokemons[0]);
  });

  const ShowDetails = () => {
    
    let respuesta = {};
    console.log(apiGet)
    respuesta = apiGet;

      /* 
      <WeatherDetail getData={respuesta.data} />
        */
      return Array.from({length: Object.keys(dummy).length}, (item, index) => 
      <WeatherDetail getData={dummy[country[index]]} key={index}/>
      );

  }

  return (
    <div className='container col-12 w-100'>
     
    <div className="row col-12 text-center bg-color1 p-4 mb-1">
        <div className="col-4">Nombre</div>
        <div className="col-4">Clima</div>
        <div className="col-4">Añadir a favoritos</div>
    </div>
    <ShowDetails/>
    </div>
  );
}

export default WheatherList;
