const express = require('express');
const app = express();
const { Joke, Op } = require('./db');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/jokes', async (req, res, next) => {
  try {

    if(req.query){
      const jokes = await Joke.findAll({
        where:{
          tags: {
            [Op.substring]: req.query.tags ?? "",
          },
          content: {
            [Op.substring]: req.query.content ?? ""
          }
        }
      })
      res.send(jokes)
    }
  } 
  
  catch (error) {
    console.error(error);
    next(error)
  }
});


module.exports = app;
