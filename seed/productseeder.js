var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shopping');

var products = [
 new Product({
	imagePath: '/images/936102648cat.jpg',
	title: 'Javascript for Dummies',
	description: 'Awesome book!!!',
	price: 10
}),

  new Product({
	imagePath: '/images/936102648cat.jpg',
	title: 'Javascript for Dummies',
	description: 'Awesome Author!!!',
	price: 50
}),
   new Product({
	imagePath: '/images/936102648cat.jpg',
	title: 'NodesJs for Dummies',
	description: 'Awesome book!!!',
	price: 10
})

 ];
 var done = 0;
 for (var i = 0; i<products.length; i++){
 	products[i].save(function(err,result){
 		done++;
 		if(done === products.length){
 			exit()
 		}
 	});
 }
function exit(){
 mongoose.disconnect();
}
