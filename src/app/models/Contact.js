const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Contact = new Schema({
    email: {type: String, maxLength: 255},
    title: {type: String, maxLength: 1000},
},{
    timestamps: true,
});

module.exports = mongoose.model('Contacs', Contact);