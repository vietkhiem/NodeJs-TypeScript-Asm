import React from "react";

function Signup() {
  return (
    <div>
      <div className="signup-form">
        <form action="/examples/actions/confirmation.php" method="post">
          <h2>Sign Up</h2>
          <p>Please fill in this form to create an account!</p>
          <hr />
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <span className="fa fa-user" />
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-paper-plane" />
                </span>
              </div>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email Address"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-lock" />
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="password"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-check-label">
              <input type="checkbox" /> I accept the{" "}
              <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>
            </label>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg">
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-center">
          Already have an account? <a href="#">Login here</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
