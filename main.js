import Game from './game.js'


let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
let lastTime = 0;
game.start();

function gameLoop(timestamp) {

    let dt = (timestamp - lastTime) / 1000 ;    
    lastTime = timestamp;// - lastTime;
    
    game.update(dt);
    game.draw(ctx);
    requestAnimationFrame(gameLoop);

}

requestAnimationFrame(gameLoop);

