import React, { useState } from 'react';
import "./Country.css"

const Country = ({country, handleVisitedCountry}) => {
  const {name, flags, cca3} = country
  
  const [visited, setVisited]= useState(false)
  const handleVisited = () =>{
    setVisited(!visited)
  }
  const passWithParams = () => {
    handleVisitedCountry(country)

  }
  return (
    <div className={`country ${visited && "visited" }`} >
      <div className='country-img'>
        <img src={flags?.svg} alt={name?.common}/> 
      </div>     
      <h3 style={{color: visited && "purple"}}>Name: {name?.common}</h3>
      <p><small>Code: {cca3}</small></p>
      <button onClick={passWithParams}>Mark visited</button>
      <button onClick={handleVisited}>{visited ? "Visited" : "Want to visit"}</button>
      
    </div>
  );
};

export default Country;