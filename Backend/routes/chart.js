const express = require('express');
const chartdata = require('../data/chart-data');
const route = express.Router();

route.get('/', (req, res) => {
    res.status(200).json(chartdata);
});

module.exports = route;