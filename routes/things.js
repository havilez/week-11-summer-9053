var express = require("express");
var router = express.Router();
var Thing = require("../models/things")


function findThingById(req, res, next){
    res.locals.activePath = "/things";
    res.locals.title = "Add A New Thing";
    if(req.params.id){
        Thing.findById(req.params.id, function(err, thing){
            if(err)
                next(err);
            else{
                res.locals.thing = thing;
                res.locals.title = "Editing " + thing.name;
                next();
            }
        });
    }
    else{
        res.locals.thing = new Thing();
        next();
    }

}



router.get("/:id", function (req, res) {
    Thing.findById(req.params.id)
        .then(function (_thing) {
            res.send(_thing);
        });
});

router.get("/", function(req, res){
   Thing.find({}).then(function(_things){
       res.send(_things);
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


/**

router.post("/:id",  findThingById, function (req, res) {
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
**/

router.put("/:id", findThingById,function (req, res) {
    //if (req.body.Save) {
    // FIX-ME: shd call middleware find thing by id
    var thing = res.locals.thing;
/**
    thing._id = req.params.id;
    thing.name = req.body.name;
    thing.price = req.body.price;
**/

        Thing.update(
            {_id: req.params.id},
            {$set: {name: req.body.name, price: req.body.price}}
        ).then(function (_thing) {
                res.json({ message: 'Successfully updated' });
            }), function (err) {
            if (err) {
                console.log("Error = ", err);
                serverError = err;
                res.render("error");
            }
        };
   // }

});

router.delete("/:id", function (req, res) {
    Thing.remove({_id: req.params.id})
        .then(function (_thing) {
            res.json({ message: 'Successfully deleted' });
        });



});

router.get("*", function ( req, res, next) {

    console.log( req );
    next();


})

module.exports = router;