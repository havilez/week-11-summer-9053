var express = require("express");
var router = express.Router();
var Thing = require("../models/things")

router.get("/", function(req, res){
   Thing.find({}).then(function(things){
       res.send(things);
   }); 
});

router.post("/", function(req, res){
   var thing = new Thing(req.body);
   thing.save(function(err, _thing){
      if(err){
         res.status(422); 
         res.send(err);
      }
      else
         res.send(thing);
   });
});

module.exports = router;