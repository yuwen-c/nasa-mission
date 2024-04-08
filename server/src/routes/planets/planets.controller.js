// 定義getAllPlanets

const planets = [];

function getAllPlanets(req, res) {
  console.log('Getting all planets');
  return res.status(200).json(planets);
};

module.exports = {
  getAllPlanets
};