import {Game} from "./Game";
import {Edge, Point, Struct, StructManager} from "./Vectrors";
import {State} from "./Render";

let log = console.log;

let dpr = window.devicePixelRatio;


let canvas: HTMLCanvasElement = window.document.querySelector('canvas');
let ctx: CanvasRenderingContext2D = canvas.getContext('2d');
let button = document.getElementById('button')

canvas.width = 500;
canvas.height = 500;

log(canvas.width);

const game = new Game({
    canvas: canvas,
    ctx: ctx,
    width: 500,
    height: 500,
    // fixedPoints  : { x:width, y:0 },
    // fixedPoints  : { x:width, y:20 },
    points: [
        {x: 100, y: 50},

        {x: 250, y: 200},

        {x: 400, y: 350}
    ]
});

game.render.animate();


let KeyMap = window.addEventListener("keyup", (e) => {

    switch (e.code) {
        case "Space":
            // game.render.animate();
            log('space')
            break;
        case "KeyL":
            break;
    }
});

let resize = window.addEventListener("resize", () => {


    console.log('resize');
    // canvas.width = window.innerWidth;  // УДОЛИ!
    // canvas.height = window.innerHeight;
    State.setting.width = window.innerWidth;
    State.setting.height = window.innerHeight;

    // log('width:' + window.innerWidth, 'height: ' + window.innerHeight)

    // game.setting.ctx.scale( 1/window.devicePixelRatio, 1/window.devicePixelRatio);
});
// let start_button  = button.addEventListener("click", ()=>{
//    game.render.animate();
// });
let o = {
    clickCount: 0,
    struct: undefined,
    lastPoint: undefined,

    init() {
        this.struct = new Struct('web');
        State.structManager.buffer.push(this.struct);
        o.click();
    },

    click: function () {
        canvas.addEventListener("click", (e) => {

            this.pushDot(e);
            this.clickCount++;

        });
    },

    // closure: function(p1){
    //
    //     let p2 = p1;
    //
    //     return function (p2) {
    //         return p2 + p1;
    //     }
    // },

    pushDot: function (e) {


        log('clickCount: ', this.clickCount);
        let x = e.offsetX;
        let y = e.offsetY;

        if (this.clickCount % 2 != 0) { // если нечетное (1 3 5) / второй клик
            // let edge = new Edge();
            this.lastPoint = new Point({x, y}, 1); // вторая точка
            log('второй клик')
        }


        log('первый клик');
        if (this.clickCount == 4) {
            log(this.struct)
        }
        //
        //


        let point1 = this.lastPoint || new Point({x, y}, 5); // создаем первую ноду или берем предыдущую

        log(point1);

        let point2 = new Point({x, y}, 5); // создаем вторую ноду

        let edge = new Edge(); // создаем грань
        edge.firstNode = point1;
        edge.lastNode = point2;

        this.struct.add(edge);

        canvas.addEventListener('mousemove', (e: MouseEvent) => {
            point2.x = e.offsetX;
            point2.y = e.offsetY;

        });

        // log(pushDot);
        // let edge = new Edge(point, point);
        // game.addPoint(point);

    }


    //     canvas.addEventListener("click", (e: MouseEvent) => {
    //
    // }
};

o.init();


// let s = new DeviceAcceleration();

// function accelerometerUpdate(event) {
//     var aX = event.accelerationIncludingGravity.x*10;
//     var aY = event.accelerationIncludingGravity.y*10;
//     var aZ = event.accelerationIncludingGravity.z*10;
//
//
//     document.querySelector("#button").innerHTML = aX;
//     document.querySelector("#button").innerHTML = aY;
//     document.querySelector("#button").innerHTML = aZ;
//
//     // ix aY is negative, switch rotation
//     // if (aY <0) {
//     //     aX = -aX - 180;
//     // }
//     // // document.querySelector("#block").style.transform="rotate("+aX+"deg)";
//
// }

