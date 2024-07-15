// import React from 'react';

// const teams = [
//   {
//     "TeamName": "Team A",
//     "CompaniesBought": ["Company D", "Company G"],
//     "RemainingBudget": 150000
//   },
//   {
//     "TeamName": "Team B",
//     "CompaniesBought": ["Company A", "Company H"],
//     "RemainingBudget": 200000
//   },
//   {
//     "TeamName": "Team C",
//     "CompaniesBought": ["Company B", "Company I"],
//     "RemainingBudget": 180000
//   },
//   {
//     "TeamName": "Team D",
//     "CompaniesBought": ["Company C", "Company J"],
//     "RemainingBudget": 250000
//   },
//   {
//     "TeamName": "Team E",
//     "CompaniesBought": ["Company E"],
//     "RemainingBudget": 350000
//   },
//   {
//     "TeamName": "Team F",
//     "CompaniesBought": ["Company F"],
//     "RemainingBudget": 300000
//   }
// ];

// const TeamDashboard = () => {

//   return (
//     <>
//       <div className="container mt-4">
//         <h2 className="mb-4 text-center">User Dashboard</h2>
//         <div className="row justify-content-center">
//           <div className="col-md-8">
//             <div className="card">
//               <div className="card-header bg-success text-white">Teams Data</div>
//               <div className="card-body">
//                 <table className="table table-striped">
//                   <thead>
//                     <tr>
//                       <th>Team Name</th>
//                       <th>Companies Bought</th>
//                       <th>Remaining Budget</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {teams.map((team, index) => (
//                       <tr key={index}>
//                         <td>{team.TeamName}</td>
//                         <td>{team.CompaniesBought.join(', ')}</td>
//                         <td>${team.RemainingBudget.toLocaleString()}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TeamDashboard;
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../team/TeamDashbord.css';

function TeamDashboard() {
  
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

export default TeamDashboard;
