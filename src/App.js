import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import Navbar from "./components/Navbar";
import Companies from "./pages/Companies";
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import CompanyCard from "./components/auctioneer/CompanyCard";
import AllTeams from "./components/team/AllTeams";
import { useNavigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token from localStorage
    setIsLoggedIn(false); // Update isLoggedIn state
    setUserRole("");
    navigate("/login");
    
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} userRole={userRole} handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} />}
        />
        <Route
          path="/"
          element={<h1>Home Page</h1>}
        />
        <Route path="/signup" element={<Signup />} />
        {isLoggedIn && (
          <>
            <Route path="/companies" element={<Companies />} />
            {userRole === "admin" && (
              <Route path="/admin" element={<AdminDashboard />} />
            )}
            {userRole === "team" && (
              <Route path="/user" element={<UserDashboard />} />
            )}
            <Route path="/auctioneer" element={<CompanyCard />} />
            <Route path="/team" element={<AllTeams />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;