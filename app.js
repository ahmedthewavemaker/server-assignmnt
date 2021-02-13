const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('common'));
app.use(cors());

const play = require('./playServer-data.js');

app.get('/apps', (req, res) => {
    const { sort, genres } = req.query;
    let results=play
console.log(results)
    if (sort) {
        if (!['Rating', 'App'].includes(sort)) {
            return res
                .status(400)
                .send('Sort must be of Rating or App');
        }
        results=results.sort((a,b)=> a[sort]>b[sort]?-1: 1);
    }
    if (genres) {
        if (!['Action', 'Puzzle', 'Arcade', 'Strategy', 'Casual', 'Card'].includes(genres)) {
            return res
                .status(400)
                .send('Genres must be either Action, Puzzle, Arcade, Strategy, Casual, or Card');

        }
        results=results.filter(item => item.Genres==genres)
    }





    res.json(results)
})


app.listen(8000, () => {
    console.log('server listening at 8000 boiiiii')
})
