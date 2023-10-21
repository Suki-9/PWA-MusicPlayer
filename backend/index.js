const fs = require('fs');
const express = require('express')
const cors = require('cors')
const ytdl = require('ytdl-core');

const app = express().use(cors()).use(express.json())
const port = 5000

app.post('/api/youtube-dl', (req, res) => {
  try {
    const DL_URL = req.body.url
    ytdl(DL_URL)
      .pipe(fs.createWriteStream('video.mp4'));
  } catch { 
    res.send(JSON.parse({
        msg: "Dl fail!!!"
    }))
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
