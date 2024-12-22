const express = require('express');
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;

// middle wire
app.use(cors())
app.use(express.json())

// gFeVjvrweu50U7Xb
// visitAsia


const { MongoClient, ServerApiVersion } = require('mongodb');
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

        app.post('/spots',(req,res)=>{
            const spots = req.body
            console.log(spots);
            // res.send(spots)
        })
        app.get('/spots',(req,res)=>{
            const spots = req.body
            console.log(spots);
            // res.send(spots)
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