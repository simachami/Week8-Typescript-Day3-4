/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ShoppingCart/shoppingCart.ts":
/*!******************************************!*\
  !*** ./src/ShoppingCart/shoppingCart.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Item: () => (/* binding */ Item),\n/* harmony export */   Shop: () => (/* binding */ Shop),\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\nclass Item {\n    get id() {\n        return this._id;\n    }\n    set id(value) {\n        this._id = value;\n    }\n    get name() {\n        return this._name;\n    }\n    set name(value) {\n        this._name = value;\n    }\n    get price() {\n        return this._price;\n    }\n    set price(value) {\n        this._price = value;\n    }\n    get description() {\n        return this._description;\n    }\n    set description(value) {\n        this._description = value;\n    }\n    constructor(name, price, description) {\n        this._id = uuidv4();\n        this._name = \"\";\n        this._price = 0;\n        this._description = \"\";\n        this.name = name;\n        this.price = price;\n        this.description = description;\n    }\n}\nclass Shop {\n    get items() {\n        return this._items;\n    }\n    set items(value) {\n        this._items = value;\n    }\n    constructor() {\n        this._items = [];\n        this.items.push(new Item(\"Computer\", 1500, \"Desktop Gaming Computer\"));\n        this.items.push(new Item(\"Monitor\", 175, \"Gaming Monitor\"));\n        this.items.push(new Item(\"Candle\", 10, \"Tea Tree Scented Candle\"));\n    }\n}\nclass User {\n    get id() {\n        return this._id;\n    }\n    set id(value) {\n        this._id = value;\n    }\n    get name() {\n        return this._name;\n    }\n    set name(value) {\n        this._name = value;\n    }\n    get age() {\n        return this._age;\n    }\n    set age(value) {\n        this._age = value;\n    }\n    constructor(name, age) {\n        this._id = uuidv4();\n        this._name = \"\";\n        this._age = 0;\n        this.name = name;\n        this.age = age;\n        this.cart = [];\n    }\n    addToCart(item) {\n        this.cart.push(item);\n    }\n    removeFromCart(item) {\n        /* TODO\n        needs to loop the user.cart[] and remove any item that\n        has item.name == the \"ItemToRemove\" (or whatever is passed in)\n        */\n        const itemsResultArr = this.cart.filter(function (x) {\n            return x.name != item.name;\n        });\n        if (itemsResultArr != null) {\n            this.cart = itemsResultArr;\n            console.log(`Removed all occurences of ${item.name} from ${this.name}'s cart`);\n        }\n        else {\n            console.log(`Could not find any ${item.name} to remove`);\n        }\n    }\n    removeQuantityFromCart() {\n        /* TODO\n        user.removeQuantityFromCart(\"ItemName\", 4) will loop through user.cart[]\n        and try to remove 4 of item.name == \"ItemName\" if there are at least 4 in user.cart[]\n        */\n    }\n    cartTotal() {\n        let total = 0;\n        for (const item of this.cart) {\n            total += item.price;\n        }\n        return total;\n    }\n    printCart() {\n        console.log(this.cart);\n    }\n}\n\nfunction uuidv4() {\n    throw new Error(\"Function not implemented.\");\n}\n\n\n//# sourceURL=webpack://webpack-cart/./src/ShoppingCart/shoppingCart.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ShoppingCart_shoppingCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShoppingCart/shoppingCart */ \"./src/ShoppingCart/shoppingCart.ts\");\n\nconst shop = new _ShoppingCart_shoppingCart__WEBPACK_IMPORTED_MODULE_0__.Shop();\nconst user = new _ShoppingCart_shoppingCart__WEBPACK_IMPORTED_MODULE_0__.User(\"Sima\", 21);\nlet desktop;\nlet monitor;\nlet candle;\nif (shop != null && user != null) {\n    if (shop.items.length >= 3) {\n        desktop = shop.items[0];\n        monitor = shop.items[1];\n        candle = shop.items[2];\n        user.addToCart(desktop);\n        user.addToCart(monitor);\n        user.addToCart(candle);\n        user.printCart();\n        console.log(`Cart Total: ${user.cartTotal()}`);\n        user.addToCart(monitor);\n        user.addToCart(monitor);\n        user.addToCart(candle);\n        user.printCart();\n        console.log(`Cart Total: ${user.cartTotal()}`);\n        user.removeFromCart(monitor);\n        user.printCart();\n        console.log(`Cart Total: ${user.cartTotal()}`);\n    }\n}\n// TODOs:\n// Add items from the shop.items[] into the user.cart[]\n// Print the user.cart[] using user.printCart()\n// Remove all instances of the specified item; e.g. user.removeFromCart(\"Monitor\")\n// removeFromCart(\"ItemToRemove\") needs to loop the user.cart[] and remove any item that has item.name == the \"ItemToRemove\" (or whatever is passed in)\n// Remove a certain amount of a specified item from the user.cart[]\n// user.removeQuantityFromCart(\"ItemName\", 4) will loop through user.cart[] and try to remove 4 of item.name == \"ItemName\" if there are at least 4 in user.cart[]\n\n\n//# sourceURL=webpack://webpack-cart/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;