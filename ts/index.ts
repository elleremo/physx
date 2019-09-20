import {Game} from "./Game";

let dpr = window.devicePixelRatio;
console.log(dpr);
let canvas : HTMLCanvasElement = window.document.querySelector('canvas');
let ctx: CanvasRenderingContext2D = canvas.getContext('2d');
let  button = document.getElementById('button')

canvas.width= document.body.clientWidth;
canvas.height= document.body.clientHeight;



const game = new Game({
    canvas: canvas,
    ctx: ctx,
    width: canvas.width,
    height: canvas.height,
    // fixedPoints  : { x:width, y:0 },
    // fixedPoints  : { x:width, y:20 },
    points: [
        { x: 400, y: 50},
        { x: 350, y: 150 },
        { x: 250, y: 200 },

        //
        //
        // { x: 250, y: 200 },
        //
        // { x: 250, y: 200 },


        { x: 300,  y: 300}

    ]
});

game.render.animate();

 let resize  = window.addEventListener("resize", ()=>{


    console.log('resize');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    game.setting.width = window.innerWidth;
    game.setting.height = window.innerHeight;

    // game.setting.ctx.scale( 1/window.devicePixelRatio, 1/window.devicePixelRatio);
});
// let start_button  = button.addEventListener("click", ()=>{
//    game.render.animate();
// });

let pushDot = () => {canvas.addEventListener( 'click', (e) =>{
    let x = e.offsetX;
    let y = e.offsetY;



})};





let log = console.log;

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



// let OM = class  {
//     x:number;
//     y:number;
//     constructor(x,y){
//         this.x = x ;
//         this.y = y ;
//     }
//     foo () {
//         log(this.x,this.y);
//     };
