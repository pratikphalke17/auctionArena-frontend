import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import Navbar from "./components/Navbar";
import Companies from "./pages/Companies";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import CompanyCard from "./components/auctioneer/CompanyCard";
import AllTeams from "./components/team/AllTeams";
import { useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import PrizesPage from "./pages/PrizesPage";
import RulesPage from "./pages/RulesPage";
import AboutPage from "./pages/AboutPage";
import { jwtDecode } from "jwt-decode";
// import { useLocation } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");
  const navigate = useNavigate();
  // const location = useLocation();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
      const decodedToken = jwtDecode(token);
      setUserRole(decodedToken.role);
    }
    console.log(userRole);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token from localStorage
    setIsLoggedIn(false); // Update isLoggedIn state
    setUserRole("");
    navigate("/login",{ replace: true });
  };

  return (
    <>
      <Navbar
        isLoggedIn={isLoggedIn}
        userRole={userRole}
        handleLogout={handleLogout}
        setIsLoggedIn={setIsLoggedIn}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/prizes" element={<PrizesPage />} />
        <Route path="/rules" element={<RulesPage />} />

        {!isLoggedIn && (
          <>
            <Route
              path="/login"
              element={
                <Login
                  setIsLoggedIn={setIsLoggedIn}
                  setUserRole={setUserRole}
                />
              }
            />

            <Route path="/signup" element={<Signup />} />
          </>
        )}
        
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
