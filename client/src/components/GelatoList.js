import React from 'react';
import HorizontalScroll from 'react-horizontal-scrolling'

import Gelato from './Gelato';

const GelatoList = (props) => {
    return (
        <HorizontalScroll>
          <div className='list-container'>
              {props.gelatos.map(gelato =>
              <Gelato
                id={gelato.id}
                title={gelato.title}
                description={gelato.description} 
                imageUrl={gelato.imageUrl}
                key={gelato.id} 
                modified={props.modified}
                gelatoModified={props.gelatoModified}
                />)}
          </div>
        </HorizontalScroll>
    );
}

export default GelatoList;
