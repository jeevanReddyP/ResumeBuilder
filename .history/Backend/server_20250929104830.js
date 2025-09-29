const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const ConnectDB = require("./config/db");
const router = require("./routes/userRoute");
const path = require("path");
const resumeRouter = require("./routes/resumeRoutes");

const __dirname = path.resolve();

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

ConnectDB();

app.use(cors());
app.use(express.json());


app.use("/api/auth", router);
app.use("/api/resume", resumeRouter);

// Static folder for uploads
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"), {
    setHeaders: (res, path) => {
      res.set("Access-Control-Allow-Origin", "http://localhost:5173");
    },
  })
);

app.get("/", (req, res) => {
  res.send("App Started");
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
