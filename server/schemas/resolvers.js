const { Donation } = require('../models');

const resolvers = {
    Query: {
        donations: async () => {
            return Donation.find()
        }
    },

    Mutation: {
        addDonation: async (parent, { amount, donor }) => {
            const newDonation = await Donation.create({ amount, donor });
            return newDonation;
        }
    }
}

module.exports = resolvers;