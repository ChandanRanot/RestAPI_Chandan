const db = require("../models/main");
const Students = db.students;

const getStudents = (req, res) => {
  Students.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

// const getStudentById = (req, res) => {
//   const id = parseInt(req.params.id);
//   pool.query("SELECT * FROM students WHERE id =$1", [id], (err, result) => {
//     if (err) throw err;
//     res.status(200).json(result.rows);
//   });
// };

// const addStudent = (req, res) => {
//   const { name, email, age, dob } = req.body;
//   pool.query(
//     "INSERT INTO students (name,email,age,dob) VALUES ($1,$2,$3,$4)",
//     [name, email, age, dob],
//     (err, result) => {
//       if (err) throw err;
//       res.status(201).send("Student added successfully");
//     }
//   );
// };

// const updateStudent = (req, res) => {
//   const id = parseInt(req.params.id);
//   const { name } = req.body;

//   pool.query("SELECT * FROM students WHERE id =$1", [id], (err, result) => {
//     if (!result.rows.length) {
//       res.send("Student does not exist");
//     }

//     pool.query(
//       "UPDATE students SET name = $1 WHERE id = $2",
//       [name, id],
//       (err,
//       (result) => {
//         if (err) throw err;
//         res.status(200).send("student updated");
//       })
//     );
//   });
// };

// const removeStudent = (req, res) => {
//   const id = parseInt(req.params.id);

//   pool.query("SELECT * FROM students WHERE id =$1", [id], (err, result) => {
//     if (!result.rows.length) {
//       res.send("Student does not exist");
//     }

//     pool.query("DELETE FROM students WHERE id = $1", [id], (err, result) => {
//       if (err) throw err;
//       res.status(200).send("Student Removed");
//     });
//   });
// };

// const removeAllStudents = (req, res) => {
//   pool.query("DELETE FROM students", (err, result) => {
//     if (err) throw err;
//     res.status(200).send("All students removed");
//   });
// };

module.exports = {
  getStudents,
  // getStudentById,
  // addStudent,
  // removeStudent,
  // updateStudent,
  // removeAllStudents,
};
