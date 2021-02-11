const express= require('express');
const morgan= require('morgan');

const app=express();

app.use(morgan('common'));

const play=require('./playServer-data.js');

app.get('/apps', (req, res)=>{
    const {sort, genres}=req.query;
    if(sort){
        if(!['rating', 'app'].includes(sort)){
            return res
                    .status(400)
                    .send('Sort must be of Rating or App');
        }
    
    if(genres){
        if(!['Action', 'Puzzle', 'Arcade', 'Strategy','Casual', 'Card'].includes(genres)){
            return res
                    .status(400)
                    .send('Genres must be either Action, Puzzle, Arcade, Strategy, Casual, or Card');
    
        }}

    }

res.json(play)
})


app.listen(8000, ()=> {
    console.log('server listening at 8000 boiiiii')
})
