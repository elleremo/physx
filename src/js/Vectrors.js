import { Setting } from "./Render";
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
        this.vel = new Vector(0, 0);
        this.acc = new Vector(0, 0.5);
        // grav : number = 0.05;
        this.oldx = 0;
        this.oldy = 0;
        // this.pos = new Vector();
        this.size = size;
        this.type = type;
        this.oldx = this.x - 2;
        this.oldy = this.y;
        // this.draw();
        // this.vel.x = Math.random()*2 ;
        // this.vel.y = Math.random()*2 ;
    }
    move() {
        if (this.type === 'static')
            return;
        if (this.y > this.setting.height - this.size) {
            let n = this.y;
            this.y = this.setting.height - this.size;
            this.oldy = n;
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
export { Vector, Point };
//# sourceMappingURL=Vectrors.js.map