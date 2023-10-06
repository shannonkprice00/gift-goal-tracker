import React, { useState } from "react";
import "./DonateForm.css";
import { useMutation } from "@apollo/client";
import { ADD_DONATION } from "../../utils/mutations";

const DonateForm = () => {

  const [addDonation, {error}] = useMutation(ADD_DONATION);
  const [formState, setFormState] = useState({
    donor: "",
    amount: "",
});

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      if(!formState.donor) {
        alert("You must enter a donor name!");
        return;
      }
      if(!formState.amount || formState.amount === null) {
        alert("You must enter a donation amount!");
        return;
      }
      const { data } = addDonation({
        variables: { ...formState },
      });
      console.log(formState);
      console.log(data);

      setFormState({
        donor: "",
        amount: "",
      });
      // add functionality for a thank you note or redirect home, etc.

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
    <div className="container centered-card">
      <div className="card">
        <div className="card-header" id="welcomeCardTitle">
          Donation Form
        </div>
        <div className="card-body">
          <p className="card-text">
           Please fill out the information below and click the "Log Donation" button below to update Jesse's total donated funds.
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
          <div className="center-button">
            <a href="/donateForm" className="btn btn-primary" onClick={handleFormSubmit}>
              Log Donation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateForm;
