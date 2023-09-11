const express = require("express");
const notes = require("../../models/notes");
const { createNotes, getNotes } = require("../../controllers/operation/operationController");
const router = express.Router();


router.post("/createNote",createNotes)
router.get("/getNotes",getNotes)








module.exports = router