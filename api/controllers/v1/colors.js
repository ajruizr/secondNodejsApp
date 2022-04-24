const express = require("express");
const data =require ('./data.json')

const colors = data.colors;

const router = express.Router();

router.get('/', (req, res) => {//get method
  res.send(colors)
  //sended object can be seen in postman
})

router.get('/:id', (req, res) => {//get method with parameter, gets an unique color
  const id = req.params.id;
  const color=colors.find(function(color){
    return color.id == id;
  });
  res.send(color);
  //sended object can be seen in postman
})

//POST that sends an object containing a string to be searched

router.post('/', (req, res) => {
  const data =req.body; //Getting the object from the body
  const color= colors.find(function(color){
    return colors==data;
  })
  res.send(color);

})



module.exports = router;