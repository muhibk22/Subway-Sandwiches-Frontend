import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';
import fb from './components/fb.png';
import gp from './components/gp.png';
import tw from './components/tw.png';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login/login', {
                username,
                password,
            });
            if (response.data.success) {
                onLogin();
                navigate('/dashboard'); // Redirect to dashboard upon successful login
            } else {
                setError('Invalid username or password');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="heo">
            <div className="form-box">
                <div className="social-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={fb} alt="Facebook" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={tw} alt="Twitter" />
                    </a>
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <img src={gp} alt="Google" />
                    </a>
                </div>
                <h2>Login</h2>
                <div className="form">
                    <form onSubmit={handleLogin} className="input-group">
                        <input
                            type="text"
                            className="input-field"
                            placeholder="User Id"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            className="input-field"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <div className="remember-password">
                            <input type="checkbox" className="check-box" />
                            <span>Remember Password</span>
                        </div>
                        <button type="submit" className="submit-btn">Sign In</button>
                    </form>
                </div>
                {error && <p className="error">{error}</p>}
            </div>
        </div>
    );
}

export default Login;
