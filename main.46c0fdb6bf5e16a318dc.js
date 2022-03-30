/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/styles.scss?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ \"./styles/styles.scss\");\n/* harmony import */ var _src_script_filters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/script/filters.js */ \"./script/filters.js\");\n/* harmony import */ var _src_script_filters_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_script_filters_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_script_range_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/script/range.js */ \"./script/range.js\");\n/* harmony import */ var _src_script_range_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_script_range_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_script_color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/script/color.js */ \"./script/color.js\");\n/* harmony import */ var _src_script_color_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_script_color_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_script_burger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/script/burger.js */ \"./script/burger.js\");\n/* harmony import */ var _src_script_burger_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_script_burger_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_script_burger_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/script/burger-menu.js */ \"./script/burger-menu.js\");\n/* harmony import */ var _src_script_burger_menu_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_script_burger_menu_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_script_menu_filter_mobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/script/menu-filter-mobile.js */ \"./script/menu-filter-mobile.js\");\n/* harmony import */ var _src_script_menu_filter_mobile_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_script_menu_filter_mobile_js__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./script/burger-menu.js":
/*!*******************************!*\
  !*** ./script/burger-menu.js ***!
  \*******************************/
/***/ (() => {

eval("const burgerMenu = document.getElementsByClassName('menu-burger__arrow');\nlet i \n\nfor (i = 0; i < burgerMenu.length; i++) {\n    burgerMenu[i].addEventListener('click', function() {\n        this.classList.toggle('active');\n        let menuBody = this.nextElementSibling;\n        menuBody.classList.toggle('menu-burger__item_body-show')\n        })\n    }\n\n\n//# sourceURL=webpack:///./script/burger-menu.js?");

/***/ }),

/***/ "./script/burger.js":
/*!**************************!*\
  !*** ./script/burger.js ***!
  \**************************/
/***/ (() => {

eval("const menuBurger = document.querySelector('.header__burger');\nconst navItem = document.querySelectorAll('.menu-burger__item_head');\nconst menuBody = document.querySelector('.menu-burger')\nconst menuCross = document.querySelector('.menu-burger__cross')\n\nif (menuBurger) {\n  menuBurger.addEventListener(\"click\", function(e) {\n    document.body.classList.toggle('_lock');\n    menuBurger.classList.toggle('_active');\n    menuBody.classList.add('menu-burger__active');\n  })\n\n  if(menuCross) {\n    menuCross.addEventListener(\"click\", function(){\n        document.body.classList.remove('_lock');\n        menuBurger.classList.remove('_active');\n        menuBody.classList.remove('menu-burger__active');\n    })\n  }\n\n  if  (navItem.length > 0 ) {\n    for (let item of navItem) {\n        item.addEventListener(\"click\", function() {\n        document.body.classList.remove('_lock');\n        menuBurger.classList.remove('_active');\n        menuBody.classList.remove('menu-burger__active');\n        })\n       }\n  }\n}\n\n//# sourceURL=webpack:///./script/burger.js?");

/***/ }),

/***/ "./script/color.js":
/*!*************************!*\
  !*** ./script/color.js ***!
  \*************************/
/***/ (() => {

eval("const colorPoint = document.querySelectorAll('.color__point')\nconst colorName = document.querySelectorAll('.color__name')\nconst colorCross = document.querySelectorAll('.color__cross')\nconst ap = document.querySelectorAll('.filtres-body__heading')\nlet i\n\n\nfor(i = 0; i < colorName.length; i++) {\n    colorName[i].addEventListener('click', function(){\n        var colorCross = this.nextElementSibling;\n        colorCross.classList.toggle('color-cross__show')\n    })\n}\n\nfor(i = 0; i < colorName.length; i++) {\n    colorCross[i].addEventListener('click', function(){\n        this.classList.toggle('color-cross__show')\n    })\n}\n\n\n\n\n//# sourceURL=webpack:///./script/color.js?");

/***/ }),

/***/ "./script/filters.js":
/*!***************************!*\
  !*** ./script/filters.js ***!
  \***************************/
/***/ (() => {

eval("const filter = document.getElementsByClassName('filtres-body__head');\nlet i \n\nfor (i = 0; i < filter.length; i++) {\n    filter[i].addEventListener('click', function() {\n        this.classList.toggle('active');\n        var filtresBody = this.nextElementSibling;\n        filtresBody.classList.toggle('filtres-body__content_show')\n        })\n    }\n\n\n//# sourceURL=webpack:///./script/filters.js?");

/***/ }),

