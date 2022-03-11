import express from 'express';
import mongoose from 'mongoose';
import Videos from './dbModel.js';

// app config
const app = express();
const port = 9000;


//middlewares
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'),
    res.setHeader('Access-Control-Allow-Headers', '*'),
    next()
})

//db config
const connection_url = "mongodb+srv://admin:PynyxaoF1bhfT45k@cluster0.gw1qf.mongodb.net/tiktokdb?retryWrites=true&w=majority"

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//api endpoints
app.get('/', (req, res) => res.status(200).send('Hello World!'));

app.get('/v1/posts', (req, res) => {
    Videos.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

app.post('/v1/posts', (req, res) => {
    const dbVideos = req.body;

    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

//listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));