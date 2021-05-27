import React, {  useState } from 'react';


function WeatherDetail(props) {
    const [myArray] = useState({props})
    const newArray = []
    const getLocal = localStorage.getItem('Pais')
    if(getLocal == undefined){
        
        //localStorage.setItem('Pais', newArray)
    }
    function addFavorite (country) {
        let newArray = JSON.stringify(props)
        let setArray = []
        let getLocal = localStorage.getItem('Pais')
        if(getLocal != undefined){
        setArray.push(getLocal)
        }
        setArray.push(newArray)
        localStorage.setItem('Pais', setArray)
      }
    
  return (
    <div className="row col-12 text-center bg-color1 p-4 mb-1">
        <div className="col-4">{myArray.props.getData.name}</div>
        <div className="col-4">{myArray.props.getData.weather[0].description}</div>
        <div className="col-4">
            <button 
            onClick={() => addFavorite(myArray.props.getData.name)}
            className="btn btn-primary" >Save Favorite</button>
        </div>
    </div>
  );
}

export default WeatherDetail;
