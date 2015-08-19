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




router.route("/")
    .get( function(req, res){
       Thing.find({}).then(function(_things){
           res.send(_things);
         });
    })

    .post( function(req, res){
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


router.route("/:id")
    .get(findThingById, function (req, res) {
        var thing =  new Thing();
        thing = res.locals.thing;

        res.send(thing);
    })


    .put( function (req, res) {

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

    })


    .delete( function (req, res) {

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