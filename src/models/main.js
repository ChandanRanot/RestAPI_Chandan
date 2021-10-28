const Sequelize = require("sequelize");

const sequelize = new Sequelize("studentsdb", "postgres", "chandan123", {
  host: "localhost",
  dialect: "postgres",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.students = require("./students.model.js")(sequelize, Sequelize);
db.project = require("./project.model.js")(sequelize, Sequelize);

db.project.belongsToMany(db.students, {
  through: "students_project",
  foreignKey: "project_id",
});

db.students.belongsToMany(db.project, {
  through: "students_project",
  foreignKey: "student_id",
});

module.exports = db;
