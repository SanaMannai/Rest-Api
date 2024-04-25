const person = require("../model/personmodel");

//createPerson
const createPerson = async (req, res) => {
  try {
    const personCreated = await person.insertMany(req.body);
    res
      .status(200)
      .json({ msg: "person created with success", data: personCreated });
  } catch (err) {
    {
      res.status(500).json({ msg: "server error", err });
    }
  }
};

// Get All Persons
const getAllPersons = async (req, res) => {
  try {
    const AllPersons = await person.find({});
    res.status(200).json({ msg: "All persons", data: AllPersons });
  } catch (err) {
    res.status(500).json({ msg: "server error", err });
  }
};

//Find Person By ID
const onePerson = async (req, res) => {
  console.log(req.params.id);
  try {
    const singlePerson = await person.findById("662ac9f8706a4cd8b7185304");
    console.log(singlePerson);
    res.status(200).json({ msg: "Found person", data: singlePerson });
  } catch (err) {
    res.status(500).json({ msg: "Internal server error", err });
  }
};
//findOneAndUpdate
const updatePerson = async (req, res) => {
  try {
    const personUpdated = await person.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res
      .status(200)
      .json({ msg: "person updated with success", data: personUpdated });
  } catch (err) {
    res.status(500).json({ msg: "Internal server error", err });
  }
};
//model.remove()
const deletePersonByName = async (req, res) => {
  try {
    const personDeleted = await person.deleteOne({ name: "hana" });
    res
      .status(200)
      .json({ msg: "person deleted with success", data: personDeleted });
  } catch (err) {
    res.status(500).json({ msg: "Internal server error", err });
  }
};
//findByIdAndRemove
const removeById = async (req, res) => {
  try {
    await person.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "person deleted with success", data: null });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error", err });
  }
};

module.exports = {
  getAllPersons,
  createPerson,
  onePerson,
  updatePerson,
  deletePersonByName,
  removeById,
};
