const express = require ("express");
const router = express.Router();
const fs = require("fs");


function readVideos () {
    const videosData = fs.readFileSync("./data/videos.json");
    const parsedData = JSON.parse(videosData);
    return parsedData;
}

router
.get("/videos", (_, res)=> {
    res.json(data);
});

router
   .route("/videos/:videoID")
   .get((req, res) => {
       fs.readFile('./video.json', 'utf8')
           
       
       let id = req.params.id;
       let singlevideo = data.find((video)=> video.id === id);
       res.send(singlevideo);
   })

router.get("/:id", (req, res)=> {
    const videos = readVideos();
    const singleVideo = videos.find(video => video.id === req.params.videoId);
    res.json(singleVideo)
})

// router
//    .post('/videos', (req, res)=> {
//     let body = req.body;
//     console.log(body);
// });




module.exports = router;