import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/products/all').then((res) => {
      setProducts(res.data);
      alert("Products Displayed as per database!!!")
    });
  }, []);

  return (
    <div className="container mt-5">
      <h2>View Products</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>{product.rating}</td>
              <td>{product.expirydate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default ViewProducts;
