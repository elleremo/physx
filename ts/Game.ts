import {Vector, Point, Struct, Edge, StructManager} from "./Vectrors"
import {State, ISetting,  Render} from "./Render";

let s = new Vector(4, 5);

class Game {

    set;
    render: Render;
    structManager: StructManager;

    constructor(setting:ISetting) {


        // this.set.ctx = setting.canvas.getContext("2d");
        State.setting = setting;
        // State.prototype.buffer = [];
        this.render = new Render();
        State.structManager = new StructManager();
        // console.log(this.render.setting);

        // this.init();
    }

    addPoint(point: Point){
        // this.render.addOncePoint(point);
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
