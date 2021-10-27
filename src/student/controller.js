const pool = require("../../db.js");

const getStudents = (req, res) => {
  pool.query("SELECT * FROM students", (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
};

const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(`SELECT * FROM students WHERE id =${id}`, (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
};

module.exports = {
  getStudents,
  getStudentById,
};
