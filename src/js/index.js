﻿import { Game } from "./Game";
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
        { x: 200, y: height },
        { x: 500, y: height }
    ]
});
//# sourceMappingURL=index.js.map