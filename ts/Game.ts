import {Vector, Point, Struct, Edge, StructManager} from "./Vectrors"
import {Setting, TSetting, ISetting,  Render} from "./Render";

let s = new Vector(4, 5);

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


class Game extends Setting{

    set;
    render: Render;
    structManager: StructManager;

    constructor(setting:{}) {

        super();
        // this.set.ctx = setting.canvas.getContext("2d");
        Setting.prototype.setting = setting;
        Setting.prototype.setting.Vpoints = [];
        this.render = new Render();
        this.structManager = new StructManager();
        console.log(this.render.setting);

        // this.init();
    }

    addPoint(point: Point){
        this.render.addOncePoint(point);
    }

    // init() {
    //     let a = new Point(this.set.fixedPoints, 5);
    //     let b = new DyPoint(this.set.point, 5);
    //
    //     b.par = a;
    //
    //     this.render.add(a);
    //     this.render.add(b);
    //     // this.render.draw();
    //
    //     this.render.animate();
    //     // b.animate();
    // }

}

export {Game}
