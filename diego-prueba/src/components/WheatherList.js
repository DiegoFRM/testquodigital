import React, { useEffect, useState } from 'react';
import WeatherDetail from './WeatherDetail'
import axios from 'axios';

function WheatherList() {
  const [accesoAPI, setAccesoAPI] = useState({ tipo: 'GET', url: 'https://openweathermap.org/api' });
  const [datos, setDatos] = useState({});
  const [errorAPI, setErrorAPI] = useState(null);
  const [loading, setLoading] = useState(false);
  const [respuestaAPI, setRespuestaAPI] = useState({ respuesta: 'KO' });
 
  useEffect(() => {
    const consultaAPI = async () => {
      setErrorAPI(null);
      setLoading(true);
 
      try {
        // 'data' son los datos que se envían como request body
        // Solo es válido para 'PUT', 'POST', 'DELETE y 'PATCH'
        const consulta = await axios({ method: accesoAPI.tipo, url: accesoAPI.url, data: datos });
 
        setRespuestaAPI(consulta);
      } catch (error) {
        setErrorAPI(error.response);
      }
 
      setLoading(false);
    };
 
    consultaAPI();
  }, [accesoAPI.tipo, accesoAPI.url, datos]);
 
  const handleClick = boton => {
    if (boton === 'botonGet') {
      setAccesoAPI({ tipo: 'GET', url: 'https://openweathermap.org/api' });
 
      // En un GET los datos serán ignorados, siempre mandaremos un objeto vacío
      setDatos({});
    } else if (boton === 'botonPost') {
      setAccesoAPI({ tipo: 'POST', url: 'https://openweathermap.org/api' });
 
      setDatos({ datosUno: 'datosUno', datosDos: 'datosDos' });
    }
  };
 
  const MostrarRespuesta = () => {
    if (loading === true) {
      return <div>Cargando...</div>;
    }
 
    let respuesta = {};
 
    if (errorAPI) {
      respuesta = errorAPI;
    } else {
      respuesta = respuestaAPI;
    }
 
    return Object.keys(respuesta).map(key => {
      return (
        <div key={key}>
          {key}: {JSON.stringify(respuesta[key])}
        </div>
      );
    });
  };
 
  return (
    <>
      <div>
        <button onClick={() => handleClick('botonGet')} type="button">Consulta GET</button>
        <button onClick={() => handleClick('botonPost')} type="button">Consulta POST</button>
      </div>
      <div>
        <MostrarRespuesta />
      </div>
    </>
  );
};

export default WheatherList;