/***/ "./script/menu-filter-mobile.js":
/*!**************************************!*\
  !*** ./script/menu-filter-mobile.js ***!
  \**************************************/
/***/ (() => {

eval("const menuFilter = document.querySelector('.catalog__filters_head-title');\nconst menuFilterBody = document.querySelector('.filtres-body')\nconst menuFilterGo = document.querySelector('.catalog__filters_bottom-go')\nconst menuFilterReset = document.querySelector('.catalog__filters_bottom-reset')\n\nif (menuFilter) {\n    menuFilter.addEventListener(\"click\", function(e) {\n    document.body.classList.toggle('_lock');\n    menuFilter.classList.toggle('_active');\n    menuFilterBody.classList.add('filtres-body-show');\n  })\n\n  if(menuFilterGo) {\n    menuFilterGo.addEventListener(\"click\", function(){\n        document.body.classList.remove('_lock');\n        menuFilter.classList.remove('_active');\n        menuFilterBody.classList.remove('filtres-body-show');\n    })\n  }\n\n  if(menuFilterReset) {\n    menuFilterReset.addEventListener(\"click\", function(){\n        document.body.classList.remove('_lock');\n        menuFilter.classList.remove('_active');\n        menuFilterBody.classList.remove('filtres-body-show');\n    })\n  }\n}\n\n//# sourceURL=webpack:///./script/menu-filter-mobile.js?");

/***/ }),

/***/ "./script/range.js":
/*!*************************!*\
  !*** ./script/range.js ***!
  \*************************/
/***/ (() => {

eval("const inputLeft = document.getElementById(\"input-left\");\nconst inputRight = document.getElementById(\"input-right\");\n\nconst thumbLeft = document.querySelector(\".thumb-left\");\nconst thumbRight = document.querySelector(\".thumb-right\");\nconst range = document.querySelector(\".range\");\n\nlet valueLeft = document.querySelector(\".thumb-left-value\");\nlet valueRight = document.querySelector(\".thumb-right-value\");\n\n\nfunction setLeftValue() {\n\tvar _this = inputLeft,\n\t\tmin = parseInt(_this.min),\n\t\tmax = parseInt(_this.max);\n\n\t_this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);\n\n\tvar percent = ((_this.value - min) / (max - min)) * 100;\n\n\tthumbLeft.style.left = percent + \"%\";\n\trange.style.left = percent + \"%\";\n\n\tvalueLeft.textContent = _this.value\n}\nsetLeftValue();\n\nfunction setRightValue() {\n\tvar _this = inputRight,\n\t\tmin = parseInt(_this.min),\n\t\tmax = parseInt(_this.max);\n\n\t_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);\n\n\tvar percent = ((_this.value - min) / (max - min)) * 100;\n\n\tthumbRight.style.right = (100 - percent) + \"%\";\n\trange.style.right = (100 - percent) + \"%\";\n\n\tvalueRight.textContent = _this.value\n}\nsetRightValue();\n\ninputLeft.addEventListener(\"input\", setLeftValue);\ninputRight.addEventListener(\"input\", setRightValue);\n\ninputLeft.addEventListener(\"mouseover\", function() {\n\tthumbLeft.classList.add(\"hover\");\n});\ninputLeft.addEventListener(\"mouseout\", function() {\n\tthumbLeft.classList.remove(\"hover\");\n});\ninputLeft.addEventListener(\"mousedown\", function() {\n\tthumbLeft.classList.add(\"active\");\n});\ninputLeft.addEventListener(\"mouseup\", function() {\n\tthumbLeft.classList.remove(\"active\");\n});\n\ninputRight.addEventListener(\"mouseover\", function() {\n\tthumbRight.classList.add(\"hover\");\n});\ninputRight.addEventListener(\"mouseout\", function() {\n\tthumbRight.classList.remove(\"hover\");\n});\ninputRight.addEventListener(\"mousedown\", function() {\n\tthumbRight.classList.add(\"active\");\n});\ninputRight.addEventListener(\"mouseup\", function() {\n\tthumbRight.classList.remove(\"active\");\n});\n\n//# sourceURL=webpack:///./script/range.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;