const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "studentsdb",
  password: "chandan123",
  port: 5432,
});

module.exports = pool;
