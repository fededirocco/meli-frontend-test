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
	var categoriesFilter = search.available_filters.find(function(filter) {
		return filter.id === "category"
	});

	try {
		var categories = categoriesFilter.values.map(function(cat) {
			return cat.name;
		});

		return categories;
	}
  catch(err) {}
}

function getItems(search) {
	var items = [];

  //improve method with map
	for(let i=0; i<4; i++) {
		let currentItem = search.results[i];

		var itemData = {
      "id": currentItem.id,
      "title": currentItem.title,
      "price": {
  			"currency": currentItem.currency_id,
  			"amount":'',
  			"decimals": ''
      },
      "picture": currentItem.thumbnail,
      "condition": '',
      "free_shipping": currentItem.shipping.free_shipping,
      "location": currentItem.address.state_name
		}

		items.push(itemData);
	}

	return items;
}
