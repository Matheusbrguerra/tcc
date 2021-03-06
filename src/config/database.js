require("dotenv/config");

module.exports = {
  dialect: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  logging:false,
  define: {
    timstamps: true,
    underscored: true,
    underscoredAll: true
  }
};