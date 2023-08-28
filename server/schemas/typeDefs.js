const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Donation {
    _id: ID
    amount: Int!
    donor: String!
    date: String!
  }
  
  type Query {
    donations: [Donation]
  }
  
  type Mutation {
    addDonation(amount: Int!, donor: String!): Donation
  }
  `

module.exports = typeDefs;