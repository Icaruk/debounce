const debounce = require("./index");



const hello = (name) => {
	console.log( `Hello ${name}!` );
};


debounce(1000, () => hello(0), "button", true);
debounce(1000, () => hello(1), "button", true);
debounce(1000, () => hello(2), "button", true);