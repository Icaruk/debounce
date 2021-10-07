
let timeout = {};


/**
 * 
 * @param {number} wait Miliseconds to wait.
 * @param {function} fnc Function to execute.
 * @param {string} [id] Unique identifier of the performed action. If the 'id' is ommited the `fnc` argument will be stringified and used as `id` (less optimal).
 * @param {boolean} [reverse=false] Default `false`. If `true` it will throttle instead debounce.
 * 
*/
function debounce(wait, fnc, id, reverse = false) {
	
	if (!fnc) return console.error( "[Error] debounce: fnc is null" );
	if (typeof fnc !== "function") return console.error("Error] debounce: fnc must be a function but found:", fnc);
	
	
	if (!id) id = "" + fnc;
	if (reverse && timeout[id]) return; // no hago nada si ya está siendo frenado
	
	if (reverse) fnc();
	clearTimeout(timeout[id]); // quito el timeout de la función anteriormente lanzada
	
	
	timeout[id] = setTimeout(() => {
		delete timeout[id]; // elimino del objeto
		if (!reverse) fnc();
	}, wait); // creo uno nuevo
	
};


module.exports = debounce;

