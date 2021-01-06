const express = require('express');
const bodyParser = require('body-parser');
const rp = require('request-promise');
const cheerio = require('cheerio');


const app = express();
app.use(require('body-parser').json());
// app.use(require('cors')());
app.use(express.static('public'))
app.post('/scrap', (req, res, next)=>{
    rp(req.body.url)
        .then(html=>{
            const $ = cheerio.load(html);
            const results = req.body.patterns.map(
                pattern=>({
                    pattern,
                    results:
                        Array.from($(pattern))
                            .map(el=>req.body.returnHTML?cheerio.html(el):$(el).text())
                })

            );
            res.json(results);
        })
        .catch(console.error);
})



app.listen(3001);