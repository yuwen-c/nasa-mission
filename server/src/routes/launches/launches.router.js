const express = require('express');
const { httpGetLaunches, httpPostLaunches, httpAbortLaunch } = require('./launches.controller');


const launchesRouter = express.Router();


launchesRouter.get('/', httpGetLaunches);
launchesRouter.post('/', httpPostLaunches);
launchesRouter.delete('/:id', httpAbortLaunch);

module.exports = launchesRouter;
