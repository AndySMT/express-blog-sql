// sostituisco il messaggio di errore default con un messaggio personalizzato
function errorHandler(err, req, res, next) {
  console.error(err.stack); //--- used to output the stack trace of an error to the console (use this only in production, may contain //!sensitive info)
  res.status(500).json({
    error: `${err.status} -> ${err.message}`,
    Message: "Stai a canna' da qualche parte! Imbecille!",
  });
}
export default errorHandler;
