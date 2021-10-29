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
db.students_projects = require("./students_projects.js")(sequelize, Sequelize);

db.project.belongsToMany(db.students, {
  through: db.students_projects,
  foreignKey: "project_id",
});

db.students.belongsToMany(db.project, {
  through: db.students_projects,
  foreignKey: "student_id",
});

module.exports = db;
