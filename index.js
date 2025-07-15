import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv, { config } from "dotenv";
import db from "./config/database.js";
import router from "./routes/routes.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import https from "https";
import fs from "fs";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log("FILE NAME", __filename);
console.log("DIR NAME", __dirname);
dotenv.config();
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/uploads/.tmp", express.static("/uploads/.tmp"));
app.use(router);
// app.use("/", (req, res) => {
//   return res.send("HELLO THIS IS HOME PAGE!");
// });

// // HTTPS server setup
const pathke = __dirname + "/ssl.key" ;
const pathcer = __dirname + "/ssl.crt" ;

const key = fs.readFileSync(pathke, {encoding:'utf8'});
const cert = fs.readFileSync(pathcer, {encoding:'utf8'});
const server = https.createServer({ key: key, cert: cert }, app);

const port = 30006;

// app.listen(port, () => {
//   console.log(`THIS SERVER IS OM FIRE WITH FLAMABILITY OF ${port}`);
// });
app.get('/',(rea, res ) => {
  res.send('HELLO ZORLD/')
});

// // Start the HTTPS server
server.listen(port,  () => {
  console.log(`Server is on fire 🔥 with flamability of ${port}!`);
});

