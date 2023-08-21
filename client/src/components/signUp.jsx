import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const history = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5173/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log('Sending FormData:', formData);
  
      const data = await response.json();
      console.log('Raw Server Response:', JSON.stringify(data));

      localStorage.setItem('authToken', data.token);
      history.push('/');  

    } catch (error) {
      console.error('There was an error registering the user', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    history.push('/');  // Redirecting to home after logout
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input 
            type="text" 
            name="firstName"
            value={formData.firstName} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input 
            type="text" 
            name="lastName"
            value={formData.lastName} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Username:</label>
          <input 
            type="text" 
            name="username"
            value={formData.username} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            name="password"
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <button type="submit">Sign Up</button>
      </form>
      <button onClick={handleLogout}>Sign Out</button>
    </div>
  );
}

export default SignUp;