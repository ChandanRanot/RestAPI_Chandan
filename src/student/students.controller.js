const db = require("../models/main");
const Students = db.students;
const Project = db.projects;

const getStudents = (req, res) => {
  Students.findAll({
    include: ["project"],
  })
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
    include: ["project"],
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
  const { name, email, age, dob, projectId } = req.body;
  const student = {
    name: name,
    email: email,
    age: age,
    dob: dob,
    projectId: projectId,
  };

  Students.create(student)
    .then((student) => {
      res.send(student);
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

const removeStudent = (req, res) => {
  const id = parseInt(req.params.id);

  Students.findAll({
    where: { id: id },
  })
    .then((data) => {
      if (!data.length) {
        res.send("Student does not exist");
      } else {
        Students.destroy({
          where: { id: id },
        })
          .then((data) => {
            res.send("Student Removed");
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

const removeAllStudents = (req, res) => {
  Students.destroy({
    where: {},
    truncate: false,
  })
    .then((data) => {
      res.send("All Students removed successfully");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  updateStudent,
  removeStudent,
  removeAllStudents,
};
