const express = require('express');
const routing = express.Router();
const searcher = require('../Controller/searcher');

routing.get('/searchproduct/:displayName', searcher.search);

routing.all('*', searcher.invalid);

module.exports = routing;
