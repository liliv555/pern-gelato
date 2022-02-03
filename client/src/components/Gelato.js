import React, { Component } from 'react';

import EditForm from './EditForm'


class Gelato extends Component {

    deleteGelato = async (id) => {
        try {
          await fetch(`http://localhost:5000/gelatos/${id}`, {
            method: "DELETE"
          });
          this.props.getGelatos();
        } catch (err) {
          console.error(err.message);
        }
      };

    render() {
        return (
            <div className='gelato-card'>
                <img src={this.props.imageUrl} alt='Ice cream' className='card-image'></img>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <div className="card-options">
                    <EditForm key={this.props.id}
                        id={this.props.id}
                        title={this.props.title}
                        description={this.props.description}
                        imageUrl={this.props.imageUrl}
                        getGelatos={this.props.getGelatos}
                        />
                    <button className="option-icon" onClick={() => this.deleteGelato(this.props.id)}><i className="fas fa-trash-alt"></i></button>
                </div>
            </div>
        );
    }
}

export default Gelato;
