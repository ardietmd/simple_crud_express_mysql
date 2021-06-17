const mongoose = require("mongoose");

const table = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Table', table);