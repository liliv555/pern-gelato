import React, { useEffect, useState } from 'react';
import HorizontalScroll from 'react-horizontal-scrolling'

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
        <HorizontalScroll>
          <div className='list-container'>
              {gelatos.map(gelato =>
              <Gelato
                id={gelato.id}
                title={gelato.title}
                description={gelato.description} 
                imageUrl={gelato.imageUrl}
                key={gelato.id}
                getGelatos={getGelatos} />)}
          </div>
        </HorizontalScroll>
    );
}

export default GelatoList;
