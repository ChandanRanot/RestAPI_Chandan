const Sequelize = require("sequelize");

const sequelize = new Sequelize("studentsdb", "postgres", "chandan123", {
  host: "localhost",
  dialect: "postgres",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.students = require("./students.model.js")(sequelize, Sequelize);

module.exports = db;
