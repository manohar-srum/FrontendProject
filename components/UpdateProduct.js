import axios from "axios";
import { useEffect, useState } from "react";

const UpdateProduct = () => {
const [products, setProducts] = useState([]);
const [formData, setFormData] = useState({
  name: '',
  price: '',
  category: '',
  description: '',
  quantity: '',
  rating: '',
  expiryDate: '',
});

useEffect(() => {
  // Fetch all products
  axios.get('http://localhost:8080/products/all')
    .then(response => setProducts(response.data))
    .catch(error => console.error('Error fetching products:', error));
}, []);

const handleInputChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleUpdate = (id) => {
  // Update product by ID
  axios.put(`http://localhost:8080/products/update`, formData)
    .then(response => {
      setProducts(products.map(product => (product.id === id ? response.data : product)));
      setFormData({
        name: '',
        price: '',
        category: '',
        description: '',
        quantity: '',
        rating: '',
        expiryDate: '',
      });
    })
    .catch(error => console.error('Error updating product:', error));
    alert("Product Updated!!!")
};

const handleDelete = (id) => {
  // Delete product by ID
  axios.delete(`http://localhost:8080/products/${id}`)
    .then(() => setProducts(products.filter(product => product.id !== id)))
    .catch(error => console.error('Error deleting product:', error));
    alert("Product Deleted in database!!!")
};

return (
  <div className="container mt-4">
    <h2>Product Management</h2>
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Rating</th>
          <th>Expiry Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
            <td>{product.description}</td>
            <td>{product.quantity}</td>
            <td>{product.rating}</td>
            <td>{product.expiryDate}</td>
            <td>
              <button
                className="btn btn-warning btn-sm mr-4"
                onClick={() => setFormData(product)}
              >
                UpdateProducts
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(product.id)}
              >
                Delete Products
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    <h2>Update Product</h2>
    <form>


      {/* Include your input fields here with appropriate Bootstrap styling */}
      {/* For example: */}
      <div className="form-group">
        <label> Product Name:</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label> Product Price:</label>
        <input
          type="double"
          className="form-control"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label> Product Rating:</label>
        <input
          type="double"
          className="form-control"
          name="rating"
          value={formData.rating}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label> Product Expiry Date:</label>
        <input
          type="date"
          className="form-control"
          name="date"
          value={formData.expiryDate}
          onChange={handleInputChange}
        />
      </div>


      {/* ... Repeat for other fields ... */}
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => handleUpdate(formData.id)}
      >
        {formData.id ? 'Update' : 'update'}
      </button>
    </form>
    
  </div>
)
        }
export default UpdateProduct;