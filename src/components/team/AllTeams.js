import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../team/AllTeams.css';

function AllTeams() {
  
  const userTeam = {
    name: 'Team Name',
    remainingBudget: 1000,
    companiesBought: ['Company A', 'Company B']
  };

  const otherTeams = [
    {
      name: 'Team 1',
      companiesBought: ['Company X', 'Company Y'],
      remainingBudget: 800
    },
    {
      name: 'Team 2',
      companiesBought: ['Company Z'],
      remainingBudget: 950
    }
  ];

  return (
    <div className="container-fluid mt-0 p-5">
      <h2 className="text-center mb-4">User Dashboard</h2>
      <div className="row">
        <div className="col-lg-4 mb-4">
          <div className="card h-100">
            <div className="card-header bg-primary text-white text-center">Your Team</div>
            <div className="card-body">
              <h5 className="card-title text-center">{userTeam.name}</h5>
              <p className="card-text text-center"><strong>Remaining Budget:</strong> ${userTeam.remainingBudget}</p>
              <h6 className="text-center">Companies Bought:</h6>
              <ul className="list-group">
                {userTeam.companiesBought.map((company, index) => (
                  <li key={index} className="list-group-item">{company}</li>
                ))}
              </ul>
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
                      <td>{team.companiesBought.join(', ')}</td>
                      <td>${team.remainingBudget}</td>
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
}

export default AllTeams;
