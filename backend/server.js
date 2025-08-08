const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const authRouter = require("./routes/authRouter");
const productRouter = require('./routes/productRouter')

require("dotenv").config();
require("./models/db");

const PORT = process.env.PORT || 8000;

app.get("/ping", (req, res) => {
  res.send("PONG");
});

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", authRouter);
app.use("/products", productRouter)

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
