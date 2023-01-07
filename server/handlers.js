require("dotenv").config();
const { MONGO_URI } = process.env;
const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
// const e = require("express");
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options);

const getBathrooms = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("MontrealBathrooms");
    const result = await db.collection("bathrooms").find().toArray();
    res.status(200).json({ status: 200, data: result });
  } catch (err) {
    console.log(err.stack);
    res
      .status(400)
      .json({ status: 400, message: "Could not retrieve bathrooms" });
  }
  client.close();
};

const addBathroom = async (req, res) => {
  try {
    await client.connect();
    const { name, lng, lat, accessible, gendered, details } = req.body;
    const BathroomData = {
      _id: uuidv4(),
      name: name,
      lng: lng,
      lat: lat,
      accessible: Boolean(accessible),
      gendered: Boolean(gendered),
      details: details,
    };

    const db = client.db("MontrealBathrooms");

    const result = await db.collection("bathrooms").insertOne(BathroomData);

    res.status(200).json({ status: 200, data: result });
  } catch (err) {
    console.log(err.stack);
    res
      .status(400)
      .json({ status: 400, message: "Your entry couldn't be added" });
  }
  client.close();
};

const deleteAllBathrooms = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("MontrealBathrooms");

    const result = await db.collection("bathrooms").deleteMany();

    res.status(200).json({ status: 200, data: result });
  } catch (err) {
    console.log(err.stack);
    res
      .status(400)
      .json({ status: 400, message: "Could not delete bathrooms" });
  }
};

const updateBathroom = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("MontrealBathrooms");
    const { _id, name, accessible, gendered, details } = req.body;
    result = await db.collection("bathrooms").updateOne(
      { _id: _id },
      {
        $set: {
          name: name,
          accessible: accessible,
          gendered: gendered,
          details: details,
        },
      }
    );
    res.status(200).json({ status: 200, data: result });
  } catch (err) {
    console.log(err.stack);
    res.status(400).json({ status: 400, message: "Could not update bathroom" });
  }
};

const deleteBathroom = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("MontrealBathrooms");
    const _id = req.params._id;
    console.log(_id);
    const result = await db.collection("bathrooms").deleteOne({ _id: _id });

    res.status(200).json({ status: 200, data: result });
  } catch (err) {
    console.log(err.stack);
    res.status(400).json({ status: 400, message: "Could not delete bathroom" });
  }
};

module.exports = {
  getBathrooms,
  addBathroom,
  updateBathroom,
  deleteBathroom,
  deleteAllBathrooms,
};
