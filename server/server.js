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
  // addition to see if works in firefox
  res.header("Access-Control-Allow-Origin", "*");
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
    origin: [
      "https://bathroomsmontreal.onrender.com/",
      "https://www.bathroomsmtl.ca/",
      "https://bathrooms-montreal-v2-server-56w9wvake.vercel.app/",
      "https://bathrooms-montreal-v2.vercel.app/",
      "https://bathrooms-montreal-v2-5ll4p6kpw-tristans-projects-40503245.vercel.app/",
    ],
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
