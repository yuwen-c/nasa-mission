const express = require('express');
const { getAllPlanets } = require('../../routes/planets/planets.controller');


const planetsRouter = express.Router();

planetsRouter.get('/', getAllPlanets);

module.exports = planetsRouter;


