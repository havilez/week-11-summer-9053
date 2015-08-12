var mongoose = require("mongoose");
var PeopleSchema = mongoose.Schema({
    name: { type: String, required:true, unique: true }
});

var People = mongoose.model("people", PeopleSchema);

module.exports = People;