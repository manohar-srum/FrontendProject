import React  from 'react';
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ViewProduct from './components/ViewProduct';
import Footer from './components/Footer';
import { Nav, Navbar } from 'react-bootstrap';
import UpdateProduct from './components/UpdateProduct';
import './App.css';

function App() {

    
  
  return (
<Router>
      <div>
       
     </div>
    <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">
              Product Management System
           </Navbar.Brand>

           <Nav className="mr-auto">
             <Nav.Link as={Link} to="/login">
             Login
             </Nav.Link>
                  </Nav>

        <Nav className="mr-auto">
             <Nav.Link as={Link} to="/AddProduct">
             Add Products
             </Nav.Link>
                  </Nav>

                  <Nav className="mr-auto">
             <Nav.Link as={Link} to="/ViewProduct">
             View Products 
             </Nav.Link>
                  </Nav>

                  <Nav className="mr-auto">
             <Nav.Link as={Link} to="/UpdateProduct">
             Update and Delete Products
             </Nav.Link>
                  </Nav>


        
         </Navbar >

         <div className="container">
      
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/Addproduct" element={<AddProduct />} />
            <Route path="/viewproduct" element={<ViewProduct />} />
            <Route path="/updateproduct" element={<UpdateProduct/>} />
            
          </Routes>
          {/* <EmployeeList/> */}
      </div>
            </div>
       <Footer />
          </Router>
  )
}

export default App;
