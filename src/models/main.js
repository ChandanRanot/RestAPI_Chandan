const Sequelize = require("sequelize");

const sequelize = new Sequelize("studentsdb", "postgres", "chandan123", {
  host: "localhost",
  dialect: "postgres",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.students = require("./students.model.js")(sequelize, Sequelize);
db.projects = require("./project.model.js")(sequelize, Sequelize);

db.projects.hasMany(db.students, { as: "students" });
db.students.belongsTo(db.projects, {
  foreignKey: "projectId",
  as: "project",
});

module.exports = db;
