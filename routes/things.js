var express = require("express");
var router = express.Router();
var Thing = require("../models/things")




router.get("/:id", function (req, res) {
    Thing.findById(req.params.id)
        .then(function (thing) {
            res.send(thing);
        });
});

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




router.post("/:id", function (req, res) {
   if (req.body.Save) {
      Thing.update(
          {_id: req.params.id},
          {$set: {name: req.body.name, price: req.body.price}}
      ).then(function () {
             res.redirect("/things");
          }), function (err) {
         if (err) {
            console.log("Error = ", err);
            serverError = err;
            res.render("error");
         }
      };
   }

});

router.delete("/:id", function (req, res) {
    Thing.remove({_id: req.params.id})
        .then(function () {
            res.redirect("/things");
        });



});

router.get("*", function ( req, res, next) {

    console.log( req );
    next();


})

module.exports = router;