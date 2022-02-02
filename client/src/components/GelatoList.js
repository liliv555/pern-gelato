import React, { useEffect, useState, Fragment } from 'react';
import Gelato from './Gelato';

const GelatoList = () => {
    const [gelatos, setGelatos] = useState([]);
    const getGelatos = async () => {
        try {
          const response = await fetch("http://localhost:5000/gelatos");
          const jsonData = await response.json();
    
          setGelatos(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      };
    
      useEffect(() => {
        getGelatos();
      }, []);
    
      console.log(gelatos);
    return (
        <div className='list-container'>
            {gelatos.map(gelato =>
            <Gelato
              id={gelato.id}
              title={gelato.title}
              description={gelato.description} 
              imageUrl={gelato.imageUrl}
              key={gelato.id} />)}
        </div>
    );
}

export default GelatoList;
