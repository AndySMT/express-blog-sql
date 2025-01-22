//importo il modulo mysql2 che mi consente di interagire con MySQL
import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

// uso il un metodo che ho importato con il modulo mysql2 per creare una connessione tra MySQL e Node JS
const connection = mysql.createConnection({
  host: process.env.DB_HOST, //indica l'indirizzo del database
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE, // indica il database
});

// tento di stabilire la connessione con il database usando i dati indicati sopra
connection.connect((error) => {
  if (error) {
    console.error("Errore durante la connessione al database:", error);
  } else {
    console.log("Connessione al database stabilitaaaaaaaaaaaaaaaaaaaaa!");
  }
});

export default connection;
