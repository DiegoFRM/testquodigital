import React, { useEffect, useState } from 'react';
import FavoriteItem from './FavoriteItem'

function FavoritesList() {
  const [loading, setLoading] = useState(false);
  const [errorAPI, setErrorAPI] = useState(null);
  const [pokemons]  = useState(JSON.parse(localStorage.getItem('pokemon')))

  useEffect(() => {
    
    console.log(pokemons)

  });

  const ShowDetails = () => {
    if (loading === true) {
      return <div>Cargando...</div>;
    }
    let respuesta = {};

    if (errorAPI) {
      respuesta = errorAPI;
    } else {
      respuesta = pokemons;
    }
      return Array.from({length: pokemons.length}, (item, index) => 
      <FavoriteItem getData={[{res:respuesta,ind:index}]} key={index}/>
      );

  }

  return (
    <div className='container col-12 w-100'>
     <button

      className="btn btn-secondary">
        Recargar
      </button>
    <div className="row col-12 text-center bg-color1 p-4 mb-1">
        <div className="col-4">Nombre</div>
        <div className="col-4">Imagen</div>
        <div className="col-4">Eliminar de favoritos</div>
    </div>
    
    <ShowDetails/>
    </div>
  );
}

export default FavoritesList;
