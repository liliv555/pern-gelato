import React, { Component } from 'react';

class EditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      title: this.props.title,
      description: this.props.description,
      imageUrl: this.props.imageUrl
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // https://reactjs.org/docs/forms.html#handling-multiple-inputs
  handleChange(e) {
    const { target }  = e;
    const { value } = target;
    const { name }  = target;

    this.setState({ [name]: value });
  }


  handleSubmit(e) {
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
    // axios.put('http://localhost:3000/api/user/' + this.props.data, json).then(response => {});
    }

  render() {
    return (
        <div>
            <h1>Hello {this.props.title} </h1>
            <form onSubmit={this.handleSubmit}>
                <label>Title</label>
                <input type="text" name="title" onChange={this.handleChange} defaultValue={this.state.title}></input>
                <label>Description</label>
                <input type="text" name="description" onChange={this.handleChange} defaultValue={this.state.description}></input>
                <label>Image URL</label>
                <input type="text" name="imageUrl" onChange={this.handleChange} defaultValue={this.state.imageUrl}></input>

                <button type="submit" >Update</button>
            </form>
        </div>
    );
  }
}

export default EditForm;