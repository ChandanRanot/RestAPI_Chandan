module.exports = (sequelize, Sequelize) => {
  const students_projects = sequelize.define(
    "students_projects",
    {
      student_id: { type: Sequelize.INTEGER },
      project_id: { type: Sequelize.INTEGER },
    },
    { timestamps: false }
  );
  return students_projects;
};
