import express from "express"; // Import express
const app = express(); // Create instance of express
const port = process.env.port; // Set port
import router from "./routes/postsRoutes.js"; // Import posts routes
import errorHandler from "./middlewares/errorsHandler.js"; // Import error handler middleware

import cors from "cors"; // Import cors
app.use(cors()); // Abilita CORS per tutte le richieste prima devi installarlo "npm i cors"
//! middleware
app.use(express.json()); // il body di qualunque richiesta sarà convertito in json
app.use(express.static("public")); // Server static files

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the home page",
    try: {
      posts: "/posts",
      Image: "/images/cracker_barbabietola.jpeg",
      cars: "/cars",
    },
  });
});

app.use("/", router); // Use posts routes

app.all("*", (req, res) => {
  res.status(404).json({
    error: 404,
    message: "This page doesn't exist",
  });
});
app.use(errorHandler); // Uso error handler middleware

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); // Start server and listen on port 3000
