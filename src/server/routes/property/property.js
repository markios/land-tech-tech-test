const express = require('express');
const soldData = require('./data/soldData.js');
const responseEnvelope = require('../../utils/responseEnvelope');

const propertiesRouter = express.Router();

propertiesRouter.get('/property/sold', (_, res) => res.status(200).json(responseEnvelope({
  data: soldData(),
})));

module.exports = propertiesRouter;
