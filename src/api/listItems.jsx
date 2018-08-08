const helper = require('./helpers.jsx');

exports.setItemList = function(search) {
	return {
		"author": {
			"name": "Federico",
			"lastname": "Di Rocco"
		},
		"categories": getCategories(search),
		"items": getItems(search)
	};
};

function getCategories(search) {
	var categoriesFilter = search.available_filters.find((filter) => {
		return filter.id === "category"
	});

	const categories = categoriesFilter.values.map((category) => {
		return category.name;
	});

	return categories;
}

function getItems(search) {
	var items = search.results.slice(0,4);
	const listItems = items.map((item) => {
		return(
			{
	      "id": item.id,
	      "title": item.title,
	      "price": {
	  			"currency": item.currency_id,
					"amount": helper.numberWithDotsHelper(item.price),
					"decimals": item.decimals
	      },
	      "picture": item.thumbnail,
	      "condition": helper.traduceConditionHelper(item.condition),
	      "free_shipping": item.shipping.free_shipping,
	      "location": item.address.state_name
			}
		);
	});

	return listItems;
}
