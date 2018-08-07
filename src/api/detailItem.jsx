exports.setItemDetails = function(item, description) {
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
				"amount": '',
				"decimals": ''
			},
			"picture": item.pictures[0].url,
			"condition": '',
			"free_shipping": item.shipping.free_shipping,
			"sold_quantity": item.sold_quantity,
			"description": description.plain_text,
			"category": item.category_id
		}
	};
};
