const express = require("express")
const app = express()
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

const url = "mongodb://admin:password@mongo:27017";
const client = new MongoClient(url);

//MIDDLEWARE
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/api/v1/GetAllRows', async (req, res) => {
    try{
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db("exdb");
        const collection = db.collection("excoll");
        const findResult =  await collection.find({}).toArray();
        console.log(findResult)
        res.json({'Found_documents': findResult});
    }
    catch(err){throw err;}
});

app.listen(3000)




