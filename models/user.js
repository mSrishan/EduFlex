const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    First_name: {
        type: String,
    },
    Last_name: {
        type: String,
    },
    Email: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
    Date: {
        type: Date,
        default: Date.now,
    },
});
module.export = User = model("users", userSchema);