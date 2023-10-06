import React, { useState } from "react";
import "./DonateForm.css";
import { useMutation } from "@apollo/client";
import { ADD_DONATION } from "../../utils/mutations";
import Thermometer from "../../components/Thermometer";
import { Alert } from "react-bootstrap";

const DonateForm = () => {
  const [addDonation, { error }] = useMutation(ADD_DONATION);
  const [successMessage, setSuccessMessage] = useState("");
  const [formState, setFormState] = useState({
    donor: "",
    amount: "",
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      if (!formState.donor) {
        alert("You must enter a donor name!");
        return;
      }
      // Add additional validation to guide users to enter whole numbers only
      if (!formState.amount) {
        alert("You must enter a donation amount!");
        return;
      }
      const { data } = addDonation({
        variables: { ...formState },
      });

      setFormState({
        donor: "",
        amount: "",
      });
      setSuccessMessage("Thank you!!! Donation logged successfully!");
      // figure out how to re-render the thermometer to update on submit without refreshing the page?
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "donor") {
      setFormState({ ...formState, [name]: value });
    } else if (name === "amount") {
      const intValue = parseInt(value, 10);
      setFormState({ ...formState, [name]: intValue });
    }
  };

  return (
    <main className="d-flex">
      <Thermometer />
      <div className="container centered-card">
        <div className="card">
          <div className="card-header" id="welcomeCardTitle">
            Donation Form
          </div>
          <div className="card-body">
            <p className="card-text">
              Please fill out the information below and click the "Log Donation"
              button below to update Jesse's total donated funds.
            </p>
            <div id="firstName" className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Donor Name
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="First and Last Name"
                name="donor"
                value={formState.donor}
                onChange={handleChange}
              />
            </div>
            <div id="donationAmount" className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Donation Amount $
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                name="amount"
                value={formState.amount}
                onChange={handleChange}
              />
            </div>
            <div className="center-button d-flex justify-content-center">
              <a
                href="/donateForm"
                className="btn btn-primary donationFormBtn"
                onClick={handleFormSubmit}
              >
                Log Donation
              </a>
              <a href="/" className="btn btn-primary donationFormBtn">
                Back
              </a>
            </div>
            {successMessage && (
              <Alert variant="success" className="mt-3 successMessage">
                {successMessage}
              </Alert>
            )}
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                Something went wrong...
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DonateForm;
