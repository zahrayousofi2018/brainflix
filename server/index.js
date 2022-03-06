const express = require('express');
const app = express();
const cors = require('cors');
const videos = require('./routes/videos')
const data = require('./data/videos.json')


require('dotenv').config();
const PORT = process.env.PORT || 9000;

app.get('/', (_req, res) => {
    res.send('Hello world');
});


app.get('/videos', (_req, res)=> {
    res.json(data)
})

app.get("/videos/:id", function (req, res) {
    res.send(req.params.id);
})


app.use(cors());

app.use((req, res, next) => {
    next();
});

app.use('/static', express.static('files'));

app.use('/videoDetails', videos);



// Start the server
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});