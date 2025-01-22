import connection from "../connection.js"; // Importa la connessione al database

//*GET
export function index(req, res) {
  connection.query("SELECT * FROM posts", (error, results) => {
    if (error)
      return res.status(500).json({ error: "errore nella query del DB" });
    res.json({ lunghezza: results.length, posts: results });
  });
}

//*GET
export function show(req, res) {
  const postId = parseInt(req.params.id);
  const query = `
    SELECT posts.*, GROUP_CONCAT(tags.label) AS tags
    FROM posts
    INNER JOIN post_tag ON post_tag.post_id = posts.id
    INNER JOIN tags ON post_tag.tag_id = tags.id
    WHERE posts.id = ?
    GROUP BY posts.id;
  `;
  const select = "SELECT * FROM posts WHERE id = ?";
  connection.query(query, [postId], (error, results) => {
    if (error)
      return res.status(500).json({ error: "errore nella query del DB" });
    if (results.length === 0)
      return res.status(404).json({
        error: 404,
        message: "nessun post trovato con questo ID",
      });
    res.json(results[0]);
  });
}
//! create new post
//*POST
export function store(req, res) {
  let newId = 0;
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id > newId) {
      newId = posts[i].id;
    }
  }
  newId += 1;
  /////////////////////////////////////////////////
  const newPost = {
    id: newId,
    titolo: req.body.titolo,
    contenuto: req.body.contenuto,
    immagine: req.body.immagine,
    tag: req.body.tag,
  };
  console.log(req.body);
  posts.push(newPost);
  res.status(201).json(newPost);
}
//! update post by id (modifa tutto il post)
//*PUT
export function update(req, res) {
  const postId = parseInt(req.params.id);
  const post = posts.find((post) => post.id === postId);
  if (!post) {
    res.status(404).json({
      error: 404,
      message: "No post found with this ID",
    });
    return;
  }
  for (let key in post) {
    if (key !== "id") post[key] = req.body[key];
  }
  res.json(post);
}

// modify post by id (modifica parziale del post)
//*PATCH
export function modify(req, res) {
  route.patch("/:id", (req, res) => {
    res.send("Modifica parziale post");
  });
}
//! delete post by id
//*DELETE
export function destroy(req, res) {
  const id = parseInt(req.params.id);
  const index = posts.findIndex((e) => e.id === id);
  connection.query(
    "DELETE * FROM posts WHERE id = ?",
    [id],
    (error, results) => {
      if (error) res.status(500).json({ error: "errore nella query del DB" });
      results.sendstatus(204).json({ message: "post eliminato" });
    }
  );
}
