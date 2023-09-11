const express = require("express");
const notes = require("../../models/notes");

 const createNotes = async (req, res) => {
  const { description, cardColor } = req.body;
  try {
    const createData = await notes.create({
      description: description,
      cardColor: cardColor,
    });
    res
      .status(201)
      .json({ message: "Notes Created Successfully", notes: createData });
  } catch (error) {
    res.status(400).json({ error: "Error in Creating Notes" });
  }
};

 const getNotes = async (req, res) => {
  try {
    const getAllNotes = await notes.find();
    res
      .status(201)
      .json({ message: "Notes Fetched Successfully", notes: getAllNotes });
  } catch (error) {
    res.status(400).json({ error: "Error in fetching Notes" });
  }
};

module.exports = {createNotes, getNotes}