const Product = require('../models/Product');

class HomeController {

    async index(req, res, next) {
        try {
            Product.find({}).limit(4).lean() 
            .then(product => res.render('home',{
                product: product
            }))
        } catch (err) {
            next(err);
        }

    };
};

module.exports = new HomeController;