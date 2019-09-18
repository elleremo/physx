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
/******/ 	// webpack-livereload-plugin
/******/ 	(function() {
/******/ 	  if (typeof window === "undefined") { return };
/******/ 	  var id = "webpack-livereload-plugin-script-0b2aa2779637577e";
/******/ 	  if (document.getElementById(id)) { return; }
/******/ 	  var el = document.createElement("script");
/******/ 	  el.id = id;
/******/ 	  el.async = true;
/******/ 	  el.src = "//" + location.hostname + ":35729/livereload.js";
/******/ 	  document.getElementsByTagName("head")[0].appendChild(el);
/******/ 	}());
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
        // this.setting.ctx.shadowColor = 'rgba(0,0,0,0.2)';
        // this.setting.ctx.shadowBlur = 10;
        // this.setting.ctx;
        this.add();
    }
    add() {
        for (let p of this.setting.points) {
            this.points.push(new _Vectrors__WEBPACK_IMPORTED_MODULE_0__["Point"]({ x: p.x, y: p.y }, 5, p.type));
        }
        for (let k of this.points) {
            console.log(k);
        }
    }
    draw() {
        this.setting.ctx.clearRect(0, 0, this.setting.width, this.setting.height);
        let lock = 40;
        let power = 0.01;
        let r = 0.02;
        for (let p1 of this.points) {
            for (let p2 of this.points) {
                if (true) {
                    let distance = _Vectrors__WEBPACK_IMPORTED_MODULE_0__["Vector"].pointDistance(p1, p2); // дистаниця
                    let fVector = _Vectrors__WEBPACK_IMPORTED_MODULE_0__["Vector"].vectorAB(p1, p2).normalize(); // вектор силы
                    let diff = distance - lock; // относительное растяжение стержня (+)
                    //  let f =    ((power  * diff) + p1.vel.x*r + p1.acc.x;
                    //  let fy =  (power * diff) + p1.vel.y*r + p1.acc.y;
                    //  // let fy =  (power * diff) + (p1.vel.y*r) + (p1.acc.y*0.000000001 );
                    //  // let fy =       (power * diff) + (p1.acc.y*r) ;
                    //  // let f = (100 )/;
                    console.log("distance: ", distance);
                    //  // console.log ("fVector: ", fVector);
                    //  // console.log ("diff: ", diff);
                    //  // console.log ('res:  = ', (fVector.x * diff * power));
                    //  // console.log ('accc:  = ', p1.acc.x);
                    //
                    //  p1.acc.x +=  ( fVector.x * f ) ;
                    //  p1.acc.y += (fVector.y * fy) ;
                    let plus = (diff / (2));
                    p1.x += plus * fVector.x;
                    p2.x -= plus * fVector.x;
                    p1.y += plus * fVector.y;
                    p2.y -= plus * fVector.y;
                }
            }
        }
        for (let p1 of this.points) {
            p1.move();
            p1.draw();
        }
        for (let p1 of this.points) {
            for (let p2 of this.points) {
                if (p1 !== p2) {
                    this.setting.ctx.beginPath();
                    this.setting.ctx.moveTo(p1.x, p1.y);
                    this.setting.ctx.lineTo(p2.x, p2.y);
                    this.setting.ctx.strokeStyle = 'rgba(255,22,190,0.05)';
                    this.setting.ctx.lineWidth = 1.5;
                    this.setting.ctx.stroke();
                }
            }
        }
    }
    animate() {
        this.draw();
        requestAnimationFrame(() => this.animate());
        // function guk(){
        //
        //     let blength = 50;
        //     let k = 0.1;
        //
        //     let x1 = 0;
        //     let x2 = 75;
        //     let vx2 = 0;
        //     let ax2 = 0;
        //     let r = 0.2;
        //
        //     for (let i=0 ; i < 1000; i++){
        //
        //
        //         let dist = x2 - x1 ; // distance
        //         let diff = dist - blength; // relative length
        //         let f = -(k*diff) ;
        //         console.log(/* `ax2: ${ax2}`, `vx2: ${vx2}`,`px: ${x2}`, */ `dist: ${dist}`, `diff: ${diff}`, `f: ${f}`     )
        //
        //         ax2 = f * r;
        //         vx2 = vx2 + ax2;
        //         x2 = x2 + vx2;
        //
        //     }
        // }
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
    normalize() {
        let length = this.length;
        return new Vector(this.x / length, this.y / length);
    }
    static vectorAB(a, b) {
        return new Vector(b.x - a.x, b.y - a.y);
    }
    static pointDistance(a, b) {
        return Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
    }
}
class Point extends Vector {
    constructor(pos, size, type) {
        super(pos.x, pos.y);
        this.type = 'Point';
        this.vel = new Vector();
        this.acc = new Vector(0, 0);
        this.grav = 0.1;
        // this.pos = new Vector();
        this.size = size;
        this.type = type;
        this.draw();
        // this.vel.x = Math.random()*2 ;
        // this.vel.y = Math.random()*2 ;
    }
    move() {
        if (this.type === 'static')
            return;
        if (this.y + this.size > this.setting.height) {
            this.y = this.setting.height - this.size;
            this.vel.y *= -0.1;
        }
        // if (this.y - this.size < 0) {
        //     this.y = 0 + this.size;
        //     this.vel.y *= -1;
        // }
        // if (this.x + this.size > this.setting.width ) {
        //     this.x = this.setting.width - this.size;
        //     this.vel.x *= -1;
        // }
        // if (this.x - this.size < 0) {
        //     this.x = 0 + this.size;
        //     this.vel.x *= -1;
        // }
        this.vel.y += this.acc.y + this.grav;
        this.vel.x += this.acc.x;
        this.y += this.vel.y;
        this.x += this.vel.x;
    }
    draw() {
        this.setting.ctx.beginPath();
        this.setting.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
        this.setting.ctx.fillStyle = '#eee';
        this.setting.ctx.fill();
        this.setting.ctx.lineWidth = 0.1;
        this.setting.ctx.strokeStyle = '#000000';
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
        // { x: 100, y: 100, type : 'static' },
        { x: 100, y: 100 },
        { x: 200, y: 300 },
        { x: 400, y: 200 },
        { x: 200, y: 150 }
    ]
});
//# sourceMappingURL=index.js.map

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map