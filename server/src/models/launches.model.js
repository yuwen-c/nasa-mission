const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  target: 'Kepler-442 b',
  customer: ['ZTM', 'NASA'],
  upcoming: true,
  success: true,
};

// Add the launch to the launches Map
launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

// 從launches map中得到最新的launch的flightNumber
function getLatestFlightNumber() {
  return Math.max(...launches.keys());
}

function addNewLaunch(launch) {
  const lastLaunch = getLatestFlightNumber();
  const modifiedLaunch = {
    ...launch,
    flightNumber: lastLaunch + 1,
    upcoming: true,
    success: true,
    launchDate: new Date(launch.launchDate),
  };
  launches.set(lastLaunch+1, modifiedLaunch);
  return modifiedLaunch;
}

module.exports = {
  getAllLaunches,
  addNewLaunch
};
