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

module.exports = {
  getProjects,
  getProjectById,
  addProject,
  updateProject,
};
