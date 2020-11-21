const fs = require("fs");
const router = require("express").Router();
const dbJSON = require("../db/db.json")


// JSON file read
router.get("/api/notes", function (req, res) {
  res.json(dbJSON);
});
