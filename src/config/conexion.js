const sql = require("mssql");

const config = {
  user: "vehiman",
  password: "S00p0rt32024*",
  server: "216.158.231.74",
  database: "hospitaliza",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};


const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    return pool;
  })
  .catch((err) => console.log("Error al conectar a la base de datos:", err));

module.exports = {
  sql,
  poolPromise,
};
