import React, { useEffect, useState } from 'react';

function FavoriteItem(props) {
    const index = props.getData[0].ind;
    
    console.log(props.getData[0].res[index])
    const [btnActive, setBtnState] = useState(false);
   
     
    const getElement = {
        name: props.getData[0].res[index].name,
        img:  props.getData[0].res[index].img
    }

    
    function searchFav(){
    }
    function removerFav (element) {
        
        let getLocal = localStorage.getItem('pokemon');
        let newarray = JSON.parse(getLocal)
        let found = newarray.find(obj => obj.name === element.name)
        if(found ){
            if(found.name){
            let remove = newarray.indexOf(found)
            newarray.splice(remove, 1);
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
            onClick={() => removerFav(getElement)}
            className={`btn btn-primary`} >
                Eliminar de favoritos
            </button>
  </div>
    </div>
  );
}

export default FavoriteItem;
