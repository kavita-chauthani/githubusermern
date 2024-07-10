require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./router/user-router");
const connectDb = require("./utils/db");

app.use("/api/auth", router);

const corsOption = {
  origin: "http://localhost:5500",
  methods: "GET",
};

app.use(cors(corsOption));
app.use(express.json());
const PORT = 5500;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on port : ${PORT}`);
  });
});
