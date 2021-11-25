import React, { useState } from "react";

const AddProduct = ({ addProduct }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    phone: "",
    image: "",
  });
  function handleValues(e) {
    let product = {
      ...newProduct,
      [e.target.name]: e.target.value,
    };
    setNewProduct(product);

  }
  function checkValues() {
    if (!newProduct.name || !newProduct.phone || !newProduct.image) {
      alert("Добавьте клиента!");
      return;
    }
    addProduct({ ...newProduct, id: Date.now() });
    setNewProduct({
      name: "",
      phone: "",
      image: "",
    });
  }
  return (
    <div className="d-flex flex-column align-items-center mt-3 mb-3">
      <input
        value={newProduct.name}
        onChange={handleValues}
        type="text"
        placeholder="Client Name"
        name="name"
        className="col-5 mb-2"
      />
      <input
        value={newProduct.phone}
        onChange={handleValues}
        type="number"
        placeholder="Phone"
        name="phone"
        className="col-5 mb-2"
      />
      <input
        value={newProduct.image}
        onChange={handleValues}
        type="text"
        placeholder="Customer Photo"
        name="image"
        className="col-5 mb-2"
      />
      <button id="but" onClick={() => checkValues()} className="btn btn-secondary col-3 ">
        Add Contact
      </button>
    </div>
  );
};

export default AddProduct;
