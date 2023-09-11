const mongoose = require("mongoose");

const notesData = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    cardColor: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const notes = mongoose.model("notes", notesData);
module.exports = notes;
