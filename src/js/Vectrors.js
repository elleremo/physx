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
        this.grav = 0;
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
            this.vel.y *= -1;
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
        this.setting.ctx.lineWidth = 1;
        this.setting.ctx.strokeStyle = '#000000';
        this.setting.ctx.stroke();
    }
}
export { Vector, Point };
//# sourceMappingURL=Vectrors.js.map