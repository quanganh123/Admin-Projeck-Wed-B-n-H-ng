const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: {type: String, maxLength: 255},
    price: {type: String, maxLength: 155},
    image: {type: String, maxLength: 255},
    createdAt: { type: Date, default: Date.now },
    updateddAt: { type: Date, default: Date.now },
},{
    timestamps: true,
});

module.exports = mongoose.model('Product-shop-clock', Product);