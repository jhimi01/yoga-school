import React, { useState } from 'react';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform signup logic here with the form data
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);
      // Reset form fields
      setName('');
      setEmail('');
      setPassword('');
    };
  
    return (
        <div className='md:flex items-center justify-between'>
            <div className='w-full'>
                <img className='w-full' src="https://i.ibb.co/h9mM4CV/pexels-hatice-baran-14252564.jpg" alt="" />
            </div>

            <div className='w-full'> <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Sign Up</button>
    </form></div>
        </div>
    );
};

export default Register;