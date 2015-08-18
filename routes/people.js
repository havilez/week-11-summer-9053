var express = require("express");
var router = express.Router();
var People = require("../models/people")

function findPersonById(req, res, next){
    res.locals.activePath = "/people";
    res.locals.title = "Add A New Person";
    if(req.params.id){
        People.findById(req.params.id, function(err, person){
            if(err)
                next(err);
            else{
                res.locals.person = person;
                res.locals.title = "Editing " + person.name;
                next();
            }
        });
    }
    else{
        res.locals.person = new People();
        next();
    }

}



router.get("/:id", findPersonById, function (req, res) {
    var person = new People();
    person =  res.locals.person;
    res.send(person);

});

router.get("/", function(req, res){
   People.find({}).then(function(_people){
       res.send(_people);
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
         res.send(_person);
   });
});




router.put("/:id", findPersonById, function (req, res) {

      People.update(
          {_id: req.params.id},
          {$set: {name: req.body.name, age: req.body.age}}
      ).then(function (_person) {
          res.json({ message: 'Successfully updated' });
          }), function (err) {
         if (err) {
            console.log("Error = ", err);
            serverError = err;
            res.render("error");
         }
      };


});

router.delete("/:id", function (req, res) {
    People.remove({_id: req.params.id})
        .then(function () {
            res.json({ message: 'Successfully deleted' });
        });



});

router.get("*", function ( req, res, next) {

    console.log( req );
    next();


})

module.exports = router;