import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

const Navbar = ({ isLoggedIn, userRole,handleLogout,setIsLoggedIn }) => {
  console.log(isLoggedIn);
  console.log(userRole);

  useEffect(() => {
    if(localStorage.getItem('token')){
      setIsLoggedIn(true);
    }
  },[]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Auction Arena</NavLink>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/rules">
                Rules
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/prizes">
                Prizes
              </NavLink>
            </li>
          </ul>

        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {!isLoggedIn && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
                </li>
              </>
            )}
            {isLoggedIn && (
              <>
              {userRole === "admin" && (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/admin">
                      Admin Dashboard
                    </NavLink>
                  </li>
                </>
              )}
              {userRole === "team" && (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/user">
                      User Dashboard
                    </NavLink>
                  </li>
                </>
              )}
              <li className="nav-item">
                <NavLink className="nav-link" to="/companies">
                  All Companies
                </NavLink>
              </li>
              <li className="nav-item">
                <button className="btn nav-link" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
