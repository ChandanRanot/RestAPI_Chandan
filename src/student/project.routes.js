const { Router } = require("express");
const projController = require("./project.controller.js");

const router = Router();

router.get("/", projController.getProjects);

router.get("/:id", projController.getProjectById);

// router.post("/", controller.addStudent);

// router.put("/:id", controller.updateStudent);

// router.delete("/:id", controller.removeStudent);

// router.delete("/", controller.removeAllStudents);

module.exports = router;
