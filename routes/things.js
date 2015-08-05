var express = require("express");
var router = express.Router();
var Thing = require("../models/things")

router.get("/", function(req, res){
   Thing.find({}).then(function(things){
       res.send(things);
   }); 
});

module.exports = router;