import {Point, Vector} from "./Vectrors";

export class Setting {
}

export class Render extends Setting {
    constructor() {
        super();
        this.points = [];
        this.setting.ctx.shadowColor = 'rgba(0,0,0,0.2)';
        this.setting.ctx.shadowBlur = 10;
        this.add();
    }

    add() {
        for (let p of this.setting.points) {
            this.points.push(new Point({x: p.x, y: p.y}, 5));
        }
        for (let k of this.points) {
            console.log(k);
        }
    }

    draw() {
        this.setting.ctx.clearRect(0, 0, this.setting.width, this.setting.height);



        let lock = 10;
        let power = 1.5;
        for (let p1 of this.points) {

            for (let p2 of this.points) {

                if (p1 !== p2) {
                    // let distance = Vector.pointDistance(p1, p2); // дистаниця
                    let fVector = Vector.vectorAB(p1, p2); // вектор силы
                    let diff =    lock ; // относительное растяжение стержня (+)

                    // console.log ("distance: ",distance );
                    // console.log ("fVector: ", fVector);
                    // console.log ("diff: ", diff);
                    // console.log ('res:  = ', (fVector.x * diff * power));
                    // console.log ('accc:  = ', p1.acc.x);

                    p1.acc.x = (   fVector.x * diff * lock)/1000;
                    p1.acc.y = (  fVector.y * diff * lock)/1000;
                    // p1.acc.y = fVector.y + diff * power;
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
                    this.setting.ctx.strokeStyle = '#ff16be';

                    this.setting.ctx.lineWidth = 1.5;
                    this.setting.ctx.stroke();
                }
            }

        }
    }

    animate() {
        this.draw();

        let z = requestAnimationFrame(() => this.animate());

        // setTimeout()
    }
}

//# sourceMappingURL=Render.js.map