const express = require ("express");
const router = express.Router();
const fs = require("fs");


function readVideos () {
    const videosData = fs.readFileSync("./data/videos.json");
    const parsedData = JSON.parse(videosData);
    return parsedData;
}

router.get("/", (_, res)=> {
    res.json(readVideos());
});

router.get("/:videoId", (req, res)=> {
    const videos = readVideos();
    const singleVideo = videos.find(video => video.id === req.params.nodeId);
    res.json(singleVideo)
})



module.exports = router;