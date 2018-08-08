const helper = require('./helpers.jsx');

exports.setItemDetails = function(item, description, categories) {
	return {
		"author": {
			"name": "Federico",
			"lastname": "Di Rocco"
		},
		"item": {
			"id": item.id,
			"title": item.title,
			"price": {
				"currency": item.currency_id,
				"amount": helper.numberWithDotsHelper(item.price),
				"decimals": item.decimals
			},
			"picture": item.pictures[0].url,
			"condition": helper.traduceConditionHelper(item.condition),
			"free_shipping": item.shipping.free_shipping,
			"sold_quantity": item.sold_quantity,
			"description": description.plain_text,
			"categories": categories
		}
	};
};
