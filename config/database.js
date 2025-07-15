import dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize";

const db = new Sequelize({
  database: "u159929639_baicdb",
  username: "u159929639_baicdb",
  password: "jbdx|2[N",
  host: "auth-db1058.hstgr.io",
  dialect: "mysql",
  port: 3306,
   logging: false
});
// const db = new Sequelize('baci_new', 'root', '', {
//   host: 'localhost', // Localhost for local database
//   dialect: 'mysql', // MySQL database
//   logging: false, // Disable Sequelize logging
//   dialectOptions: {
//     connectTimeout: 10000, // 10 seconds timeout
//   },
// });

db.authenticate()
  .then(() => {
    console.log("Server and DB's bond is on fire");
  })
  .catch((err) => {
    console.log("ERROR", err);
  });
export default db;
