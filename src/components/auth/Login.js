import React, { useState } from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

function Login() {
  const [teamName, setTeamName] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState('team'); // Default to team
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        teamName,
        password,
        accountType,
      });
      // Handle success (e.g., redirect to dashboard)
    } catch (error) {
      setError('Invalid login credentials');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <form onSubmit={handleSubmit} className="p-5 bg-white rounded shadow login-card" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4 text-primary">Login</h2>
        <div className="mb-3">
          <label className="form-label">Team Name / Actioneer Name</label> 
          <input
            type="text"
            className="form-control"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Account Type</label>
          <select
            className="form-select"
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
          >
            <option value="team">Team</option>
            <option value="auctioneer">Auctioneer</option>
          </select>
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-primary w-100 login-button">Login</button>
      </form>
    </div>
  );
}

export default Login;