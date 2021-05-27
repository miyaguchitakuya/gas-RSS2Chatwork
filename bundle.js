/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_addition_calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addition-calculator */ \"./src/js/modules/addition-calculator.js\");\n/* harmony import */ var _modules_tax_calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tax-calculator */ \"./src/js/modules/tax-calculator.js\");\n\n\n\nvar item1Price = 400;\nvar item2Price = 600;\nvar totalPrice = Object(_modules_addition_calculator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item1Price, item2Price);\nvar tax = 1.08;\nvar priceIncludeTax = Object(_modules_tax_calculator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(totalPrice, tax);\n\nconsole.log(priceIncludeTax);\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/addition-calculator.js":
/*!***********************************************!*\
  !*** ./src/js/modules/addition-calculator.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return additionCalculator; });\nfunction additionCalculator(number1 ,number2) {\n  return number1 + number2;\n}\n\n//# sourceURL=webpack:///./src/js/modules/addition-calculator.js?");

/***/ }),

/***/ "./src/js/modules/tax-calculator.js":
/*!******************************************!*\
  !*** ./src/js/modules/tax-calculator.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return taxCalculator; });\nfunction taxCalculator(price ,tax) {\n  return Math.round(price * tax);\n}\n\n//# sourceURL=webpack:///./src/js/modules/tax-calculator.js?");

/***/ })

/******/ });
