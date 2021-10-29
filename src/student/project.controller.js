const db = require("../models/main");
const Students = db.students;
const Projects = db.projects;

const getProjects = (req, res) => {
  Projects.findAll({
    include: ["students"],
  })
    .then((students) => {
      res.send(students);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const getProjectById = (req, res) => {
  const id = parseInt(req.params.id);
  Projects.findAll({
    where: {
      id: id,
    },
    include: ["students"],
  })
    .then((student) => {
      if (student.length) {
        res.send(student);
      } else {
        res.status(404).send("No project found with given id");
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const addProject = (req, res) => {
  const { name } = req.body;

  Projects.create({ name: name })
    .then((project) => {
      res.send(project);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const updateProject = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  Projects.findAll({
    where: { id: id },
  })
    .then((data) => {
      if (!data.length) {
        res.send("Project does not exist");
      } else {
        Projects.update(
          { name: name },
          {
            where: { id: id },
          }
        )
          .then((data) => {
            res.send("Project Updated");
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

const removeProject = (req, res) => {
  const id = parseInt(req.params.id);

  Projects.findAll({
    where: { id: id },
  })
    .then((data) => {
      if (!data.length) {
        res.send("Project does not exist");
      } else {
        Projects.destroy({
          where: { id: id },
        })
          .then((data) => {
            res.send("Project Removed");
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

const removeAllProjects = (req, res) => {
  Projects.destroy({
    where: {},
    truncate: false,
  })
    .then((data) => {
      res.send("All Projects removed successfully");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  getProjects,
  getProjectById,
  addProject,
  updateProject,
  removeProject,
  removeAllProjects,
};
