const { getAllLaunches } = require('../../models/launches.model');

function httpGetLaunches(req, res) {
  const launches = getAllLaunches();
  return res.status(200).json(launches);
}

module.exports = {
  httpGetLaunches,
};
