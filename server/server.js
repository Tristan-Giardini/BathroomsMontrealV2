const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
// Xarah addition
const cors = require("cors");

const {
  getBathrooms,
  addBathroom,
  updateBathroom,
  deleteAllBathrooms,
  deleteBathroom,
} = require("./handlers");

// Xarah addition
app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Methods",
    "OPTIONS, HEAD, GET, PUT, POST, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));
// Xarah addition
app.use(express.urlencoded({ extended: false }));
app.use("/", express.static(__dirname + "/"));
app.use(
  cors({
    origin: ["https://bathroomsmtl.onrender.com"],
  })
);
app.use(express.static("./server/assets"));
//test

app.get("/bathrooms", getBathrooms);
app.post("/add-bathroom", addBathroom);
app.patch("/update-bathroom", updateBathroom);
app.delete("/delete-all-bathrooms", deleteAllBathrooms);
app.delete("/delete-bathroom/:_id", deleteBathroom);

app.listen(8000, () => console.log("Listening on port 8000"));
