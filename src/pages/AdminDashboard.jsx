import React from 'react';
import { Link } from 'react-router-dom';



function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, Admin!</p>
      <ul>
        <li><Link to="/auctioneer" replace>Auctioneer Page</Link></li>
        <li><Link to="/companies" replace>All Companies</Link></li>
        <li><Link to="/createCompany" replace>Create Company</Link></li>
        <li><Link to="/auctioneer" replace>Update Company</Link></li>
        <li><Link to="/auctioneer" replace>Create Domain</Link></li>
      </ul>
      
    </div>
  );
}

export default AdminDashboard;
