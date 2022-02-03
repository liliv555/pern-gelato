import React from 'react';

import EditForm from './EditForm'


const Gelato = (props) => {

  const deleteGelato = async (id) => {
      try {
        await fetch(`http://localhost:5000/gelatos/${id}`, {
          method: "DELETE"
        });
        props.gelatoModified(id)
      } catch (err) {
        console.error(err.message);
      }
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
                    gelatoModified={props.gelatoModified}
                    />
                <button className="option-icon" onClick={() => deleteGelato(props.id)}><i className="fas fa-trash-alt"></i></button>
            </div>
        </div>
    );
};

export default Gelato;
