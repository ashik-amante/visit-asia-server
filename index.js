const express = require('express');
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;

// middle wire
app.use(cors())
app.use(express.json())

// gFeVjvrweu50U7Xb
// visitAsia


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://visitAsia:gFeVjvrweu50U7Xb@cluster0.pdx5h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        
        const spotsCollection =  client.db("spotsDB").collection("spots");

        // get All data in db
        app.get('/spots',async(req,res)=>{
            const spots = req.body
            console.log(spots);
            const cursor = spotsCollection.find()
            const result = await cursor.toArray()
            res.send(result)
        })
        // get specific id data from db
        app.get('/spots/:id',async(req,res)=>{
            const id = req.params.id;
            const user = {_id: new ObjectId(id)}
            const result =await spotsCollection.findOne(user)
            res.send(result)
        })
        app.post('/spots',async(req,res)=>{
            const spot = req.body
            console.log(spot);
            const result = await spotsCollection.insertOne(spot)
            res.send(result)
        })
      


        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('asia server is running ')
})

app.listen(port, () => {
    console.log('port running in', port);
})