﻿import { Setting } from "./Render";
class Vector extends Setting {
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
        this.acc = new Vector(0, 0.5);
        // this.pos = new Vector();
        this.size = 10;
        this.draw();
    }
    move() {
        this.vel.y += this.acc.y;
        this.y += this.vel.y;

        if (this.y + this.size > this.setting.height) {
            this.y = this.setting.height - this.size;
            this.vel.y *= -1;
            this.vel.y *= 0.95;
        }
    }
    draw() {
        this.setting.ctx.beginPath();
        this.setting.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
        this.setting.ctx.fillStyle = '#eee';
        this.setting.ctx.fill();
        this.setting.ctx.lineWidth = 1;
        this.setting.ctx.strokeStyle = '#000';
        this.setting.ctx.stroke();
    }
}
export { Vector, Point };
//# sourceMappingURL=Vectrors.js.map