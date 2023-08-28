const { Donation } = require('../models');

const resolvers = {
    Query: {
        donations: async () => {
            return Donation.find()
        }
    },

    Mutation: {
        addDonation: async (parent, { amount }) => {
            const newDonation = await Donation.create({ amount });
            return newDonation;
        }
    }
}

module.exports = resolvers;