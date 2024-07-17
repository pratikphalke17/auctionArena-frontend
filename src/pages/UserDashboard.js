import React from 'react';
import { Link } from 'react-router-dom';


function UserDashboard() {
  return (
    <div class="mt-4 p-2">
      <h1>User Dashboard</h1>
      <p>Welcome, User!</p>
      <ul>
        <li><Link to="/team">Team Page</Link></li>
        <li><Link to="/companies">All Companies</Link></li>
      </ul>
    </div>
  );
}

export default UserDashboard;
