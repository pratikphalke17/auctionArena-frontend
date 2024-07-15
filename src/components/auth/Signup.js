import React, { useState } from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css';

function Signup() {
  const [teamName, setTeamName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/signup', {
        teamName,
        password,
        accountType: 'team',
      });
      // Handle success (e.g., redirect to login or team page)
    } catch (error) {
      setError('Error creating account');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <form onSubmit={handleSubmit} className="p-5 bg-white rounded shadow signup-card" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4 text-primary">Sign Up</h2>
        <div className="mb-3">
          <label className="form-label">Team Name</label>
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
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-primary w-100 signup-button">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;