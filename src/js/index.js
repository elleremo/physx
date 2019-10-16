import { Game } from "./Game";
import { Struct } from "./Vectrors";
import { State } from "./Render";
let log = console.log;
let dpr = window.devicePixelRatio;
let canvas = window.document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let button = document.getElementById('button');
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
canvas.width = window.innerWidth; // УДОЛИ!
canvas.height = window.innerHeight;
State.setting.width = window.innerWidth;
State.setting.height = window.innerHeight;
game.render.animate();
button.addEventListener("click", (e) => {
    log('button');
    State.structManager.addBuffer();
});
let KeyMap = window.addEventListener("keyup", (e) => {
    switch (e.code) {
        case "Space":
            // State.structManager.buffer[0].points[0].type = 'static';
            State.structManager.addBuffer();
            log('space');
            // log(State);
            break;
        case "KeyL":
            break;
    }
});
let resize = window.addEventListener("resize", () => {
    canvas.width = window.innerWidth; // УДОЛИ!
    canvas.height = window.innerHeight;
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
    init() {
        this.struct = new Struct('web');
        // this.struct = new Struct('line');
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
        // ! Не забудь что при обработке движения Edge должны обрабатывать только восстановление расстояний но не
        // движение точек!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        log('clickCount: ', this.clickCount);
        let x = e.offsetX;
        let y = e.offsetY;
        this.struct.addPoint(x, y);
        // if (this.clickCount >4) log(this.struct);
        // if (this.clickCount % 2 == 0) { // если первый клик
        //     edge = new Edge(); // создаем грань
        //     edge.firstNode = new Point({x, y}, 5);
        //
        // }
        //
        // if (this.clickCount % 2 != 0) { // если второй клик
        //     edge = new Edge(); // создаем грань
        //     edge.firstNode = new Point({x, y}, 5);
        // }
        //
        //
        // edge.firstNode = point1;
        //
        // this.lastEdge = edge;
        //
        // canvas.addEventListener('mousemove', (e: MouseEvent) => {
        //     point.x = e.offsetX;
        //     point.y = e.offsetY;
        // });
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
//# sourceMappingURL=index.js.map