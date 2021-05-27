import React, { useEffect, useState } from 'react';

function WeatherDetail(props) {
    const index = props.getData[0].ind;
    const [btnActive, setBtnState] = useState(false);
    let getElement = {
        name: '',
        img:  ''
    }
    useEffect(() => {
        searchFav()
    })

    if(props.getData[0].res[index] === undefined){
        return (<div>..cargando</div>)
    }
     
    getElement = {
        name: props.getData[0].res[index].currentOrNewKey.data.name,
        img:  props.getData[0].res[index].currentOrNewKey.data.sprites.front_default
    }

    
    function searchFav(){
        
       let getlocalPoke = localStorage.getItem('pokemon');
        let newPoke = JSON.parse(getlocalPoke)
        if(newPoke != null){
        let foundPoke = newPoke.find(obj => obj.name === getElement.name)
            if(foundPoke){
                setBtnState(true)
            }
        }
    }
    function addFavorite (element) {
        let newarray = []
        let getLocal = localStorage.getItem('pokemon');
        if(getLocal === null){
            newarray.push(element)
            setBtnState(true)
            searchFav()
        }else{
            
            newarray = JSON.parse(getLocal)
            let found = newarray.find(obj => obj.name === element.name)
            if(found ){
                if(found.name){
                
                setBtnState(false)
                searchFav()
                }
            }else{
            newarray = JSON.parse(getLocal)
            newarray.push(element)
           
            setBtnState(true)
            searchFav()
            }
            
        }
        localStorage.setItem('pokemon',JSON.stringify(newarray))
    }
    
  return (
    <div className="row col-12 text-center bg-color1 p-4 mb-1 align-items-center">
        
        
        <div className="col-4">{getElement.name}</div>
        <div className="col-4">
           <img alt="img" src={getElement.img} />
        </div>
        <div className="col-4">
            <button 
            onClick={() => addFavorite(getElement)}
            className={`btn btn-primary  ${btnActive ? "btn-active" : ""}`} >
                {  `${btnActive === true ? "Ya esta en favoritos" : "Agregar a favoritos"}` }
            </button>
        </div>
    </div>
  );
}

export default WeatherDetail;
