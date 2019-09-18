import { Game } from "./Game";
console.log('gge');
let canvas = window.document.querySelector('canvas');
canvas.width = 700;
canvas.height = 400;
let width = canvas.width / 2;
let height = canvas.height / 2;
let game = new Game({
    canvas: canvas,
    ctx: canvas.getContext("2d"),
    width: canvas.width,
    height: canvas.height,
    // fixedPoints  : { x:width, y:0 },
    // fixedPoints  : { x:width, y:20 },
    points: [
        // { x: 100, y: 100, type : 'static' },
        { x: 100, y: 100 },
        { x: 200, y: 300 },
        { x: 400, y: 200 },
        { x: 200, y: 150 }
    ]
});
//# sourceMappingURL=index.js.map