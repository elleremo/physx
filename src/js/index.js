import { Game } from "./Game";
import { Edge, Point, StructManager } from "./Vectrors";
import { State } from "./Render";
let log = console.log;
let dpr = window.devicePixelRatio;
let canvas = window.document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let button = document.getElementById('button');
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
        { x: 100, y: 50 },
        { x: 250, y: 200 },
        { x: 400, y: 350 }
    ]
});
game.render.animate();
let KeyMap = window.addEventListener("keyup", (e) => {
    switch (e.code) {
        case "Space":
            game.render.animate();
            break;
    }
});
let resize = window.addEventListener("resize", () => {
    console.log('resize');
    // canvas.width = window.innerWidth;  // УДОЛИ!
    // canvas.height = window.innerHeight;
    State.setting.width = window.innerWidth;
    State.setting.height = window.innerHeight;
    log('width:' + window.innerWidth, 'height: ' + window.innerHeight);
    // game.setting.ctx.scale( 1/window.devicePixelRatio, 1/window.devicePixelRatio);
});
// let start_button  = button.addEventListener("click", ()=>{
//    game.render.animate();
// });
let pushDot = canvas.addEventListener("click", (e) => {
    let x = e.offsetX;
    let y = e.offsetY;
    StructManager;
    let point1 = new Point({ x, y }, 5);
    let point2 = new Point({ x, y }, 5);
    let edge = new Edge(point1, point2);
    canvas.addEventListener('mousemove', (e) => {
        point2.x = e.layerX;
        point2.y = e.layerY;
        edge.draw();
    });
    // let edge = new Edge(point, point);
    // game.addPoint(point);
});
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
//# sourceMappingURL=index.js.map