import React, { useEffect, useState, useRef } from 'react';
import HorizontalScroll from 'react-horizontal-scrolling'

import Gelato from './Gelato';

const GelatoList = (props) => {
    const [gelatos, setGelatos] = useState([]);
    const getGelatos = async () => {
        try {
          console.log(props.queryString)
          const response = await fetch(`http://localhost:5000/gelatos?title=${props.queryString}`);
          const jsonData = await response.json();
          setGelatos(jsonData);
        } catch (err) {
          console.error(err.message);
        }
    };

    // const previousRef = useRef(queryString)
    useEffect(() => {
        getGelatos();
    }, [props.queryString]);
    
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
