import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';


class EditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      title: this.props.title,
      description: this.props.description,
      imageUrl: this.props.imageUrl,
      show: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  // Close modal
  handleClose = () => {
    this.setState( {show: false} );
    this.props.getGelatos();
  };

  // Open modal
  handleShow = () => {
    this.setState( {show: true } );
  };

  // set state to the input values
  handleChange(e) {
    const { target }  = e;
    const { value } = target;
    const { name }  = target;

    this.setState({ [name]: value });
  }

  // send put request with the state
  handleSubmit(e) {
    this.setState( {show: false} )
    this.props.getGelatos();
    e.preventDefault();
    const { id, title, description, imageUrl } = this.state;
    const body = { id, title, description, imageUrl };
    const json = JSON.stringify(body);
    console.log(json)
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: json
    };
    fetch(`http://localhost:5000/gelatos/${this.state.id}`, requestOptions)
      .then(response => response.json());
    }

  render() {
    return (
      <>
        <button className="option-icon" onClick={this.handleShow}>
          <i className="fa fa-edit"></i>
        </button>
  
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <h1>Edit {this.props.title} gelato</h1>
          </Modal.Header>
          <Modal.Body>
            <div>
                <form className="form-control p-3" onSubmit={this.handleSubmit}>
                    <label className='m-2'>Title</label>
                    <input type="text" name="title" className="form-control p-2" onChange={this.handleChange} defaultValue={this.state.title}></input>
                    <label className='m-2'>Description</label>
                    <textarea name="description" className="form-control p-2" onChange={this.handleChange} defaultValue={this.state.description}  rows="3"></textarea>
                    {/* <input type="text" name="description" className="form-control" onChange={this.handleChange} defaultValue={this.state.description}></input> */}
                    <label className='m-2'>Image URL</label>
                    <input type="text" name="imageUrl" className="form-control p-2" onChange={this.handleChange} defaultValue={this.state.imageUrl}></input>
                    <div className="options">
                      <button className="button-form" type="submit" > Update </button>
                      <button className="button-form" onClick={this.handleClose}> Close </button>
                    </div>
                </form>
            </div>
        </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default EditForm;