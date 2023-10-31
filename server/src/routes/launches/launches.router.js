const express = require('express');

const {
  httpGetAllLaunches,
  HttpAddNewLaunch,
} = require('./launches.controller');

const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', HttpAddNewLaunch);

module.exports = launchesRouter;
