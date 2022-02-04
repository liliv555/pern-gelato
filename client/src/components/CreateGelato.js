import React, { Fragment, useState } from 'react';
import { Modal } from 'react-bootstrap';
import * as service from '../services/provider.js'

const CreateGelato = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setimageUrl] = useState("https://images.unsplash.com/photo-1623595119708-26b1f7300075?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aWNlJTIwY3JlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (e) => {
        handleClose();
        e.preventDefault();
        const body = { title, description, imageUrl }
        props.gelatoCreated(body);
        const json = JSON.stringify(body);
        await service.create(json)
        // const requestOptions = {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: json
        // };
        // fetch(`http://localhost:5000/gelatos/`, requestOptions)
        //   .then(response => response.json());
    }

    return (
        <Fragment>
        <>
        <button className="new-button" onClick={handleShow}>
            <i className="fas fa-ice-cream"></i> Add gelato
        </button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <h1>Edit gelato</h1>
        </Modal.Header>
        <Modal.Body>
            <div>
                <form className="form-control p-3" onSubmit={handleSubmit}>
                    <label className='m-2'>Title</label>
                    <input type="text"
                        name="title"
                        className="form-control p-2" onChange={(e) => setTitle(e.target.value)}></input>
                    <label className='m-2'>Description</label>
                    <textarea name="description" className="form-control p-2" onChange={(e) => setDescription(e.target.value)} rows="3"></textarea>
                    <label className='m-2'>Image URL</label>
                    <input type="text" name="imageUrl" className="form-control p-2" onChange={(e) => setimageUrl(e.target.value)}></input>
                    <div className="options">
                    <button className="button-form" type="submit" > Create </button>
                    <button className="button-form" onClick={handleClose}> Cancel </button>
                    </div>
                </form>
            </div>
        </Modal.Body>
        </Modal>
        </>
        </Fragment>
    );
}

export default CreateGelato;
