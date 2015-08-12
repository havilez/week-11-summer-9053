var express = require("express");
var router = express.Router();
var People = require("../models/people")



router.get("/:id", function (req, res) {
    People.findById(req.params.id)
        .then(function (person) {
            res.send(person);
        });
});

router.get("/", function(req, res){
   People.find({}).then(function(people){
       res.send(people);
   }); 
});

router.post("/", function(req, res){
   var person = new People(req.body);
   person.save(function(err, _person){
      if(err){
         res.status(422); 
         res.send(err);
      }
      else
         res.send(person);
   });
});




router.post("/:id", function (req, res) {
   if (req.body.Save) {
      People.update(
          {_id: req.params.id},
          {$set: {name: req.body.name, age: req.body.age}}
      ).then(function () {
             res.redirect("/People");
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
    People.remove({_id: req.params.id})
        .then(function () {
            res.redirect("/people");
        });



});

router.get("*", function ( req, res, next) {

    console.log( req );
    next();


})

module.exports = router;