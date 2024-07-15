import React from 'react';
import { Route, Routes} from 'react-router-dom';
import AuctioneerPage from './pages/AuctioneerPage';
import TeamPage from './pages/TeamPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import Companies from './pages/Companies';

function App() {
  return (
<>
        <Navbar/>
        <Routes>
          <Route path="/" element={<div>hello panya</div>} /> 
          <Route path="/auctioneer" element={<AuctioneerPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/companies" element={<Companies/>}/>
        </Routes>
</>
  );
}

export default App;



