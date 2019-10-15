import { Vector, StructManager } from "./Vectrors";
import { State, Render } from "./Render";
let s = new Vector(4, 5);
class Game {
    constructor(setting) {
        // this.set.ctx = setting.canvas.getContext("2d");
        State.setting = setting;
        // State.prototype.buffer = [];
        this.render = new Render();
        State.structManager = new StructManager();
        // console.log(this.render.setting);
        // this.init();
    }
    addPoint(point) {
        // this.render.addOncePoint(point);
    }
}
export { Game };
//# sourceMappingURL=Game.js.map