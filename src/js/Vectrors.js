import { State } from "./Render";
export class Vector {
    constructor(x, y) {
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
export class StructManager {
    constructor() {
        this.structs = [];
        this.buffer = [];
    }
    addBuffer() {
        for (let struct of this.buffer) {
            this.structs.push(struct);
        }
        console.log('cleat buffer');
        this.buffer = [];
    }
}
export class Struct {
    constructor(type) {
        this.points = [];
        this.edges = [];
        this.type = 'web' || 'line' || 'static';
        this.type = type;
        return this;
    }
    move() {
        this.points.forEach((point) => {
            point.move();
        });
    }
    solve() {
        this.edges.forEach((edge) => {
            edge.solve();
        });
    }
    draw() {
        this.edges.forEach((edge) => {
            edge.draw();
        });
        this.points.forEach((point) => {
            point.draw();
        });
    }
    addPoint(x, y) {
        this.points.push(new Point({ x, y }, 1)); // добавляем точку
        if (this.type == 'web')
            this.generateWebEdge();
        if (this.type == 'line')
            this.generateLineEdge();
    }
    generateWebEdge() {
        let lastPointIndex = this.points.length - 1;
        let lastPoint = this.points[lastPointIndex];
        if (lastPointIndex <= 0)
            return;
        for (let point of this.points) {
            if (point == lastPoint)
                continue;
            let edge = new Edge();
            edge.firstNode = point; //
            edge.lastNode = lastPoint; //
            edge.saveLength();
            this.addEdge(edge);
        }
    }
    generateLineEdge() {
        let countPoints = this.points.length;
        // let countEdges = this.edges.length;
        if (countPoints <= 1)
            return; //
        console.log(!!countPoints);
        let edge = new Edge();
        edge.lastNode = this.points[countPoints - 1]; // последняя нода
        edge.firstNode = this.points[countPoints - 2]; // предпоследняя нода
        edge.saveLength();
        this.addEdge(edge);
    }
    addEdge(edge) {
        this.edges.push(edge);
        return this;
    }
}
export class Edge {
    constructor() {
        //
        // this.firstNode = first;
        // this.lastNode = last;
        // this.baseLength = Vector.distanceAB(first, last);
    }
    solve() {
        let V1V2 = Vector.vectorAB(this.firstNode, this.lastNode); // вектор между вершинами
        let V1V2_Normalize = V1V2.normalize(); // нормализованный вектор
        let V1V2Length = V1V2.length; // дистаниця
        let diff = (V1V2Length - this.baseLength) / 2;
        if (this.firstNode.type !== 'static') {
            this.firstNode.x += V1V2_Normalize.x * diff;
            this.firstNode.y += V1V2_Normalize.y * diff;
        }
        if (this.lastNode.type !== 'static') {
            this.lastNode.x -= V1V2_Normalize.x * diff;
            this.lastNode.y -= V1V2_Normalize.y * diff;
        }
    }
    saveLength() {
        this.baseLength = Vector.distanceAB(this.firstNode, this.lastNode);
    }
    draw() {
        State.setting.ctx.beginPath();
        State.setting.ctx.moveTo(this.firstNode.x, this.firstNode.y);
        State.setting.ctx.lineTo(this.lastNode.x, this.lastNode.y);
        State.setting.ctx.strokeStyle = 'rgba(81,184,255,0.76)';
        State.setting.ctx.lineWidth = 1.5;
        State.setting.ctx.stroke();
    }
}
export class Point extends Vector {
    constructor(pos, size, type = 'Point') {
        super(pos.x, pos.y);
        this.type = 'Point';
        this.vel = new Vector(0, 0);
        this.acc = new Vector(0, 0);
        this.grav = 0.5;
        this.bounce = 1.8;
        this.oldx = 0;
        this.oldy = 0;
        // this.pos = new Vector();
        this.size = size;
        this.type = type;
        this.oldx = this.x;
        this.oldy = this.y;
        this.draw();
        // this.vel.x = Math.random()*2 ;
        // this.vel.y = Math.random()*2 ;
    }
    move() {
        if (this.type === 'static')
            return;
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
        // this.vel.y += this.acc.y + this.grav;
        // this.vel.x += this.acc.x ;
        let x = this.x;
        let y = this.y;
        this.x += this.x - this.oldx + this.acc.x ** 2;
        this.y += this.y - this.oldy + this.acc.y ** 2 + this.grav ** 2;
        this.oldx = x;
        this.oldy = y;
        if (this.y >= State.setting.height - this.size) {
            let n = this.y;
            let o = this.oldy;
            this.y = State.setting.height - this.size;
            this.oldy = this.y + (n - o);
            // this.oldx = this.x - (this.x-this.oldx)*0.1;
            // this.vel.y = -this.vel.y;
        }
    }
    update() {
        let lock = 100;
        /* for (let p2 of State.setting.Vpoints) {
             // if(p2.type === 'static') continue;
             if (this !== p2) {
                 let V1V2 = Vector.vectorAB(this, p2); // вектор между вершинами
                 let V1V2_Normalize = V1V2.normalize(); // нормализованный вектор
                 let V1V2Length = V1V2.length; // дистаниця
                 let diff = (V1V2Length - lock) / 20;

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

         }*/
    }
    draw() {
        State.setting.ctx.beginPath();
        State.setting.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
        State.setting.ctx.fillStyle = '#eee';
        State.setting.ctx.fill();
        // this.setting.ctx.lineWidth = -.0;
        // this.setting.ctx.strokeStyle = '#000000';
        // this.setting.ctx.stroke();
    }
}
//# sourceMappingURL=Vectrors.js.map