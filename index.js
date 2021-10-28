const express = require("express");
const studentRoutes = require("./src/student/routes.js");
const projRoutes = require("./src/student/project.routes.js");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/students", studentRoutes);
app.use("/projects", projRoutes);

const db = require("./src/models/main");
db.sequelize.sync();

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
