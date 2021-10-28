module.exports = (sequelize, Sequelize) => {
  const Project = sequelize.define(
    "projects",
    {
      name: {
        type: Sequelize.STRING,
      },
    },
    { timestamps: false }
  );
  return Project;
};
