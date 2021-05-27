import React, { useEffect, useState } from 'react';
import WeatherDetail from './WeatherDetail'
import axios from 'axios';

function WheatherList() {
  /*const apiKey = 'd5f0701319f91aebc378dae0fc1f22e5';  */
  const [apiGet, setgetCallApi] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorAPI, setErrorAPI] = useState(null);
  /*const [country] = useState(
    [ 
    'London',
    'Mexico',
    'USA',
    'Canada',
    'Brazil'
    ]
  )*/
  const [pokemons]  = useState(
    [
    'ditto',
    'bulbasaur',
    'charmander',
    'mewtwo',
    'entei',
    'blastoise'
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
      url:'https://pokeapi.co/api/v2/pokemon/'
    }
  );
  useEffect(() => {
    
    const callApi = async (pokemon) => {
      setLoading(true);

         await axios.get(getApi.url + pokemon,{ crossdomain: true }).then((result)=>{

          setgetCallApi(prevState => [...prevState, {currentOrNewKey: result}]);
    
              }).catch((error)=>{
        
        setErrorAPI(error.response);
      });
      setLoading(false);
    };
    for(let i = 0;i<=pokemons.length-1;i++){
    callApi(pokemons[i]);
    }

  }, [getApi.type, getApi.url,pokemons]);

  const ShowDetails = () => {
    if (loading === true) {
      return <div>Cargando...</div>;
    }
    let respuesta = {};

    if (errorAPI) {
      respuesta = errorAPI;
    } else {
      respuesta = apiGet;
    }
      /* 
      <WeatherDetail getData={respuesta.data} />
        */
      return Array.from({length: pokemons.length}, (item, index) => 
      <WeatherDetail getData={[{res:respuesta,ind:index}]} key={index}/>
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
