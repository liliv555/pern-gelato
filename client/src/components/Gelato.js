import React, { Component } from 'react';

import EditGelato from './EditGelato'


class Gelato extends Component {
    render() {
        return (
            <div className='gelato-card'>
                <img src={this.props.imageUrl} alt='Ice cream' className='card-image'></img>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <div className="card-options">
                    <EditGelato gelato={this} />
                    {/* <i class="fa fa-edit"></i>
                    <i class="fas fa-trash-alt"></i> */}
                </div>
            </div>
        );
    }
}

export default Gelato;
