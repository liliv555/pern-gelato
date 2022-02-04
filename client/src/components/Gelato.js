import React from 'react';

import EditForm from './EditForm'
import * as service from '../services/provider.js'


const Gelato = (props) => {

  const deleteGelato = async (id) => {
    await service.remove(id);
    props.gelatoModified(id)
  };
    return (
        <div className='gelato-card'>
            <img src={props.imageUrl} alt='Ice cream' className='card-image'></img>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <div className="card-options">
                <EditForm key={props.id}
                    id={props.id}
                    title={props.title}
                    description={props.description}
                    imageUrl={props.imageUrl}
                    modified={props.modified}
                    gelatoModified={props.gelatoModified}
                    />
                <button className="option-icon" onClick={() => deleteGelato(props.id)}><i className="fas fa-trash-alt"></i></button>
            </div>
        </div>
    );
};

export default Gelato;
