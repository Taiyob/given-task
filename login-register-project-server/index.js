const express = require('express')
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const app = express()
const port = 5000

app.use(cors());
app.use(express.json());


const uri =
  "mongodb+srv://api_connection:I7ThSCgOw5UFg2IA@cluster0.9bycbcd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, { 
  serverApi: {
    version: ServerApiVersion.v1, 
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    app.get("/", (req, res) => {
      res.send("Hello World!");
    });

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
      console.log('This is api station for data fetching.');
    });
  } finally {}
}
run().catch(console.dir);    

app.get('/', (req, res) => {
  res.send('Hello World!')
})
