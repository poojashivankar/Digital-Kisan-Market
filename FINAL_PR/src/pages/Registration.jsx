import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        mobile_no: '',
        email: '',
        password: '',
        confirm_password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (e.target.name === 'confirm_password') {
            // Clear error if passwords match
            if (e.target.value === formData.password) {
                setError('');
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (formData.password !== formData.confirm_password) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5001/register', formData);
            alert(response.data.message);
        } catch (error) {
            alert(error.response?.data?.message || 'An error occurred. Please try again.');
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                maxWidth: '400px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
            }}
        >
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Register</h2>
            {error && <p style={{ color: 'red', textAlign: 'center', marginBottom: '10px' }}>{error}</p>}
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ margin: '10px 0', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
            <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                style={{ margin: '10px 0', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            >   <option >Role</option>
                <option value="farmer">Farmer</option>
                <option value="buyer">Buyer</option>
            </select>
            <input
                type="text"
                name="mobile_no"
                placeholder="Mobile No"
                value={formData.mobile_no}
                onChange={handleChange}
                required
                style={{ margin: '10px 0', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ margin: '10px 0', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                style={{ margin: '10px 0', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
            <input
                type="password"
                name="confirm_password"
                placeholder="Confirm Password"
                value={formData.confirm_password}
                onChange={handleChange}
                required
                style={{ margin: '10px 0', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
            <button
                type="submit"
                style={{
                    margin: '10px 0',
                    padding: '10px',
                    backgroundColor: '#28a745',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s'
                }}
            >
                Register
            </button>
        </form>
    );
}

export default Register;
