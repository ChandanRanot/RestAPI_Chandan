const pool = require("../../db.js");

const getStudents = (req, res) => {
  pool.query("SELECT * FROM students", (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
};

module.exports = {
  getStudents,
};
