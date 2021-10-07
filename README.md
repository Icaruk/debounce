<div style="text-align:center">
	<h1> debounce </h1>
</div>



**debounce** is a javascript debouncer (and throttle) that instead returning a debounced function it will execute it after the specified time.

- 😃 Easy to use.
- 🚀 Lightweight (1.6 KB)
- ⚪️ Zero dependencies.



<br>



# ⬇️ Import

```js
const debounce = require("@icaruk/debounce");
```



<br>



# 🧭 Usage:

```js
debounce(wait, fnc, id, reverse);
```

- **wait** (number)
	Number of miliseconds that must pass before the function executes.
- **fnc** (function)
	Function that will be executed.
- **id** (string)
	Unique identifier of the performed action. If the `id` is ommited the `fnc` argument will be stringified and used as `id` (less optimal).
- **reverse** (boolean)
	Default `false`. If `true` it will throttle instead debounce.



<br>



# 🔮 Examples:


Debounce without id
```js

const hello = (name) => {
	console.log( "Hello!" );
};

debounce(1000, hello);
debounce(1000, hello);
debounce(1000, hello);

// > Outputs:
// Hello!

```
<br>



Debounce with id

```js

const hello = () => {
	console.log( "Hello!" );
};

debounce(1000, hello, "button");
debounce(1000, hello, "button");
debounce(1000, hello, "button_2");

// > Outputs:
// Hello!
// Hello!


```
<br>



Throttle with id

```js

const hello = (name) => {
	console.log( `Hello ${name}!` );
};

debounce(1000, () => hello(0), "button", true);
debounce(1000, () => hello(1), "button", true);
debounce(1000, () => hello(2), "button", true);

// > Outputs:
// Hello 0!


```



<br>



# 🔮 Passing arguments:

✅ GOOD
```js

const hello = (name = "") => {
	console.log( `Hello ${name}!` );
};

debounce(1000, () => hello("Mike"));
debounce(1000, () => hello("Bob"));
debounce(1000, () => hello("Susan"));

// > Outputs:
// Hello Mike!
// Hello Bob!
// Hello Susan!

```
<br>



❌ BAD
```js

const hello = (name = "") => {
	name = " " + name;
	console.log( `Hello ${name}!` );
};

debounce(1000, hello("Mike")); // ❌
debounce(1000, hello("Bob")); // ❌
debounce(1000, hello("Susan")); // ❌

// > Outputs:
// Hello!
// [Error] debounce: fnc is null
// Hello!
// Hello!
// [Error] debounce: fnc is null
// [Error] debounce: fnc is null

```


