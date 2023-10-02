import react from "react";
import "./DonateForm.css";

const DonateForm = () => {
  return (
    <div className="container centered-card">
      <div className="card">
        <div className="card-header" id="welcomeCardTitle">
          Donation Form
        </div>
        <div className="card-body">
          <p className="card-text">
           Please fill out the information below and click the "Log Donation" button below to update Jesse's total donated funds.
          </p>
          <div id="firstName" class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              First Name
            </span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
          </div>
          <div id="lastName" class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Last Name
            </span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
          </div>
          <div id="donationAmount" class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Donation Amount
            </span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
          </div>
          <div className="center-button">
            <a href="/donateForm" className="btn btn-primary">
              Log Donation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateForm;
