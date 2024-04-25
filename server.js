const express = require("express");
const connectDB = require("./config/userconfig");
const app = express();

const router = require("./routes/personRoutes");

require("dotenv").config();

connectDB();

app.use(express.json());

app.use("/api", router);

const port = process.env.PORT;
app.listen(port || 3000, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`server run with success ${port}`);
});
