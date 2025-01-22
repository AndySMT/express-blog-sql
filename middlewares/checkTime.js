function checkTime(req, res, next) {
  const currentTime = new Date().toLocaleString();
  console.log(
    `Ciao, sono il middleware checkTime e l'orario attuale è ${currentTime}`
  );
  next();
}

module.exports = checkTime;
