// Copyright 2021 Stuart Calder.
const fetch = require('node-fetch');
const latitude = 21.4859403;
const longitude = 84.2839405;
const url = 'https://api.sunrise-sunset.org/json?lat='
	+ String(latitude)
	+ '&lng='
	+ String(longitude)
	+ '&date=today';
// We chain the promises to demonstrate what is required.
js_obj = fetch(url)
	.then(res => {
		console.log(res);
		console.log('res is of type', typeof res);
		return res.json(); // node-fetch provides this, but we are specifically asked to use JSON.parse, so we will.
	})
	.then(json => {
		return JSON.stringify(json); // Convert it to a string.
	})
	.then(str => {
		return JSON.parse(str); // Convert it back to JSON. `JSON.parse` has been used.
	})
	.then(json => {
		console.log('The json ends up looking like the following:', json)
	)
