const { getAllLaunches, addNewLaunch, abortLaunch } = require('../../models/launches.model');

function httpGetLaunches(req, res) {
  const launches = getAllLaunches();
  return res.status(200).json(launches);
}

function httpPostLaunches(req, res) {
  const launch = req.body;
  if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
    return res.status(400).json({
      error: 'Missing required launch property',
    });
  }
  if (new Date(launch.launchDate).toString() === 'Invalid Date') {
    return res.status(400).json({
      error: 'Invalid launch date',
    });
  }
  const newLaunch = addNewLaunch(launch);
  return res.status(201).json(newLaunch);
}

function httpAbortLaunch(req, res) {
  const launchId = Number(req.params.id);
  const aborted = abortLaunch(launchId);
  if (!aborted) {
    return res.status(404).json({
      error: 'Launch not found',
    });
  }
  return res.status(200).json(aborted);
}

module.exports = {
  httpGetLaunches,
  httpPostLaunches,
  httpAbortLaunch
};
