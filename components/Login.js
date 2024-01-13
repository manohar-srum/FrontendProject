import React, { useState } from 'react';


const Login = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add authentication logic here, e.g., call an API
    // For now, just simulate a successful login
    //onLogin({ username, password });
    document.writeln("Login Successfully Please Operate CRUD Operations!!!")
    
  };

  return (
    
    <div className='login'>
       <h2>Product Management System Login</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
       
      
    
    

    </div>
  );
};

export default Login;
