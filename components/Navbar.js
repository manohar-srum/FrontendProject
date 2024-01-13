import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/add-product">Add Product</Link>
        </li>
        <li>
          <Link to="/view-product">View Product</Link>
        </li>
        <li>
          <Link to="/update-product">Update and Delete Product</Link>
        </li>
        {/* <li className='nav-item'>
          <Link onClick={props.login}>Login</Link>
        </li> */}

      </ul>
    </nav>
  );
};

export default Navbar(props);
