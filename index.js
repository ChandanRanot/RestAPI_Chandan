const express = require("express");
const studentRoutes = require("./src/student/routes.js");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/students", studentRoutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
