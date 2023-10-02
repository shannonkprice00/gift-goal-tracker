import React from "react";
import "./welcome.css";

const Welcome = () => {
  return (
    <div className="container centered-card">
      <div className="card">
        <div className="card-header">Jesse to Jamaica!</div>
        <div className="card-body">
          <p className="card-text">
            Let's get Jesse to Dunn's River for Kelley and Will's wedding so he
            can celebrate with the rest of us.
          </p>
          <div className="center-button">
            <a href="#" className="btn btn-primary">
              Log Donation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
