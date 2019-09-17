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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Game.js":
/*!************************!*\
  !*** ./src/js/Game.js ***!
  \************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _Vectrors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vectrors */ "./src/js/Vectrors.js");
/* harmony import */ var _Render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Render */ "./src/js/Render.js");
﻿

let s = new _Vectrors__WEBPACK_IMPORTED_MODULE_0__["Vector"](4, 5);
//
// class DyPoint extends Point {
//     typ: string = 'DyPoint';
//     vel: Vector;
//     acc: Vector;
//     size: number = 10;
//     par: Point;
//     grav = new Vector(0,0.1);
//     dist: number;
//
//     constructor(pos: Position, size?: number) {
//         super(pos, size);
//         this.vel = new Vector();
//         this.acc = new Vector(0,0);
//         this.size = size || 5;
//     }
//
//     move() {
//
//
//
//         let distance = Vector.distance(this, this.par);
//
//         this.acc.y =  distance.length -this.acc.y;
//         this.acc.x = distance.length - this.acc.x;
//
//         this.vel.x +=  this.acc.x;
//         this.vel.y +=  this.acc.y;
//
//         this.x += this.vel.x;
//         this.y += this.vel.y;
//
//
//     }
//
//     animate() {
//
//         this.draw();
//         this.move();
//
//         // let o = this;
//         // let id = setInterval(function () {
//         //     o.draw();
//         //     o.move();
//         // }, 16.6)
//     }
// }
//
// interface ISet {
//     canvas: HTMLCanvasElement;
//     ctx: CanvasRenderingContext2D;
//     fixedPoints: Position;
//     point: Position;
// }
class Game {
    constructor(setting) {
        // this.set.ctx = setting.canvas.getContext("2d");
        _Render__WEBPACK_IMPORTED_MODULE_1__["Setting"].prototype.setting = setting;
        this.render = new _Render__WEBPACK_IMPORTED_MODULE_1__["Render"]();
        console.log(this.render.setting);
        this.render.animate();
        // this.init();
    }
}

//# sourceMappingURL=Game.js.map

/***/ }),

/***/ "./src/js/Render.js":
/*!**************************!*\
  !*** ./src/js/Render.js ***!
  \**************************/
/*! exports provided: Setting, Render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Setting", function() { return Setting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Render", function() { return Render; });
/* harmony import */ var _Vectrors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vectrors */ "./src/js/Vectrors.js");
﻿
class Setting {
}
class Render extends Setting {
    constructor() {
        super();
        this.points = [];
        this.setting.ctx;
        this.add();
    }
    add() {
        for (let p of this.setting.points) {
            this.points.push(new _Vectrors__WEBPACK_IMPORTED_MODULE_0__["Point"]({ x: p.x, y: p.y }, 5));
        }
        for (let k of this.points) {
            console.log(k);
        }
    }
    draw() {
        this.setting.ctx.clearRect(0, 0, this.setting.width, this.setting.height);
        for (let p of this.points) {
            p.draw();
            p.move();
        }
    }
    animate() {
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}
//# sourceMappingURL=Render.js.map

/***/ }),

/***/ "./src/js/Vectrors.js":
/*!****************************!*\
  !*** ./src/js/Vectrors.js ***!
  \****************************/
/*! exports provided: Vector, Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return Vector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony import */ var _Render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Render */ "./src/js/Render.js");
﻿
class Vector extends _Render__WEBPACK_IMPORTED_MODULE_0__["Setting"] {
    constructor(x, y) {
        super();
        this.x = x || 0;
        this.y = y || 0;
    }
    get length() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
    static distance(a, b) {
        return new Vector(b.x - a.x, b.y - a.y);
    }
}
class Point extends Vector {
    constructor(pos, size) {
        super(pos.x, pos.y);
        this.typ = 'Point';
        this.vel = new Vector();
        this.acc = new Vector(0, 1);
        // this.pos = new Vector();
        this.size = size;
        this.draw();
    }
    move() {
        this.vel.y += this.acc.y;
        this.y += this.vel.y;
        if (this.y > this.setting.height) {
            this.y = this.setting.height;
            this.vel.y *= -1;
        }
    }
    draw() {
        this.setting.ctx.beginPath();
        this.setting.ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI, false);
        this.setting.ctx.fillStyle = 'red';
        this.setting.ctx.fill();
        this.setting.ctx.lineWidth = 1;
        this.setting.ctx.strokeStyle = 'red';
        this.setting.ctx.stroke();
    }
}

