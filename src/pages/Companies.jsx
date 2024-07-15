import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// companies array will be fetched from data base

const companies = [
  { "Name": "Company A", "Domain": "Type 1", "BasePrice": 200000, "SolAt": 500000, "TeamName": "Team B" },
  { "Name": "Company B", "Domain": "Type 2", "BasePrice": 150000, "SolAt": 300000, "TeamName": "Team C" },
  { "Name": "Company C", "Domain": "Type 3", "BasePrice": 180000, "SolAt": 400000, "TeamName": "Team D" },
  { "Name": "Company D", "Domain": "Type 4", "BasePrice": 220000, "SolAt": 550000, "TeamName": "Team A" },
  { "Name": "Company E", "Domain": "Type 5", "BasePrice": 250000, "SolAt": 600000, "TeamName": "Team E" },
  { "Name": "Company F", "Domain": "Type 6", "BasePrice": 190000, "SolAt": 450000, "TeamName": "Team F" },
  { "Name": "Company G", "Domain": "Type 1", "BasePrice": 210000, "SolAt": 500000, "TeamName": "Team A" },
  { "Name": "Company H", "Domain": "Type 2", "BasePrice": 160000, "SolAt": 310000, "TeamName": "Team B" },
  { "Name": "Company I", "Domain": "Type 3", "BasePrice": 170000, "SolAt": 380000, "TeamName": "Team C" },
  { "Name": "Company J", "Domain": "Type 4", "BasePrice": 230000, "SolAt": 530000, "TeamName": "Team D" }
];

const Companies = () => {
  const groupedCompanies = companies.reduce((acc, company) => {
    (acc[company.Domain] = acc[company.Domain] || []).push(company);
    return acc;
  }, {});

  return (
    <div className="container mt-2 mb-5">
      <h1 className="my-4 text-center">Companies</h1>
      {Object.keys(groupedCompanies).map(domain => (
        <div className="domain-section mt-5" key={domain}>
          <h2>{domain}</h2>
          {groupedCompanies[domain].map(company => (
            <div className="card company-card mt-2" key={company.Name}>
              <div className="card-body">
                <h5 className="card-title">
                  {company.Name}
                </h5>
                <p className={`card-text ${company.SolAt ? 'company-sold' : 'company-unsold'}`}>
                  {company.SolAt ? `Sold at $${company.SolAt.toLocaleString()}` : 'Unsold'}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Companies;
