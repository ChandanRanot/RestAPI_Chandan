const db = require("../models/main");
const Students = db.students;

const getStudents = (req, res) => {
  Students.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  Students.findAll({
    where: {
      id: id,
    },
  })
    .then((data) => {
      if (data.length) {
        res.send(data);
      } else {
        res.status(404).send("No student found with given id");
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;
  const student = { name: name, email: email, age: age, dob: dob };

  Students.create(student)
    .then((data) => {
      res.send("Student Added");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  Students.findAll({
    where: { id: id },
  })
    .then((data) => {
      if (!data.length) {
        res.send("Student does not exist");
      } else {
        Students.update(
          { name: name },
          {
            where: { id: id },
          }
        )
          .then((data) => {
            res.send("Student Updated");
          })
          .catch((err) => {
            res.status(500).send(err);
          });
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

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
  getStudentById,
  addStudent,
  updateStudent,
  // removeStudent,
  // removeAllStudents,
};
