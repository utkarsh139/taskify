require("dotenv").config();
const express = require("express");
const app = express();
require("./connection/conn");
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

const usersApi = require("./controllers/user");
const tasksApi = require("./controllers/task");

app.use(express.json());
app.use("/api/v1", usersApi);
app.use("/api/v1", tasksApi);

// Root route 
app.get("/", (req, res) => {
  res.json({ message: "Taskify API is running!" });
});

//PORT fallback
const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
  console.log(`Server Started : ${PORT}`);
});
