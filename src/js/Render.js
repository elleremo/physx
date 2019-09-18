import { Vector, Point } from "./Vectrors";
export class Setting {
}
export class Render extends Setting {
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
            this.points.push(new Point({ x: p.x, y: p.y }, 5, p.type));
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
                    let distance = Vector.pointDistance(p1, p2); // дистаниця
                    let fVector = Vector.vectorAB(p1, p2).normalize(); // вектор силы
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