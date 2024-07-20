import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Companies.css'; // Ensure your CSS handles card styling properly

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
      Logo: company.logo,
      Rating: company.rating,
      MarketCap: company.marketCapital,
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
    <div className="custom-container container mt-5 mb-5">
      <h1 className="my-4 text-center">
        Companies {' '}
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
        </svg>
      </h1>
      {Object.keys(groupedCompanies).map(domain => (
        <div className="domain-section mt-5" key={domain}>
          <h2 className='text-center'>{domain}</h2>
          <div className="sold-companies">
            <h4>Sold Companies {' '}
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
              </svg>
            </h4>
            {groupedCompanies[domain].sold.length === 0 ? (
              <p>No sold companies</p>
            ) : (
              <div className="row">
                {groupedCompanies[domain].sold.map(company => (
                  <div className="col-md-6 mt-2" key={company.Name}>
                    <div className="card company-card">
                      <div className="card-body">
                        <h4 className="card-title">{company.Name}</h4>
                        <h5>Base Price: {company.BasePrice.toLocaleString()}</h5>
                        <h6 className="card-text company-sold">
                          Sold at {company.SolAt.toLocaleString()} to {company.TeamName}
                        </h6>
                        <p>Rating: {company.Rating} <br/>Market Capital: ${company.MarketCap.toLocaleString()}</p>
                        <img src={company.Logo} alt={`${company.Name} logo`} className="company-logo" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="unsold-companies mt-4">
            <h4>Unsold Companies {' '}
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-ban" viewBox="0 0 16 16">
                <path d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0"/>
              </svg>
            </h4>
            {groupedCompanies[domain].unsold.length === 0 ? (
              <p>No unsold companies</p>
            ) : (
              <div className="row">
                {groupedCompanies[domain].unsold.map(company => (
                  <div className="col-md-6 mt-2" key={company.Name}>
                    <div className="card company-card">
                      <div className="card-body">
                        <h4 className="card-title">{company.Name}</h4>
                        <h5>Base Price: {company.BasePrice.toLocaleString()}</h5>
                        <h6 className="card-text company-unsold">Unsold</h6>
                        <p>Rating: {company.Rating} <br/>Market Capital: ${company.MarketCap.toLocaleString()}</p>
                        <img src={company.Logo} alt={`${company.Name} logo`} className="company-logo" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Companies;
