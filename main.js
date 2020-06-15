import Game from './game.js'


let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
let lastTime = 0;
game.start();

function gameLoop(timestamp) {

    let dt = (timestamp - lastTime) ;    
    

    let fps = Math.round(1 / dt);

    if( dt > 1000/60 ) {
        lastTime = timestamp - ((timestamp - lastTime)%(1000/60));
        game.update(dt);
        
        game.draw(ctx);
        
    }

    requestAnimationFrame(gameLoop);

    
    
    if(fps == 60)
        ctx.fillText("FPS: " + fps, 10, 90);
    else
        ctx.fillText("FPS: " + fps, 10, 180);

    
}

requestAnimationFrame(gameLoop);

