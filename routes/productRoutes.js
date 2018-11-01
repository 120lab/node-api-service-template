'use strict';
module.exports = function(app) {
  var products = require('../controllers/productController');

  // todoList Routes
  app.route('/products')
    .get(products.list_all_products)
    .post(products.create_a_product);


//   app.route('/products/:productId')
//     .get(products.read_a_task)
//     .put(products.update_a_task)
//     .delete(products.delete_a_task);
};