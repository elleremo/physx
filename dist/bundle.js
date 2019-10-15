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
/******/ 	  var id = "webpack-livereload-plugin-script-264cd78ab88bb695";
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
        _Render__WEBPACK_IMPORTED_MODULE_1__["State"].setting = setting;
        // State.prototype.buffer = [];
        this.render = new _Render__WEBPACK_IMPORTED_MODULE_1__["Render"]();
        _Render__WEBPACK_IMPORTED_MODULE_1__["State"].structManager = new _Vectrors__WEBPACK_IMPORTED_MODULE_0__["StructManager"]();
        // console.log(this.render.setting);
        // this.init();
    }
    addPoint(point) {
        // this.render.addOncePoint(point);
    }
}

//# sourceMappingURL=Game.js.map

/***/ }),

/***/ "./src/js/Render.js":
/*!**************************!*\
  !*** ./src/js/Render.js ***!
  \**************************/
/*! exports provided: State, Render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Render", function() { return Render; });
﻿class State {
}
class Render {
    constructor() {
        this.points = [];
    }
    clear() {
        State.setting.ctx.clearRect(0, 0, State.setting.width, State.setting.height);
    }
    // // addOncePoint(point: Point){
    // //     this.setting.Vpoints.push(point);
    // // }
    //
    // add() {
    //     for (let p of State.setting.points) {
    //         State.structManager.buffer.push(new Point({x: p.x, y: p.y}, 5, p.type))
    //     }
    //
    //      this.draw()
    // }
    draw() {
        State.setting.ctx.clearRect(0, 0, State.setting.width, State.setting.height);
        // if (State.structManager.buffer.length == 0) return;
        // for (let struct of State.structManager.buffer) {
        State.structManager.buffer.forEach((struct) => {
            struct.edges.forEach((edge) => {
                edge.firstNode.draw();
                edge.lastNode.draw();
                edge.draw();
            });
        });
        // p1.move();
        //
        // p1.update();
        //
        // p1.draw();
        // }
    }
    stopAnimate() {
        cancelAnimationFrame(this.RID);
    }
    animate() {
        this.draw();
        this.RID = requestAnimationFrame(() => this.animate());
        // setTimeout(()=>this.animate(), 100)
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
/*! exports provided: Vector, StructManager, Struct, Edge, Point */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (42:12)\nYou may need an appropriate loader to handle this file type.\n|             let edge = new Edge();\n|             this.ponts.\n>             ;\n|         }\n|     }");

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
/* harmony import */ var _Vectrors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vectrors */ "./src/js/Vectrors.js");
/* harmony import */ var _Render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Render */ "./src/js/Render.js");
﻿


let log = console.log;
let dpr = window.devicePixelRatio;
let canvas = window.document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let button = document.getElementById('button');
canvas.width = 500;
canvas.height = 500;
log(canvas.width);
const game = new _Game__WEBPACK_IMPORTED_MODULE_0__["Game"]({
    canvas: canvas,
    ctx: ctx,
    width: 500,
    height: 500,
    // fixedPoints  : { x:width, y:0 },
    // fixedPoints  : { x:width, y:20 },
    points: [
        { x: 100, y: 50 },
        { x: 250, y: 200 },
        { x: 400, y: 350 }
    ]
});
game.render.animate();
let KeyMap = window.addEventListener("keyup", (e) => {
    switch (e.code) {
        case "Space":
            // game.render.animate();
            log('space');
            break;
        case "KeyL":
            break;
    }
});
let resize = window.addEventListener("resize", () => {
    console.log('resize');
    // canvas.width = window.innerWidth;  // УДОЛИ!
    // canvas.height = window.innerHeight;
    _Render__WEBPACK_IMPORTED_MODULE_2__["State"].setting.width = window.innerWidth;
    _Render__WEBPACK_IMPORTED_MODULE_2__["State"].setting.height = window.innerHeight;
    // log('width:' + window.innerWidth, 'height: ' + window.innerHeight)
    // game.setting.ctx.scale( 1/window.devicePixelRatio, 1/window.devicePixelRatio);
});
// let start_button  = button.addEventListener("click", ()=>{
//    game.render.animate();
// });
let o = {
    clickCount: 0,
    struct: undefined,
    lastEdge: undefined,
    init() {
        this.struct = new _Vectrors__WEBPACK_IMPORTED_MODULE_1__["Struct"]('web');
        _Render__WEBPACK_IMPORTED_MODULE_2__["State"].structManager.buffer.push(this.struct);
        o.click();
    },
    click: function () {
        canvas.addEventListener("click", (e) => {
            this.pushDot(e);
            this.clickCount++;
        });
    },
    // closure: function(p1){
    //
    //     let p2 = p1;
    //
    //     return function (p2) {
    //         return p2 + p1;
    //     }
    // },
    pushDot: function (e) {
        // ! Не забудь что при обработке движения Edge должны обрабатывать только восстановление расстояний но не
        // движение точек!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        log('clickCount: ', this.clickCount);
        let x = e.offsetX;
        let y = e.offsetY;
        let point;
        let edge;
        if (this.clickCount % 2 != 0) { // если нечетное (1 3 5) / второй клик
            // let edge = new Edge();
            this.lastPoint = new _Vectrors__WEBPACK_IMPORTED_MODULE_1__["Point"]({ x, y }, 1); // вторая точка
            log('второй клик');
        }
        if (this.clickCount == 4) {
            log(this.struct);
        }
        if (this.clickCount == 0) { // если первый клик
            edge = new _Vectrors__WEBPACK_IMPORTED_MODULE_1__["Edge"](); // создаем грань
            point = new _Vectrors__WEBPACK_IMPORTED_MODULE_1__["Point"]({ x, y }, 5);
            edge.firstNode = point;
            this.lastEdge = edge;
        }
        else {
            edge = new _Vectrors__WEBPACK_IMPORTED_MODULE_1__["Edge"]();
            point = new _Vectrors__WEBPACK_IMPORTED_MODULE_1__["Point"]({ x, y }, 5);
            this.lastEdge.lastNode = point;
        }
        // if (this.clickCount % 2 == 0) { // если первый клик
        //     edge = new Edge(); // создаем грань
        //     edge.firstNode = new Point({x, y}, 5);
        //
        // }
        //
        // if (this.clickCount % 2 != 0) { // если второй клик
        //     edge = new Edge(); // создаем грань
        //     edge.firstNode = new Point({x, y}, 5);
        // }
        //
        //
        // edge.firstNode = point1;
        //
        // this.lastEdge = edge;
        this.struct.add(edge);
        //
        canvas.addEventListener('mousemove', (e) => {
            point.x = e.offsetX;
            point.y = e.offsetY;
        });
        // log(pushDot);
        // let edge = new Edge(point, point);
        // game.addPoint(point);
    }
    //     canvas.addEventListener("click", (e: MouseEvent) => {
    //
    // }
};
o.init();
// let s = new DeviceAcceleration();
// function accelerometerUpdate(event) {
//     var aX = event.accelerationIncludingGravity.x*10;
//     var aY = event.accelerationIncludingGravity.y*10;
//     var aZ = event.accelerationIncludingGravity.z*10;
//
//
//     document.querySelector("#button").innerHTML = aX;
//     document.querySelector("#button").innerHTML = aY;
//     document.querySelector("#button").innerHTML = aZ;
//
//     // ix aY is negative, switch rotation
//     // if (aY <0) {
//     //     aX = -aX - 180;
//     // }
//     // // document.querySelector("#block").style.transform="rotate("+aX+"deg)";
//
// }
//# sourceMappingURL=index.js.map

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map