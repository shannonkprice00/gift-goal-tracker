import React from "react";
import { Link } from "react-router-dom";
import Thermometer from "../../components/Thermometer";
import "./home.css";

const Home = () => {
  return (
    <main className="d-flex">
    <Thermometer />
      <div className="container centered-card">
        <div className="card">
          <div className="card-header" id="welcomeCardTitle">
            🌴 Jesse to Jamaica! 🌴
          </div>
          <div className="card-body">
            <p className="card-text">
              Let's get Jesse to Dunn's River for Kelley and Will's wedding so
              he can celebrate with the rest of us. Click the "Donation Form"
              button below to log your donation{" "}
              <em>(donation information will be kept anonymous)</em> and update
              the total donated amount.
            </p>
            <div className="center-button">
              <Link to="/donateForm" className="btn btn-primary">
                Donation Form
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
