
let timeout = {};


/**
 * 
 * @param {number} wait Miliseconds to wait.
 * @param {function} fnc Function to execute.
 * @param {string} [id] Unique identifier of the performed action. If ommited the `fnc` argument will be stringified and used as `id` (less optimal).
 * 
*/
function debounce(wait, fnc, id) {
	
	if (!fnc) return console.error( "Error: fnc null" );
	if (typeof fnc !== "function") return console.error("Error: fnc no es una función: ", fnc);
	
	
	if (!id) id = "" + fnc;
	clearTimeout(timeout[id]); // quito el timeout de la función anteriormente lanzada
	
	
	timeout[id] = setTimeout(() => {
		delete timeout[id]; // elimino del objeto
		fnc();
	}, wait); // creo uno nuevo
	
};


module.exports = debounce;

