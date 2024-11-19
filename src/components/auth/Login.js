// LoginPage.js
import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
      <div
        className="row shadow-lg bg-white rounded"
        style={{ maxWidth: "900px" }}
      >
        <div className="col-lg-6 d-none d-lg-block bg-primary p-4">
          <div className="d-flex justify-content-center align-items-center h-100">
            <img
              src="https://via.placeholder.com/300" // Replace this with your illustration image URL
              alt="Illustration"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 p-4">
          <h2 className="text-center mb-4">Welcome Back :)</h2>
          <p className="text-center mb-4">
            To keep connected with us, please log in with your personal info.
          </p>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember Me
              </label>
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">
                Login Now
              </button>
              <button type="button" className="btn btn-secondary">
                Create Account
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p>Or you can join with</p>
            <div className="d-flex justify-content-center">
              <button className="btn btn-outline-secondary me-2">
                <i className="fab fa-google"></i> Google
              </button>
              <button className="btn btn-outline-secondary me-2">
                <i className="fab fa-facebook"></i> Facebook
              </button>
              <button className="btn btn-outline-secondary">
                <i className="fab fa-twitter"></i> Twitter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
