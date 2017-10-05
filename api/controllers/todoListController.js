'use strict';


var mongoose = require('mongoose'),
  Brand = mongoose.model('brand'),
  Product = mongoose.model('product'),
  /*User = require('../models/users');*/
  User = mongoose.model('users'),
  Coupan = mongoose.model('coupans')



// Brand apiS Function
exports.listAllBrands = function(req, res) {
  Brand.find({}, function(err, brand) {
    if (err)
      res.send(err);
    res.json(brand);
  });
};

exports.createBrand = function(req, res) {
  var new_brand = new Brand(req.body);
  new_brand.save(function(err, brand) {
    if (err)
      res.send(err);
    res.json(brand);
  });
};

exports.readBrand = function(req, res) {
  Brand.findById(req.params.brandId, function(err, brand) {
    if (err)
      res.send(err);
    res.json(brand);
  });
};

exports.updateBrand = function(req, res) {
  Brand.findOneAndUpdate({_id: req.params.brandId}, req.body, {new: true}, function(err, brand) {
    if (err)
      res.send(err);
    res.json(brand);
  });
};

exports.deleteBrand = function(req, res) {


  Brand.remove({
    _id: req.params.brandId
  }, function(err, brand) {
    if (err)
      res.send(err);
    res.json({ message: 'Brand successfully deleted' });
  });
};





exports.listAllProducts = function(req, res) {
  Product.find({}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.createProduct = function(req,res) {

  var new_product = new Product(req.body);
  new_product.save(function(err,product){
    if(err)
      res.send(err);
      res.json(product);

  });
};

exports.readProduct = function(req,res){
  console.log(req.body)
  Product.find( {brand: req.params.brand}, req.body, {new: true},  function(err,product){
    console.log(product)
    if(err)
      res.send(err);

        res.json(product);

  });
};


exports.updateProduct = function(req,res){
  Product.findOneAndUpdate({id:req.params.productId}, req.body, {new:true}, function(err,product){
    if(err)
      res.send(err)
    res.json(product)
  });
}


exports.deleteProduct = function(req,res){

  Product.remove({_id: req.params.productId}, function(err,product){
    if(err)
      res.send(err);
    res.json({message: "product deleted successfully"});
  });
};


exports.listAllUser = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.createUser = function(req,res) {

  var new_user = new User(req.body);
  new_user.save(function(err,user){
    if(err)
      res.send(err);
      res.json(user);

  });
};


exports.readUser = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};



//coupan APIs Functions


exports.listAllCoupans = function(req, res) {
  Coupan.find({}, function(err, coupan) {
    if (err)
      res.send(err);
    res.json(coupan);
  });
};

exports.createCoupan = function(req,res) {

  var new_coupan = new Coupan(req.body);
  new_coupan.save(function(err,coupan){
    if(err)
      res.send(err);
      res.json(coupan);

  });
};

exports.readCoupan = function(req,res){
  console.log(req.body)
  Coupan.findById(req.params.coupanId,  function(err,coupan){
    console.log(coupan)
    if(err)
      res.send(err);

        res.json(coupan);

  });
};



exports.updateCoupan = function(req,res){
  Coupan.findOneAndUpdate({_id:req.params.coupanId} , {$set:{ "Updated_date" : new Date() }},req.body,  function(err,coupan){
    if(err)
      res.send(err)
    res.json(coupan)
  });
}


exports.deleteCoupan = function(req,res){

  Coupan.remove({_id: req.params.coupanId}, function(err,coupan){
    if(err)
      res.send(err);
    res.json({message: "Coupan deleted successfully"});
  });
};


