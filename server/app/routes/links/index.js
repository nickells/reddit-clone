'use strict';
var router = require('express').Router();

router.get('/', function(req,res){
  res.send([
    {url: "Hello.com",
    calculatedScore: 4,
    postee: "Guy"},
    {url: "Goodbye.com",
    calculatedScore: 2,
    postee: "Dude"}
    ])
})


module.exports = router;