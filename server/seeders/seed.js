const db = require('../config/connection');
const { Donation } = require('../models');

db.once('open', async () => {
    try {
      await Donation.deleteMany({});
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
    console.log('data deleted!');
    process.exit(0);
});
