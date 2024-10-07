import React, { useState } from 'react';
import axios from 'axios';
import FormContainer from '../../components/container/Form';
import InputField from '../../components/UI/InputField';
import Button from '../../components/UI/Button';

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('/api/auth/register', {
        username,
        email,
        password,
        phone,
      });

      if (response.status === 200) {
        window.location.href = '/auth/login';
      }
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <FormContainer>
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputField
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Button type="submit">Register</Button>
      </form>
    </FormContainer>
  );
};

export default RegisterForm;