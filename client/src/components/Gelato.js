import React, { Component } from 'react';

class Gelato extends Component {
    render() {
        return (
            <div>
                <h1>This is a {this.props.title} gelato</h1>
            </div>
        );
    }
}

export default Gelato;
