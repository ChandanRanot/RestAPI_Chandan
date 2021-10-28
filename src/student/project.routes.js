const { Router } = require("express");
const projController = require("./project.controller.js");

const router = Router();

router.get("/", projController.getProjects);

router.get("/:id", projController.getProjectById);

router.post("/", projController.addProject);

router.put("/:id", projController.updateProject);

router.delete("/:id", projController.removeProject);

// router.delete("/", controller.removeAllStudents);

module.exports = router;
