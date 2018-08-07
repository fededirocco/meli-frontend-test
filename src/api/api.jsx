const express = require('express');
const router = express.Router();
var request = require('request');
const detailItem = require('./detailItem.jsx');
const listItems = require('./listItems.jsx');

router.get('/items/:id', function(req, res) {
	request('https://api.mercadolibre.com/items/' + req.params.id, function (error, response, body) {
		var item = JSON.parse(response.body);

		request('https://api.mercadolibre.com/items/' + item.id + '/description', function (error, response, body) {
      var itemDetails = detailItem.setItemDetails(item, JSON.parse(response.body));
		 	res.json(itemDetails);
		});
	});
});

router.get('/categories/:id', function(req, res) {
	request('https://api.mercadolibre.com/categories/' + req.params.id, function (error, response, body) {
		var categories = JSON.parse(response.body);
		console.log(response.body);
		console.log(categories);
		res.json(categories);
	});
});

router.get('/items', function(req, res){
	request('https://api.mercadolibre.com/sites/MLA/search?q=' + req.query.q, function (error, response, body) {
		var itemsList = listItems.setItemList(JSON.parse(response.body));
	 	res.json(itemsList);
	});
});

module.exports = router;
