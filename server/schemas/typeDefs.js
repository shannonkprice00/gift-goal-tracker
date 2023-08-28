const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Donation {
    _id: ID
    amount: Int
  }
  
  type Query {
    donations: [Donation]
  }
  
  type Mutation {
    addDonation(amount: Int!): Donation
  }
  `

module.exports = typeDefs;