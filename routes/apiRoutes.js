var router = require("express").Router();
var notes = require("../db/notes.js")

// JSON file read
router.get("/api/notes", function (req, res) {
  res.json(dbJSON);
});



router.post("/api/notes", function (req, res) {
  
  let newNote = { id: 1, ...req.body };
  let allNotes = { ...dbJSON, newNote };
  console.log(allNotes);

  console.log(dbJSON);
  let jsonString = Json.stringify(allNotes)
});



router.delete("/notes/:id", function (req, res) {
  notes.removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch(err => res.status(500).json(err));
})
module.exports = router;




