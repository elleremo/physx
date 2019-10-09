import {Vector, StructManager, Struct, Edge, Point} from "./Vectrors";

export interface ISetting  {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    width: number;
    height: number;
    points: object[];

}

export class State{
    static structManager: StructManager ;
    static setting: ISetting;
}


export class Render {

    points: Point[] = [];
    RID: number;

    constructor() {


    }

    clear (){
        State.setting.ctx.clearRect(0, 0, State.setting.width, State.setting.height);
    }

    // // addOncePoint(point: Point){
    // //     this.setting.Vpoints.push(point);
    // // }
    //
    // add() {
    //     for (let p of State.setting.points) {
    //         State.structManager.buffer.push(new Point({x: p.x, y: p.y}, 5, p.type))
    //     }
    //
    //      this.draw()
    // }


    draw() {

        State.setting.ctx.clearRect(0, 0, State.setting.width, State.setting.height);

        // if (State.structManager.buffer.length == 0) return;

        // for (let struct of State.structManager.buffer) {

            State.structManager.buffer.forEach((struct:Struct)=>{
                struct.edges.forEach((edge:Edge)=>{
                    edge.firstNode.draw();
                    edge.lastNode.draw();
                    edge.draw();
                })
            })

            // p1.move();
            //
            // p1.update();
            //
            // p1.draw();

        // }





    }

    stopAnimate(){
        cancelAnimationFrame(this.RID);
    }

    animate() {

        this.draw();
        this.RID = requestAnimationFrame(() => this.animate());

        // setTimeout(()=>this.animate(), 100)

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
