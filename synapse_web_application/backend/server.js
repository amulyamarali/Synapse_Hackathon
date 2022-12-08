const express = require("express");
const mongodb = require("mongodb");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());

var obj = {}

mongodb.MongoClient.connect(
  "mongodb+srv://KarthikNamboori:jEowXTygnO34kkNA@webtechprojectclass.hkblu6f.mongodb.net/test",
  (err, dbs) => {
    if (err) throw err;
    const db = dbs.db("synapse");
    const collection = db.collection("synapse");
    collection.find({}).toArray((err,array)=>{
        obj = array[array.length - 1]
        console.log(obj)

    })
  }
);
app.get("/", (req, res) => {
    res.status(200).send(obj);
    
});
app.listen(1000, () => {
  console.log("Server Listening to Port 1000");
});
