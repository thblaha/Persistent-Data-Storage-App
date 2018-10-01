var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var todosSchema = new Schema({
    text: {
        type: String,
        lowercase: true,
    },
    completed: {
        type: Boolean,
        default: false,
    }
});

var todos = mongoose.model("Todo", todosSchema);
// Note how we export the array. This makes it accessible to other files using require.
module.exports = todos;