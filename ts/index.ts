import {Game} from "./Game";


console.log('gge');

let canvas : HTMLCanvasElement = window.document.querySelector('canvas');
canvas.width= 800;
canvas.height= 600;
let width = canvas.width/2;
let height = canvas.height/2;

let game = new Game({
    canvas: canvas,
    ctx: canvas.getContext("2d"),
    width: canvas.width,
    height: canvas.height,
    // fixedPoints  : { x:width, y:0 },
    // fixedPoints  : { x:width, y:20 },
    points: [
        { x: 400, y: 50},
        { x: 350, y: 150 },
        { x: 250, y: 200 },
        { x: 250, y: 200 },


        { x: 250, y: 200 },

        { x: 250, y: 200 },


        { x: 300,  y: 300}

    ]
});


