'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes

    //Brand API
  app.route('/brand')
    .get(todoList.listAllBrands)
    .post(todoList.createBrand);

      
app.route('/brands/:brandId')
    .get(todoList.readBrand)
    .put(todoList.updateBrand)
    .delete(todoList.deleteBrand);

    //product API
app.route('/product')     
	.get(todoList.listAllProducts)
	.post(todoList.createProduct);

    //product API
app.route('/product/:productId')
   
   .put(todoList.updateProduct)
   .delete(todoList.deleteProduct);

app.route('/product/:brand')
  .get(todoList.readProduct)
//user apis
app.route('/users')     
  .get(todoList.listAllUser)
  .post(todoList.createUser);

    
app.route('/users/:userId')
   .get(todoList.readUser)
   // .put(todoList.update_a_user)
   // .delete(todoList.delete_a_user);

 app.route('/coupan')     
  .get(todoList.listAllCoupans)
  .post(todoList.createCoupan);

    //product API
app.route('/coupans/:coupanId')
   .get(todoList.readCoupan)
   .put(todoList.updateCoupan)
   .delete(todoList.deleteCoupan); 
};