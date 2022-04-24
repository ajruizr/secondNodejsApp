const express =require ('express');
const colors =require ('./colors');

const v1 = express.Router();

//Subroutes

v1.use('/colors',colors);



module.exports= v1;