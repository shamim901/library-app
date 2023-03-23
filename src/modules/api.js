

const _products = [
	{ "id": 1, "title": "IPHONE 6", "price": 500, "inventory": 2 },
	{ "id": 2, "title": "IPHONE 12", "price": 1500, "inventory": 10 },
	{ "id": 1, "title": "IPHONE 15", "price": 2500, "inventory": 5 }

]


export default {

	getProducts (cb) {
		setTimeout(() => cb(_products), 100)
	},


	buyProducts (products, cb, errorCb) {

		setTimeout(() => {
			// simulate random checkout failure

			(Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
			? cb()
			: errorCb()
		}, 100)
	}

}