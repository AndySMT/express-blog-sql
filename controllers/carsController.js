const cars = require("../dataBase/carsData");

function index(req, res) {
  const tag = req.query.tag;
  if (tag) {
    const filteredCars = cars.filter((car) => car.tag.includes(tag));
    if (filteredCars.length > 0) {
      res.json({ lunghezza: filteredCars.length, cars: filteredCars });
    } else {
      res.status(404).send(`<i>Nessun auto trovata per il tag:</i> <b>${tag}`);
    }
  } else {
    res.json({ lunghezza: cars.length, cars: cars });
  }
}
exports.index = index;
