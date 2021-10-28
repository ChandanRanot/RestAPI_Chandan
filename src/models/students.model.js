module.exports = (sequelize, Sequelize) => {
  const Students = sequelize.define(
    "students",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      age: {
        type: Sequelize.INTEGER,
      },
      dob: {
        type: Sequelize.DATE,
      },
    },
    { timestamps: false }
  );
  return Students;
};
