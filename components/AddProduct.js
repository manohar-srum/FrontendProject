import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';


const AddProduct = () => {
  const [products, setproducts] = useState({
    name: '',
    price: '',
    quantity: '',
    description: '',
    category: '',
    rating: '',
    expirydate: '',
  });

  const handleChange = (e) => {
    setproducts({ ...products, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/products/add', products).then((res) => {
      console.log(res.data);
      alert("Product Added Successfully!!!")
    });
  };

  return (
    <div className="container mt-5">
      <h2>Add Product Details</h2>
      <Form onSubmit={handleSubmit}>
        {/* Add form fields based on your requirements */}
        {/* Example: */}
        <Form.Group controlId="formName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            name="name"
            value={products.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formPrice">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="double"
            placeholder="Enter product price"
            name="price"
            value={products.price}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label> Product Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product description"
            name="description"
            value={products.description}
            onChange={handleChange}
          />
        </Form.Group>

        
        <Form.Group controlId="formCategory">
          <Form.Label>Product Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product category"
            name="category"
            value={products.category}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formQuantity">
          <Form.Label>Product Quantity</Form.Label>
          <Form.Control
            type="integer"
            placeholder="Enter product quantity"
            name="quantity"
            value={products.quantity}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formRating">
          <Form.Label>Proudtc Rating</Form.Label>
          <Form.Control
            type="double"
            placeholder="Enter product rating"
            name="rating"
            value={products.rating}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formExpiryDate">
          <Form.Label>Product Expiry Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter product Expirydate"
            name="expirydate"
            value={products.expirydate}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Repeat the above Form.Group for other fields like price, quantity, etc. */}

        <Button variant="primary" type="submit">
          Add Product
        </Button>
      
      </Form>
    </div>
  );
};

export default AddProduct;
