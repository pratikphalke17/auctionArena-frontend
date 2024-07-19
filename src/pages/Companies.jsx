import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Companies.css';


const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const token = localStorage.getItem('token'); // Get token from localStorage
        const config = {
          headers: {
            Authorization: `Bearer ${token}`, // Attach token to headers
          },
        };

        const response = await axios.get('http://localhost:3000/company/getAllCompanies', config);
        setCompanies(response.data.companies);
      } catch (error) {
        console.error('Error fetching companies:', error);
        // Handle error state or redirect to login if unauthorized
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []); // Run once on component mount

  if (loading) return <div>Loading...</div>; // Handle loading state

  const groupedCompanies = companies.reduce((acc, company) => {
    const domain = company.domain.name;
    if (!acc[domain]) {
      acc[domain] = { sold: [], unsold: [] };
    }
    const companyData = {
      Name: company.name,
      Domain: domain,
      BasePrice: company.basePrice,
      SolAt: company.soldAt,
      TeamName: company.soldTo ? company.soldTo.name : null,
    };
    if (company.sold) {
      acc[domain].sold.push(companyData);
    } else {
      acc[domain].unsold.push(companyData);
    }
    return acc;
  }, {});

  return (
    <div className="custom-container container mt-5">
      <h1 className="my-4 text-center">Companies</h1>
      {Object.keys(groupedCompanies).map(domain => (
        <div className="domain-section mt-5" key={domain}>
          <h2>{domain}</h2>
          <div className="sold-companies">
            <h3>Sold Companies</h3>
            {groupedCompanies[domain].sold.length === 0 ? (
              <p>No sold companies</p>
            ) : (
              groupedCompanies[domain].sold.map(company => (
                <div className="card company-card mt-2" key={company.Name}>
                  <div className="card-body">
                    <h4 className="card-title">{company.Name}</h4>
                    <h5>Base Price: {company.BasePrice.toLocaleString()}</h5>
                    <h6 className="card-text company-sold">
                      Sold at {company.SolAt.toLocaleString()} to {company.TeamName}
                    </h6>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="unsold-companies mt-4">
            <h3>Unsold Companies</h3>
            {groupedCompanies[domain].unsold.length === 0 ? (
              <p>No unsold companies</p>
            ) : (
              groupedCompanies[domain].unsold.map(company => (
                <div className="card company-card mt-2" key={company.Name}>
                  <div className="card-body">
                    <h4 className="card-title">{company.Name}</h4>
                    <h5>Base Price: {company.BasePrice.toLocaleString()}</h5>
                    <h6 className="card-text company-unsold">Unsold</h6>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Companies;