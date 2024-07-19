import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './CompanyCard.css'; // Import the CSS file for custom styles

const CompanyCard = () => {
  const [companies, setCompanies] = useState([]);
  const [teams, setTeams] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTeam, setSelectedTeam] = useState('');
  const [soldAt, setSoldAt] = useState('');

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
      }
    };

    const fetchTeams = async () => {
      try {
        const token = localStorage.getItem('token'); // Get token from localStorage
        const config = {
          headers: {
            Authorization: `Bearer ${token}`, // Attach token to headers
          },
        };

        const response = await axios.get('http://localhost:3000/teams/team/getAllTeamsData', config); // Adjust endpoint URL as per your backend
        setTeams(response.data.teams);
      } catch (error) {
        console.error('Error fetching teams:', error);
        // Handle error state or redirect to login if unauthorized
      }
    };

    fetchCompanies();
    fetchTeams();
  }, []); // Run once on component mount

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + companies.length) % companies.length);
  };

  const handleTeamChange = (event) => {
    setSelectedTeam(event.target.value);
  };

  const handleSoldAtChange = (event) => {
    setSoldAt(event.target.value);
  };

  const handleSellCompany = async () => {
    try {
      const token = localStorage.getItem('token'); // Get token from localStorage
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Attach token to headers
        },
      };

      const currentCompany = companies[currentIndex];
      const response = await axios.put(
        'http://localhost:3000/company/sellCompany',
        { companyId: currentCompany._id, teamId: selectedTeam, soldAt },
        config
      );

      // Update the local state after successful sale
      setCompanies((prevCompanies) =>
        prevCompanies.map((company) =>
          company._id === currentCompany._id ? { ...company, sold: true } : company
        )
      );
      alert(response.data.message); // Show success message
    } catch (error) {
      console.error('Error selling company:', error);
      // Handle error state or display error message
    }
  };

  const currentCompany = companies[currentIndex];

  if (!currentCompany || teams.length === 0) return <div>Loading...</div>; // Handle loading state

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card text-center company-card" style={{ width: '500px' }}>
        <div className="card-header">
          <img src={currentCompany.logo} alt="Company Logo" className="img-fluid" style={{ width: '280px', height: '200px' }} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{currentCompany.name}</h5>
          <div className="d-flex justify-content-between">
            <p className="card-text"><strong>Domain:</strong> {currentCompany.domain.name}</p>
            <p className="card-text"><strong>Base Price:</strong> {currentCompany.basePrice}</p>
          </div>
          <div className="dropdown mt-3">
            <select className="form-select" aria-label="Select Team" onChange={handleTeamChange} value={selectedTeam}>
              <option value="">Select a Team</option>
              {teams.map((team) => (
                <option key={team._id} value={team._id}>{team.name}</option>
              ))}
            </select>
          </div>
          <div className="mt-3">
            <input
              type="number"
              className="form-control"
              placeholder="Sold At (Price)"
              value={soldAt}
              onChange={handleSoldAtChange}
              min="0"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              className="btn btn-primary btn-lg"
              type="button"
              disabled={currentCompany.sold}
              onClick={handleSellCompany}
            >
              {currentCompany.sold ? "Already Sold" : "Sell Company"}
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
};

export default CompanyCard;




