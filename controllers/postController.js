import connection from "../connection.js"; // Importa la connessione al database

//*GET
export function index(req, res) {
  connection.query("SELECT * FROM posts", (error, results) => {
    if (error)
      return res.status(500).json({ error: "errore nella query del DB" });
    res.json({ lunghezza: results.length, posts: results });
  });
}

//! show post by id
//*GET
export function show(req, res) {
  const postId = parseInt(req.params.id);
  const select = "SELECT * FROM posts WHERE id = ?";
  connection.query(select, [postId], (error, results) => {
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
  const id = parseInt(req.params.id); // convert string to number and whit req.params.id I get the id from the url
  const index = posts.findIndex((e) => e.id === id); // find the index of the post by id
  if (index !== -1) {
    posts.splice(index, 1); // splice method remove the element from the array by index, the second parameter is the number of elements to remove
    res.sendStatus(204); // 204 status code means that the server has successfully fulfilled the request and that there is no additional content to send in the response payload body
  } else {
    res.status(404);
    res.json({
      error: 404,
      message: "No post found with this ID",
    });
  }
}
