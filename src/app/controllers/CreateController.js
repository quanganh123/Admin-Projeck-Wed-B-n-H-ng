const Product = require('../models/product-shop/Product-shop');

class CreateController {

    create(req, res, next) {
        res.render("create");
    };

    product(req, res, next) {
        const product = new Product(req.body);
        product.save()
            .then(() => res.redirect('create'))
            .catch(error => { })
            
            console.log(req.body)
    };
};

module.exports = new CreateController;