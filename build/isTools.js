/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
(function webpackMissingModule() { throw new Error("Cannot find module \"dev\""); }());


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_data__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_css__ = __webpack_require__(4);


(function (global) {
    var tool = Object.assign({}, __WEBPACK_IMPORTED_MODULE_0__util_data__, __WEBPACK_IMPORTED_MODULE_1__util_css__);
    !global["T"] && (global["T"] = tool);
    global["isTools"] = tool;
})(typeof window == "object" ? window : global);
console.log(global["T"]);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["addZero"] = addZero;
/* harmony export (immutable) */ __webpack_exports__["dateFormat"] = dateFormat;
/**
 * 对数字进行补零
 * @param {(string | number)} el 要进行操作的字符串或数字
 * @param {number} [num=2] 返回的字符长度
 * @param {boolean} [isInteger=true] 返回的数字是整数部分为true 返回的是小数部分为false
 * @returns {string}
 */
function addZero(el, num = 2, isInteger = true) {
    var result = typeof el == "number" ? el + "" : el;
    var len = result.length;
    if (len >= num)
        return result;
    if (isInteger) {
        for (var i = 0; i < num - len; i++) {
            result = "0" + result;
        }
    }
    else {
        for (var i = 0; i < num - len; i++) {
            result = result + "0";
        }
    }
    return result;
}
/**
 * @param {Date} date 要格式化的Date对象
 * @param {string} format example:"YYYY/mm/DD hh:MM:ss"
 * @returns {string} 返回格式化后的日期字符串
 */
function dateFormat(date, format) {
    var result = format;
    var year = date.getFullYear() + "";
    var month = addZero(date.getMonth() + 1 + "");
    var day = addZero(date.getDate() + "");
    var hours = addZero(date.getHours() + "");
    var minutes = addZero(date.getMinutes() + "");
    var seconds = addZero(date.getSeconds() + "");
    result = result.replace(/YYYY/, year).replace(/mm/, month).replace(/DD/, day).replace(/hh/, hours).replace(/MM/, minutes).replace(/ss/, seconds);
    console.log(result);
    return result;
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getOffset"] = getOffset;
/**
 * @param {(HTMLElement|string)} el 需要金乡计算的dom对象或对于的选择器字符串
 * @returns {object} 返回一个含有left 和 top的对象,对应目标元素到最外成元素的left和top值
 */
function getOffset(el) {
    var left = 0, top = 0;
    var dom = typeof el == "string" ? document.querySelector(el) : el;
    while (dom) {
        left += dom.offsetLeft;
        top += dom.offsetTop;
        dom = dom.offsetParent;
    }
    return {
        left: left,
        top: top
    };
}


/***/ })
/******/ ]);