const router = require('express').Router();
const { Dogs, Owner, Potential } = require('../models');


router.get('/', async (req, res) => {
    try {
        const PotentialOwnerData = await PotentialOwner.findAll();
        return res.status(200).json(potentialOwnerData);
    } catch(err) {
        return res.status(500).json(err);
    }
});

module.exports = router;

