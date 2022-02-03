import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

import EditForm from './EditForm';

export default function EditGelato ({ gelato }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => {
      setShow(false);
      console.log(gelato)
    }
    const handleShow = () => {
      setShow(true);
      console.log(gelato)
    } 
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit gelato</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditForm key={gelato.props.id} id={gelato.props.id} title={gelato.props.title} description={gelato.props.description} imageUrl={gelato.props.imageUrl}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
