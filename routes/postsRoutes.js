import express from "express"; // Import express
const router = express.Router(); // Create instance of express router
import {
  index,
  show,
  store,
  update,
  modify,
  destroy,
} from "../controllers/postController.js";

// Rotta GET for all posts
router.get("/posts", index);
// Rotta GET for one post
router.get("/posts/:id", show);
// Rotta DELETE for one post
router.delete("/posts/:id", destroy);
// Rotta POST for create a new post
router.post("/posts", store);
// Rotta PUT for update a post
router.put("/posts/:id", update);

export default router;
