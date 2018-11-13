'use strict';
module.exports = function(app) {
  var products = require('../controllers/productController'),
  userHandlers = require('../controllers/userController.js');

  // todoList Routes
  app.route('/products')
    .get(userHandlers.loginRequired,products.list_all_products)
    .post(userHandlers.loginRequired,products.create_a_product);

};