const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Product = new Schema({
    name: {type: String, maxLength: 255},
    price: {type: String, maxLength: 155},
    image: {type: String, maxLength: 1000},
    slug: { type: String, slug: 'name' , unique: true},
},{
    timestamps: true,
});

module.exports = mongoose.model('Product-shop', Product);