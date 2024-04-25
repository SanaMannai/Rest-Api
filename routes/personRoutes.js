const express = require("express");
const router = express.Router();
const controller = require("../handlers/person");

const {
  getAllPersons,
  onePerson,
  createPerson,
  updatePerson,
  deletePersonByName,
  removeById,
} = controller;

// router.route("/").get(getAllPersons).post(createPerson);
// router.route("/:id").get(onePerson).patch(updatePerson).delete(removeById);
// router.route("/name").delete(deletePersonByName);
router.get('/getperson',getAllPersons);
router.post('/created',createPerson);
router.get('/:id',onePerson );
router.put('/updated', updatePerson);
router.delete('/deleted', removeById);
router.delete('/name', deletePersonByName);

module.exports = router;
