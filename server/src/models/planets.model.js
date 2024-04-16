// const planets = ['planet1', 'planet2', 'planet3'];
// module.exports = planets;

const fs = require('fs');
const path = require('path');
const {parse} = require('csv-parse');

const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}

/**
 * 因為streams是async的，當node不會等他做完，才module export。
 * 我們希望server先處理完planets，再開始serve資料。
 * 
 * 需要等待的code -> 用async/await -> 但是對象必須是promise -> return一個promise
 */

function loadPlanetsData() {
  console.log('Loading planet data...');
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
      .pipe(parse({
        comment: '#',
        columns: true,
      }))
      .on('data', (data) => {
        if (isHabitablePlanet(data)) {
          habitablePlanets.push(data);
        }
      })
      .on('error', (err) => {
        console.log(err);
      })
      .on('end', () => {
        // console.log(habitablePlanets.map((planet) => {
        //   return planet['kepler_name'];
        // }));
        console.log(`${habitablePlanets.length} habitable planets found!`);
        resolve(); 
        // 通常resolve()裡面會接回傳的值，
        // 但我們會另外export出habitablePlanets，所以這裡不用回傳
    });
  });
}

module.exports = {
  loadPlanetsData,
  planets: habitablePlanets,
};