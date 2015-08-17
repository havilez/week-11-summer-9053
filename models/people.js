var mongoose = require("mongoose");
var PeopleSchema = mongoose.Schema({
    name: { type: String, required:true, unique: true },
    age: { type: Number, required: true, default: 0 }
});

var People = mongoose.model("people", PeopleSchema);

module.exports = People;