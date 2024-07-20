import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import AuctioneerPage from '../components/auctioneer/CompanyCard'; // Replace with your actual component
import AllCompanies from '../pages/Companies'; // Replace with your actual component
import CreateCompany from '../components/auctioneer/CreateCompanyCard'; // Replace with your actual component
import UpdateCompany from '../components/auctioneer/UpdateCompanyForm'; // Replace with your actual component
import CreateDomain from '../components/auctioneer/CreateDomainForm'; // Replace with your actual component

function AdminDashboard() {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar border-primary" style={{ borderRight: '5px solid blue', height: '100%' }}>
          <div className="sidebar-sticky">
            <h1 className="h2">Admin Dashboard</h1>
            <p>Welcome, Admin!</p>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/auctioneer" className="nav-link" replace>
                  Auctioneer Page
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/companies" className="nav-link" replace>
                  All Companies
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/createCompany" className="nav-link" replace>
                  Create Company
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/updateCompany" className="nav-link" replace>
                  Update Company
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/createDomain" className="nav-link" replace>
                  Create Domain
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <Routes>
            <Route path="/auctioneer" element={<AuctioneerPage />} />
            <Route path="/companies" element={<AllCompanies />} />
            <Route path="/createCompany" element={<CreateCompany />} />
            <Route path="/updateCompany" element={<UpdateCompany />} />
            <Route path="/createDomain" element={<CreateDomain />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
