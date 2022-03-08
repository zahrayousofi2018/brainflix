const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
const videos = require('./routes/videos')
const data = require('./data/videos.json')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.json());
// app.use(express.urlencoded({extended:false}));

app.use(cors());

app.use((req, res, next) => {
    next();
});


require('dotenv').config();
const PORT = process.env.PORT || 9000;


app.use('/videos', videos);
// //use the videos.js file to handle endpoints that start with /videos

// app.use('/videoDetails', videos);

// app.get('/videos', (_req, res)=> {
//     res.json(data)
// })

// app.get("/videos/:id", function (req, res) {

//     if(data.includes(request.params.data)) {
//         respond.send(data);
       
//     } else {
//         respond.status(503).send("data not found")}
        
//     });

// app.post('/', function (req, res) {
//     console.log(req.body);
//     res.status(201).send('hi')
// })
  

  app.post('/videos', (req, res)=> {
    let body = req.body;
    console.log(body);
    let maxid = data.reduce(
        (acc, curr) => (curr.id >= acc ? curr.id : acc), 0);
    let newid = maxid +1;
    let newVideo = {id: newid, ...body };
    data.push(newVideo);

});

app.get('/', (_req, res) => {
    res.send('Hello Zahra');
});

app.use('/static', express.static('files'));




// Start the server
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});