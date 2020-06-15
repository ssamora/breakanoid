import Paddle from './paddle.js'
import Ball from './ball.js'
import InputHandler from './input.js'
import { buildLevel } from './levels.js';

export default class Game {

    constructor(gameWidth, gameHeight) {

        this.width = gameWidth;
        this.height = gameHeight;
    }

    start() {
        this.paddle = new Paddle(this);
        new InputHandler(this.paddle);
        this.gameObjects = [this.paddle, new Ball(this)].concat(buildLevel(this));
        new InputHandler(this.paddle);
    }

    draw(ctx) {
        ctx.clearRect( 0, 0, this.width, this.height );
        this.gameObjects.forEach((object) => object.draw(ctx) );
    }

    update(dt) {
        this.gameObjects.forEach((object) => object.update(dt) );
    }
}