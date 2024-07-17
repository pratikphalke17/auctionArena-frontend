import React, { useState } from 'react';
import './CompanyCard.css';  // Import the CSS file for custom styles

const companyData = [
  {
    companyLogoUrl: "https://logos-world.net/wp-content/uploads/2021/08/Barclays-Logo-2002-present.png",
    Domain: "Finance",
    BasePrice: "$200,000",
    CompanyName: "Barclays",
    isSold: false
  },
  {
    companyLogoUrl: "https://images.squarespace-cdn.com/content/v1/5b2a614d2714e5b57e2512f0/1534203794139-7GJGO5NKL3MBAOIV1751/logo-techcorp-engenharia.png",
    Domain: "Technology",
    BasePrice: "$1000",
    CompanyName: "TechCorp",
    isSold: true
  },
  {
    companyLogoUrl: "https://logopond.com/logos/3a1bd409f2fd8ff2888cff747ba91e5d.png",
    Domain: "Healthcare",
    BasePrice: "$2000",
    CompanyName: "HealthPlus",
    isSold: false
  },
  {
    companyLogoUrl: "https://content.couponspy.in/public/shop/613.png",
    Domain: "Retail",
    BasePrice: "$1500",
    CompanyName: "RetailMart",
    isSold: true
  },
  {
    companyLogoUrl: "https://www.eduworldgroup.com/public/user/img/icons/main_logo.png",
    Domain: "Education",
    BasePrice: "$500",
    CompanyName: "EduWorld",
    isSold: false
  }
];

const CompanyCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % companyData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + companyData.length) % companyData.length);
  };

  const currentCompany = companyData[currentIndex];

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card text-center company-card" style={{ width: '500px' }}>
        <div className="card-header">
          <img src={currentCompany.companyLogoUrl} alt="Company Logo" className="img-fluid" style={{ width: '280px', height: '200px' }} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{currentCompany.CompanyName}</h5>
          <div className="d-flex justify-content-between">
            <p className="card-text"><strong>Domain:</strong> {currentCompany.Domain}</p>
            <p className="card-text"><strong>Base Price:</strong> {currentCompany.BasePrice}</p>
          </div>
          <div className="dropdown mt-3">
            <select className="form-select" aria-label="Select Team">
              <option defaultValue>Select a Team</option>
              <option value="1">Team 1</option>
              <option value="2">Team 2</option>
              <option value="3">Team 3</option>
              <option value="4">Team 4</option>
              <option value="5">Team 5</option>
              <option value="6">Team 6</option>
            </select>
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary btn-lg" type="button" disabled={currentCompany.isSold}>
              {currentCompany.isSold ? "Already Sold" : "Sell Company"}
            </button>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <button className="btn btn-secondary" onClick={handlePrevious}>Previous</button>
          <button className="btn btn-secondary" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;
