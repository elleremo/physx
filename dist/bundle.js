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
class Game extends _Render__WEBPACK_IMPORTED_MODULE_1__["Setting"] {
    constructor(setting) {
        super();
        // this.set.ctx = setting.canvas.getContext("2d");
        _Render__WEBPACK_IMPORTED_MODULE_1__["Setting"].prototype.setting = setting;
        _Render__WEBPACK_IMPORTED_MODULE_1__["Setting"].prototype.setting.Vpoints = [];
        this.render = new _Render__WEBPACK_IMPORTED_MODULE_1__["Render"]();
        console.log(this.render.setting);
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
        this.setting.ctx.shadowColor = 'rgba(65,152,211,0.65)';
        this.setting.ctx.shadowBlur = 10;
        // this.setting.ctx.scale( window.devicePixelRatio, window.devicePixelRatio);
        this.add();
    }
    clear() {
        this.setting.ctx.clearRect(0, 0, this.setting.width, this.setting.height);
    }
    add() {
        for (let p of this.setting.points) {
            this.setting.Vpoints.push(new _Vectrors__WEBPACK_IMPORTED_MODULE_0__["Node"]({ x: p.x, y: p.y }, 5, p.type));
        }
        this.draw();
    }
    draw() {
        this.setting.ctx.clearRect(0, 0, this.setting.width, this.setting.height);
        let lock = 200;
        let power = 0.01;
        let r = 0.02;
        // for (let p1 of this.points) {
        //     if(p1.type === 'static') continue;
        //     for (let p2 of this.points) {
        //
        //         if (p1 !== p2) {
        //                 let distance = Vector.pointDistance(p1, p2); // дистаниця
        //                 let fVector = Vector.vectorAB(p1, p2).normalize(); // вектор силы
        //                 let diff = distance - lock; // относительное растяжение стержня (+)
        //                 //  let f =    ((power  * diff) + p1.vel.x*r + p1.acc.x;
        //                 //  let fy =  (power * diff) + p1.vel.y*r + p1.acc.y;
        //                 //  // let fy =  (power * diff) + (p1.vel.y*r) + (p1.acc.y*0.000000001 );
        //                 //  // let fy =       (power * diff) + (p1.acc.y*r) ;
        //                 //  // let f = (100 )/;
        //                 //  console.log ("distance: ",distance );
        //                 //  // console.log ("fVector: ", fVector);
        //                 //  // console.log ("diff: ", diff);
        //                 //  // console.log ('res:  = ', (fVector.x * diff * power));
        //                 //  // console.log ('accc:  = ', p1.acc.x);
        //                 //
        //                 //  p1.acc.x +=  ( fVector.x * f ) ;
        //                 //  p1.acc.y += (fVector.y * fy) ;
        //
        //
        //
        //
        //             let plus = (diff/(80));
        //             p1.x += (plus*fVector.x );
        //             p1.y += (plus*fVector.y );
        //             // p2.x -= (plus*fVector.x );
        //             //     p2.y -= (plus*fVector.y );
        //
        //
        //         }
        //     }
        // }
        for (let p1 of this.setting.Vpoints) {
            p1.move();
            p1.update();
            p1.draw();
        }
        for (let p1 of this.setting.Vpoints) {
            for (let p2 of this.setting.Vpoints) {
                if (p1 !== p2) {
                    this.setting.ctx.beginPath();
                    this.setting.ctx.moveTo(p1.x, p1.y);
                    this.setting.ctx.lineTo(p2.x, p2.y);
                    this.setting.ctx.strokeStyle = 'rgba(81,184,255,0.76)';
                    this.setting.ctx.lineWidth = 1.5;
                    this.setting.ctx.stroke();
                }
            }
        }
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
/*! exports provided: Vector, Node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return Vector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
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
    static distanceAB(a, b) {
        return Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
    }
}
class StructManager {
}
class Struct {
    constructor(type) {
        this.type = 'web' || false;
        this.type = type;
        return this;
    }
    add(edge) {
        this.edges.push(edge);
    }
}
class Edge {
    constructor(first, last) {
        this.firstNode = first;
        this.lastNode = last;
        this.baseLength = Vector.distanceAB(first, last);
    }
}
class Node extends Vector {
    constructor(pos, size, type) {
        super(pos.x, pos.y);
        this.type = 'Point';
        this.vel = new Vector(0, 0);
        this.acc = new Vector(0, 0.5);
        // grav : number = 0.05;
        this.oldx = 0;
        this.oldy = 0;
        // this.pos = new Vector();
        this.size = size;
        this.type = type;
        this.oldx = this.x;
        this.oldy = this.y;
        // this.draw();
        // this.vel.x = Math.random()*2 ;
        // this.vel.y = Math.random()*2 ;
    }
    move() {
        if (this.type === 'static')
            return;
        if (this.y >= this.setting.height - this.size) {
            let n = this.y;
            this.y = this.setting.height - this.size;
            this.oldy = n;
            this.oldx = this.x - (this.x - this.oldx) * 0.1;
        }
        if (this.y < this.size) {
            let n = this.y;
            this.y = this.size;
            this.oldy = n;
        }
        if (this.x > this.setting.width - this.size) {
            let n = this.x;
            this.x = this.setting.width - this.size;
            this.oldx = n;
        }
        if (this.x < this.size) {
            let n = this.x;
            this.x = this.size;
            this.oldx = n;
        }
        // this.vel.y +=   this.grav;
        if (this.type !== 'static') {
            let tempx = this.x;
            let tempy = this.y;
            this.x += this.x - this.oldx + this.acc.x ** 2;
            this.y += this.y - this.oldy + this.acc.y ** 2;
            this.oldx = tempx;
            this.oldy = tempy;
        }
        ;
        // this.oldx = this.x ;
        // this.oldy = this.y;
    }
    update() {
        let lock = 100;
        for (let p2 of this.setting.Vpoints) {
            // if(p2.type === 'static') continue;
            if (this !== p2) {
                let V1V2 = Vector.vectorAB(this, p2); // вектор между вершинами
                let V1V2_Normalize = V1V2.normalize(); // нормализованный вектор
                let V1V2Length = V1V2.length; // дистаниця
                let diff = (V1V2Length - lock) / 20; // разница в длине
                //  let f =    ((power  * diff) + p1.vel.x*r + p1.acc.x;
                //  let fy =  (power * diff) + p1.vel.y*r + p1.acc.y;
                //  // let fy =  (power * diff) + (p1.vel.y*r) + (p1.acc.y*0.000000001 );
                //  // let fy =       (power * diff) + (p1.acc.y*r) ;
                //  // let f = (100 )/;
                //  console.log ("distance: ",distance );
                //  // console.log ("fVector: ", fVector);
                //  // console.log ("diff: ", diff);
                //  // console.log ('res:  = ', (fVector.x * diff * power));
                //  // console.log ('accc:  = ', p1.acc.x);
                //
                //  p1.acc.x +=  ( fVector.x * f ) ;
                //  p1.acc.y += (fVector.y * fy) ;
                if (this.type !== 'static') {
                    this.x += V1V2_Normalize.x * diff;
                    this.y += V1V2_Normalize.y * diff;
                }
                if (p2.type !== 'static') {
                    p2.x -= V1V2_Normalize.x * diff;
                    p2.y -= V1V2_Normalize.y * diff;
                }
                // let plus = (diff / (80));
                // p1.x += (plus * fVector.x);
                // p1.y += (plus * fVector.y);
                // // p2.x -= (plus*fVector.x );
                // //     p2.y -= (plus*fVector.y );
            }
        }
    }
    draw() {
        this.setting.ctx.beginPath();
        this.setting.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
        this.setting.ctx.fillStyle = '#eee';
        this.setting.ctx.fill();
        // this.setting.ctx.lineWidth = -.0;
        // this.setting.ctx.strokeStyle = '#000000';
        // this.setting.ctx.stroke();
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
let dpr = window.devicePixelRatio;
console.log(dpr);
let canvas = window.document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let button = document.getElementById('button');
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
const game = new _Game__WEBPACK_IMPORTED_MODULE_0__["Game"]({
    canvas: canvas,
    ctx: ctx,
    width: canvas.width,
    height: canvas.height,
    // fixedPoints  : { x:width, y:0 },
    // fixedPoints  : { x:width, y:20 },
    points: [
        { x: 400, y: 50 },
        { x: 350, y: 150 },
        { x: 250, y: 200 },
        //
        //
        // { x: 250, y: 200 },
        //
        // { x: 250, y: 200 },
        { x: 300, y: 300 }
    ]
});
game.render.animate();
let resize = window.addEventListener("resize", () => {
    console.log('resize');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    game.setting.width = window.innerWidth;
    game.setting.height = window.innerHeight;
    // game.setting.ctx.scale( 1/window.devicePixelRatio, 1/window.devicePixelRatio);
});
// let start_button  = button.addEventListener("click", ()=>{
//    game.render.animate();
// });
let pushDot = () => {
    canvas.addEventListener('click', (e) => {
        let x = e.offsetX;
        let y = e.offsetY;
    });
};
let log = console.log;
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
// let OM = class  {
//     x:number;
//     y:number;
//     constructor(x,y){
//         this.x = x ;
//         this.y = y ;
//     }
//     foo () {
//         log(this.x,this.y);
//     };
//# sourceMappingURL=index.js.map

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map