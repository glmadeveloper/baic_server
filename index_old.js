import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import db from "./config/database.js";
import router from "./routes/routes.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import https from "https";
import fs from "fs";
import path from 'path';
// Define __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();

// // CORS Configuration
// const corsOptions = {
//   origin: "http://localhost:8080", // Allow frontend at this origin
//   methods: ["GET", "POST", "PUT", "DELETE"], // Allow necessary HTTP methods
//   allowedHeaders: ["Content-Type", "Authorization"], // Allow necessary headers, including 'Authorization'
//   credentials: true, // If you need to send cookies or authentication data with the request
// };

// app.use(cors(corsOptions)); // Apply the CORS configuration globally
const corsOptionsDelegate = (req, callback) => {
  const adminOrigin = 'http://localhost:8080'; // Replace with your Admin Panel URL
  // const adminOrigin = 'http://10.255.254.63:8080'; // Replace with your Admin Panel URL
  const websiteOrigin = 'http://10.255.254.73:3000'; // Replace with your Website URL

  let corsOptions;

  if (req.header('Origin') === adminOrigin) {
    // Admin Panel CORS configuration
    corsOptions = {
      origin: adminOrigin,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
    };
  } else if (req.header('Origin') === websiteOrigin) {
    // Website CORS configuration
    corsOptions = {
      origin: websiteOrigin,
      methods: ['GET', 'POST'],
      allowedHeaders: ['Content-Type'],
      credentials: true,
    };
  } else {
    // Disallow other origins
    corsOptions = { origin: false };
  }

  callback(null, corsOptions);
};

// Use dynamic CORS middleware
app.use(cors(corsOptionsDelegate));
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ extended: true }));
// app.use("/uploads", express.static("/uploads"));
// app.use("/uploads/.tmp", express.static("/uploads/.tmp"));
app.use("/uploads/.tmp", express.static(path.join(__dirname, "uploads", ".tmp")));

app.use(router);

// For HTTPS setup (optional, for production with SSL certificates)
// const pathke = __dirname + "/ssl.key";
// const pathcer = __dirname + "/ssl.crt";

// const key = fs.readFileSync(pathke, { encoding: 'utf8' });
// const cert = fs.readFileSync(pathcer, { encoding: 'utf8' });
// const server = https.createServer({ key: key, cert: cert }, app);

const port = 30006;

app.get('/', (req, res) => {
  res.send('HELLO WORLD/');
});

// Start the HTTP server
app.listen(port, () => {
  console.log(`Server is on fire 🔥 with flamability of ${port}!`);
});

// Start the HTTPS server (optional)
// server.listen(port, () => {
//   console.log(`Server is on fire 🔥 with flamability of ${port}!`);
// });


