import React from "react";
import { Button, Modal } from "react-bootstrap";

const EditModal = ({ show, handleClose, productToEdit, setProductToEdit, updateProduct }) => {
  function handleValues (e){
     let editedProduct = {
         ...productToEdit,
         [e.target.name]: e.target.value
     }
     setProductToEdit(editedProduct)
     console.log(editedProduct)
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center">
          <input onChange={handleValues} value={productToEdit.name} placeholder="Name" name="name" className="mb-1" />
          <input onChange={handleValues} value={productToEdit.phone} placeholder="Phone" name="phone" className="mb-1" />
          <input onChange={handleValues} value={productToEdit.image} placeholder="Image" name="image" className="mb-1" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => updateProduct()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditModal;
