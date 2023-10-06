import { gql } from "@apollo/client";

export const ADD_DONATION = gql `
  mutation addDonation($amount: Int!, $donor: String!) {
    addDonation(amount: $amount, donor: $donor) {
            _id
            amount
            donor
            date
    }
  }
`;