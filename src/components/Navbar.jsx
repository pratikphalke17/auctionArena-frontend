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
        <NavLink className="navbar-brand" to="/" replace>Auction Arena</NavLink>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" replace>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" replace>
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/rules" replace>
                Rules
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/prizes" replace>
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
                  <NavLink className="nav-link" to="/login" replace>Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup" replace>Sign Up</NavLink>
                </li>
              </>
            )}
            {isLoggedIn && (
              <>
              {userRole === "admin" && (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/admin" replace>
                      Admin Dashboard
                    </NavLink>
                  </li>
                </>
              )}
              {userRole === "team" && (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/user" replace>
                      User Dashboard
                    </NavLink>
                  </li>
                </>
              )}
              <li className="nav-item">
                <NavLink className="nav-link" to="/companies" replace>
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
