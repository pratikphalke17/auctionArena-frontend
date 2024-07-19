

// export default AllTeams;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
// import './AllTeams.css';

const AllTeams = () => {
  const [userTeam, setUserTeam] = useState(null);
  const [otherTeams, setOtherTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          // Handle case where token is not available
          return;
        }

        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id; // Adjust this based on your token structure
        console.log(userId);

        // Fetch user team data
        const userTeamResponse = await axios.get(`http://localhost:3000/teams/team/getTeamData/${userId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        setUserTeam(userTeamResponse.data.team);
        console.log(userTeamResponse.data.team);
        
        // Fetch all teams data
        const allTeamsResponse = await axios.get('http://localhost:3000/teams/team/getAllTeamsData', {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        setOtherTeams(allTeamsResponse.data.teams);
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching team data:', error);
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid mt-0 p-5">
      <h2 className="text-center mb-4">User Dashboard</h2>
      <div className="row">
        <div className="col-lg-4 mb-4">
          <div className="card h-100">
            <div className="card-header bg-primary text-white text-center">Your Team</div>
            <div className="card-body">
              {userTeam ? (
                <>
                  <h5 className="card-title text-center">{userTeam.name}</h5>
                  <p className="card-text text-center"><strong>Remaining Budget:</strong> {userTeam.budget}</p>
                  <h6 className="text-center">Companies Bought:</h6>
                  <ul className="list-group">
                    {userTeam.purchasedCompanies.map((company, index) => (
                      <li key={index} className="list-group-item">{company.name}</li>
                    ))}
                  </ul>
                </>
              ) : (
                <div className="text-center">No team data available</div>
              )}
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="card h-100">
            <div className="card-header bg-success text-white text-center">Other Teams</div>
            <div className="card-body">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Team Name</th>
                    <th>Companies Bought</th>
                    <th>Remaining Budget</th>
                  </tr>
                </thead>
                <tbody>
                  {otherTeams.map((team, index) => (
                    <tr key={index}>
                      <td>{team.name}</td>
                      <td>{team.purchasedCompanies.map((company) => company.name).join(', ')}</td>
                      <td>{team.budget}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTeams;
