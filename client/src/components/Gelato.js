import React, { Component } from 'react';

import EditForm from './EditForm'


class Gelato extends Component {
    render() {
        return (
            <div className='gelato-card'>
                <img src={this.props.imageUrl} alt='Ice cream' className='card-image'></img>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <div className="card-options">
                    <EditForm key={this.props.id} id={this.props.id} title={this.props.title} description={this.props.description} imageUrl={this.props.imageUrl} />
                    <button className="option-icon"><i class="fas fa-trash-alt"></i></button>
                </div>
            </div>
        );
    }
}

export default Gelato;
