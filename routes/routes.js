const express = require('express');
const Router = express.Router();

Router.use('/api', require('./user_routes'));


Router.use('*', (req, res) => {
    res.status(404).json({
        message: "You might be lost"
    });
})


module.exports = Router;
