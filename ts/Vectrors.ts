import {Setting} from "./Render";

type Position = { x: number, y: number };

export class Vector extends Setting {
    x: number;
    y: number;

    constructor(x?: number, y?: number) {
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

    static vectorAB(a:Point, b:Point) {
        return new Vector(b.x - a.x, b.y - a.y);
    }

    static  distanceAB(a:Point, b:Point) {
        return Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
    }
}

export class StructManager {
    struct: Struct[];
}

export class Struct {
    edges: Edge[];
    type: string = 'web' || 'line';

    constructor (type: string){
        this.type = type;
        return this;
    }

    add (edge: Edge) {
        this.edges.push(edge)
    }
}

export class Edge {
    firstNode: Point;
    lastNode: Point;
    baseLength: number;

    constructor(first: Point, last: Point) {
            this.firstNode = first;
            this.lastNode = last;
            this.baseLength = Vector.distanceAB(first,last);
    }

}

export class Point extends Vector {
    type: string = 'Point';
    size: number;
    vel: Vector = new Vector(0, 0);
    acc: Vector = new Vector(0, 0 );
    grav : number = 0.2;

    oldx: number = 0;
    oldy: number = 0;


    constructor(pos: Position, size: number, type: string = 'Point') {
        super(pos.x, pos.y);
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


        if (this.type === 'static') return;


        // if (this.y < this.size) {
        //     let n = this.y;
        //     this.y = this.size  ;
        //     this.oldy =   n;
        // }
        // if (this.x > this.setting.width - this.size) {
        //     let n = this.x;
        //     this.x = this.setting.width -this.size;
        //     this.oldx = n;
        // }
        // if (this.x <   this.size ) {
        //     let n = this.x;
        //     this.x = this.size;
        //     this.oldx = n;
        // }
        // this.vel.y +=   this.grav;
        // if (this.type !== 'static') {
        //     let tempx = this.x;
        //     let tempy = this.y;
        //
        //     this.acc.y += this.grav;
        //     this.x +=  this.x - this.oldx + this.acc.x ** 2;
        //     this.y +=  this.y - this.oldy + this.acc.y ** 2;
        //
        //     this.oldx = tempx ;
        //     this.oldy = tempy;
        // };
        if (this.y  > this.setting.height - this.size ) {
            // let n = this.y;
            // let o = this.oldy;

            // this.oldy = this.y + (n-o) ;
            this.y =  this.setting.height - this.size;
            // this.oldx = this.x - (this.x-this.oldx)*0.1;
            this.vel.y = -this.vel.y;

        }
        this.vel.y += this.acc.y + this.grav;
        this.vel.x += this.acc.x ;
        this.x += this.vel.x;
        this.y += this.vel.y ;
        console.log(this.vel.y);



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
                let diff = (V1V2Length - lock)/20 ; // разница в длине
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
                        this.vel.x += V1V2_Normalize.x * diff  ;
                        this.vel.y += V1V2_Normalize.y * diff  ;

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


