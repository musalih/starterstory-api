const express = require('express');
const app = express();
const scrapedData = require('./scraped-data');

const PORT = 3000 || process.env.PORT;

app.get('/stories', (req, res)=> {
    scrapedData.getStories()
    .then((data)=>{
        res.status(200).json(data);
    })

});

app.listen(PORT, ()=> {
    console.log(`Server running on port: ${PORT}`);
});