//# sourceMappingURL=Vectrors.js.map

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ "./src/js/Game.js");
﻿
console.log('gge');
let canvas = window.document.querySelector('canvas');
canvas.width = 700;
canvas.height = 400;
let width = canvas.width / 2;
let height = canvas.height / 2;
let game = new _Game__WEBPACK_IMPORTED_MODULE_0__["Game"]({
    canvas: canvas,
    ctx: canvas.getContext("2d"),
    width: canvas.width,
    height: canvas.height,
    // fixedPoints  : { x:width, y:0 },
    // fixedPoints  : { x:width, y:20 },
    points: [
        { x: 200, y: height },
        { x: 500, y: height }
    ]
});
//# sourceMappingURL=index.js.map

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVmVjdHJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFxQztBQUNNO0FBQzNDLFlBQVksZ0RBQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtDQUFPO0FBQ2YsMEJBQTBCLDhDQUFNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0I7QUFDaEIsZ0M7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQW9DO0FBQzdCO0FBQ1A7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsK0NBQUssRUFBRSxpQkFBaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDOzs7Ozs7Ozs7Ozs7QUM5QkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFvQztBQUNwQyxxQkFBcUIsK0NBQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDeUI7QUFDekIsb0M7Ozs7Ozs7Ozs7OztBQzNDQTtBQUFBO0FBQUEsQ0FBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwwQ0FBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixlQUFlO0FBQ3RDLHVCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQSxTQUFTLG9CQUFvQjtBQUM3QixTQUFTO0FBQ1Q7QUFDQSxDQUFDO0FBQ0QsaUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvaW5kZXguanNcIik7XG4iLCLvu79pbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwiLi9WZWN0cm9yc1wiO1xuaW1wb3J0IHsgU2V0dGluZywgUmVuZGVyIH0gZnJvbSBcIi4vUmVuZGVyXCI7XG5sZXQgcyA9IG5ldyBWZWN0b3IoNCwgNSk7XG4vL1xuLy8gY2xhc3MgRHlQb2ludCBleHRlbmRzIFBvaW50IHtcbi8vICAgICB0eXA6IHN0cmluZyA9ICdEeVBvaW50Jztcbi8vICAgICB2ZWw6IFZlY3Rvcjtcbi8vICAgICBhY2M6IFZlY3Rvcjtcbi8vICAgICBzaXplOiBudW1iZXIgPSAxMDtcbi8vICAgICBwYXI6IFBvaW50O1xuLy8gICAgIGdyYXYgPSBuZXcgVmVjdG9yKDAsMC4xKTtcbi8vICAgICBkaXN0OiBudW1iZXI7XG4vL1xuLy8gICAgIGNvbnN0cnVjdG9yKHBvczogUG9zaXRpb24sIHNpemU/OiBudW1iZXIpIHtcbi8vICAgICAgICAgc3VwZXIocG9zLCBzaXplKTtcbi8vICAgICAgICAgdGhpcy52ZWwgPSBuZXcgVmVjdG9yKCk7XG4vLyAgICAgICAgIHRoaXMuYWNjID0gbmV3IFZlY3RvcigwLDApO1xuLy8gICAgICAgICB0aGlzLnNpemUgPSBzaXplIHx8IDU7XG4vLyAgICAgfVxuLy9cbi8vICAgICBtb3ZlKCkge1xuLy9cbi8vXG4vL1xuLy8gICAgICAgICBsZXQgZGlzdGFuY2UgPSBWZWN0b3IuZGlzdGFuY2UodGhpcywgdGhpcy5wYXIpO1xuLy9cbi8vICAgICAgICAgdGhpcy5hY2MueSA9ICBkaXN0YW5jZS5sZW5ndGggLXRoaXMuYWNjLnk7XG4vLyAgICAgICAgIHRoaXMuYWNjLnggPSBkaXN0YW5jZS5sZW5ndGggLSB0aGlzLmFjYy54O1xuLy9cbi8vICAgICAgICAgdGhpcy52ZWwueCArPSAgdGhpcy5hY2MueDtcbi8vICAgICAgICAgdGhpcy52ZWwueSArPSAgdGhpcy5hY2MueTtcbi8vXG4vLyAgICAgICAgIHRoaXMueCArPSB0aGlzLnZlbC54O1xuLy8gICAgICAgICB0aGlzLnkgKz0gdGhpcy52ZWwueTtcbi8vXG4vL1xuLy8gICAgIH1cbi8vXG4vLyAgICAgYW5pbWF0ZSgpIHtcbi8vXG4vLyAgICAgICAgIHRoaXMuZHJhdygpO1xuLy8gICAgICAgICB0aGlzLm1vdmUoKTtcbi8vXG4vLyAgICAgICAgIC8vIGxldCBvID0gdGhpcztcbi8vICAgICAgICAgLy8gbGV0IGlkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuLy8gICAgICAgICAvLyAgICAgby5kcmF3KCk7XG4vLyAgICAgICAgIC8vICAgICBvLm1vdmUoKTtcbi8vICAgICAgICAgLy8gfSwgMTYuNilcbi8vICAgICB9XG4vLyB9XG4vL1xuLy8gaW50ZXJmYWNlIElTZXQge1xuLy8gICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4vLyAgICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4vLyAgICAgZml4ZWRQb2ludHM6IFBvc2l0aW9uO1xuLy8gICAgIHBvaW50OiBQb3NpdGlvbjtcbi8vIH1cbmNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKHNldHRpbmcpIHtcbiAgICAgICAgLy8gdGhpcy5zZXQuY3R4ID0gc2V0dGluZy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBTZXR0aW5nLnByb3RvdHlwZS5zZXR0aW5nID0gc2V0dGluZztcbiAgICAgICAgdGhpcy5yZW5kZXIgPSBuZXcgUmVuZGVyKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVuZGVyLnNldHRpbmcpO1xuICAgICAgICB0aGlzLnJlbmRlci5hbmltYXRlKCk7XG4gICAgICAgIC8vIHRoaXMuaW5pdCgpO1xuICAgIH1cbn1cbmV4cG9ydCB7IEdhbWUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUdhbWUuanMubWFwIiwi77u/aW1wb3J0IHsgUG9pbnQgfSBmcm9tIFwiLi9WZWN0cm9yc1wiO1xuZXhwb3J0IGNsYXNzIFNldHRpbmcge1xufVxuZXhwb3J0IGNsYXNzIFJlbmRlciBleHRlbmRzIFNldHRpbmcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgICAgICB0aGlzLnNldHRpbmcuY3R4O1xuICAgICAgICB0aGlzLmFkZCgpO1xuICAgIH1cbiAgICBhZGQoKSB7XG4gICAgICAgIGZvciAobGV0IHAgb2YgdGhpcy5zZXR0aW5nLnBvaW50cykge1xuICAgICAgICAgICAgdGhpcy5wb2ludHMucHVzaChuZXcgUG9pbnQoeyB4OiBwLngsIHk6IHAueSB9LCA1KSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgayBvZiB0aGlzLnBvaW50cykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coayk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5nLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5zZXR0aW5nLndpZHRoLCB0aGlzLnNldHRpbmcuaGVpZ2h0KTtcbiAgICAgICAgZm9yIChsZXQgcCBvZiB0aGlzLnBvaW50cykge1xuICAgICAgICAgICAgcC5kcmF3KCk7XG4gICAgICAgICAgICBwLm1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuYW5pbWF0ZSgpKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1SZW5kZXIuanMubWFwIiwi77u/aW1wb3J0IHsgU2V0dGluZyB9IGZyb20gXCIuL1JlbmRlclwiO1xuY2xhc3MgVmVjdG9yIGV4dGVuZHMgU2V0dGluZyB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnggPSB4IHx8IDA7XG4gICAgICAgIHRoaXMueSA9IHkgfHwgMDtcbiAgICB9XG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiogMiArIHRoaXMueSAqKiAyKTtcbiAgICB9XG4gICAgc3RhdGljIGRpc3RhbmNlKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoYi54IC0gYS54LCBiLnkgLSBhLnkpO1xuICAgIH1cbn1cbmNsYXNzIFBvaW50IGV4dGVuZHMgVmVjdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3MsIHNpemUpIHtcbiAgICAgICAgc3VwZXIocG9zLngsIHBvcy55KTtcbiAgICAgICAgdGhpcy50eXAgPSAnUG9pbnQnO1xuICAgICAgICB0aGlzLnZlbCA9IG5ldyBWZWN0b3IoKTtcbiAgICAgICAgdGhpcy5hY2MgPSBuZXcgVmVjdG9yKDAsIDEpO1xuICAgICAgICAvLyB0aGlzLnBvcyA9IG5ldyBWZWN0b3IoKTtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuICAgIG1vdmUoKSB7XG4gICAgICAgIHRoaXMudmVsLnkgKz0gdGhpcy5hY2MueTtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMudmVsLnk7XG4gICAgICAgIGlmICh0aGlzLnkgPiB0aGlzLnNldHRpbmcuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnkgPSB0aGlzLnNldHRpbmcuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy52ZWwueSAqPSAtMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLnNldHRpbmcuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLnNldHRpbmcuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgNSwgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5nLmN0eC5maWxsU3R5bGUgPSAncmVkJztcbiAgICAgICAgdGhpcy5zZXR0aW5nLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuc2V0dGluZy5jdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgdGhpcy5zZXR0aW5nLmN0eC5zdHJva2VTdHlsZSA9ICdyZWQnO1xuICAgICAgICB0aGlzLnNldHRpbmcuY3R4LnN0cm9rZSgpO1xuICAgIH1cbn1cbmV4cG9ydCB7IFZlY3RvciwgUG9pbnQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZlY3Ryb3JzLmpzLm1hcCIsIu+7v2ltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9HYW1lXCI7XG5jb25zb2xlLmxvZygnZ2dlJyk7XG5sZXQgY2FudmFzID0gd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xuY2FudmFzLndpZHRoID0gNzAwO1xuY2FudmFzLmhlaWdodCA9IDQwMDtcbmxldCB3aWR0aCA9IGNhbnZhcy53aWR0aCAvIDI7XG5sZXQgaGVpZ2h0ID0gY2FudmFzLmhlaWdodCAvIDI7XG5sZXQgZ2FtZSA9IG5ldyBHYW1lKHtcbiAgICBjYW52YXM6IGNhbnZhcyxcbiAgICBjdHg6IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiksXG4gICAgd2lkdGg6IGNhbnZhcy53aWR0aCxcbiAgICBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQsXG4gICAgLy8gZml4ZWRQb2ludHMgIDogeyB4OndpZHRoLCB5OjAgfSxcbiAgICAvLyBmaXhlZFBvaW50cyAgOiB7IHg6d2lkdGgsIHk6MjAgfSxcbiAgICBwb2ludHM6IFtcbiAgICAgICAgeyB4OiAyMDAsIHk6IGhlaWdodCB9LFxuICAgICAgICB7IHg6IDUwMCwgeTogaGVpZ2h0IH1cbiAgICBdXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=