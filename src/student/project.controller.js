const db = require("../models/main");
const Projects = db.project;

const getProjects = (req, res) => {
  Projects.findAll()
    .then((data) => {
      res.send(data);
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
  })
    .then((data) => {
      if (data.length) {
        res.send(data);
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
    .then((data) => {
      res.send("Project Added");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  getProjects,
  getProjectById,
  addProject,
};
