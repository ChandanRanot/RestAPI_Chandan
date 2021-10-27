const pool = require("../../db.js");

const getStudents = (req, res) => {
  pool.query("SELECT * FROM students", (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
};

const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("SELECT * FROM students WHERE id =$1", [id], (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
};

const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;
  pool.query(
    "INSERT INTO students (name,email,age,dob) VALUES ($1,$2,$3,$4)",
    [name, email, age, dob],
    (err, result) => {
      if (err) throw err;
      res.status(201).send("Student added successfully");
    }
  );
};

const removeStudent = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("SELECT * FROM students WHERE id =$1", [id], (err, result) => {
    if (!result.rows.length) {
      res.send("Student does not exist");
    }

    pool.query("DELETE FROM students WHERE id = $1", [id], (err, result) => {
      if (err) throw err;
      res.status(200).send("Student Removed");
    });
  });
};

const updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  pool.query("SELECT * FROM students WHERE id =$1", [id], (err, result) => {
    if (!result.rows.length) {
      res.send("Student does not exist");
    }

    pool.query(
      "UPDATE students SET name = $1 WHERE id = $2",
      [name, id],
      (err,
      (result) => {
        if (err) throw err;
        res.status(200).send("student updated");
      })
    );
  });
};

module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  removeStudent,
  updateStudent,
};
