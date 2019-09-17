import {Vector, Point} from "./Vectrors";
export type TSetting = {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    width: number;
    height: number;
    points: [{}];
}

export interface ISetting {
    setting: TSetting;
}

export class Setting {
    setting : TSetting;
}



export class Render extends Setting {

    points: Point[] =[];


    constructor() {
        super();

        this.setting.ctx;

        this.add();
    }

    add() {
        for ( let p of this.setting.points){
             this.points.push(new Point({x: p.x, y: p.y}, 5))
        }

        for ( let k of this.points){
            console.log(k);
        }
    }


    draw() {

        this.setting.ctx.clearRect(0, 0, this.setting.width, this.setting.height);

        for (let  p of this.points){
            p.draw();
            p.move();
        }





    }

    animate() {
        this.draw();
        requestAnimationFrame(()=>this.animate());

    }
}
