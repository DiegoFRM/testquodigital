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
  const [getApi] = useState
  (
    { 
      type: 'GET', 
      url: 'http://api.openweathermap.org/data/2.5/weather'
    }
  );
  useEffect(() => {
    
    const callApi = async (country) => {
      setLoading(true);

         await axios.get(getApi.url + '?q='+country+ '&APPID=' + apiKey,{ crossdomain: true }).then((result)=>{
        console.log("result",result);
        setgetCallApi(result)
        return false;
      setLoading(false);
              }).catch((error)=>{
        console.log("Error",error);
      });
 
    };
    
    //callApi(country[0]);
  });

  const ShowDetails = () => {
    
    if (loading === true) {
      return <div>Cargando...</div>;
    }
    let respuesta = {};
    console.log(apiGet)
    respuesta = apiGet;

      /* 
      <WeatherDetail getData={respuesta.data} />
        */
      return Array.from({length: Object.keys(dummy).length}, (item, index) => 
      <WeatherDetail getData={dummy[country[index]]}/>
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
