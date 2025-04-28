import { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';
import HomeNavbar from '../components/HomeNavbar';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post('/auth/signup', form);
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (error) {
      alert(error.response.data.message || 'Signup Failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
    <HomeNavbar />
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md space-y-4 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
        <input className="input" name="name" placeholder="Name" onChange={handleChange} required />
        <input className="input" name="email" placeholder="Email" onChange={handleChange} required />
        <input className="input" type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit" className="btn-primary w-full">Signup</button>
      </form>
    </div>
    </div>
  );
};

export default Signup;
