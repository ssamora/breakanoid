import Game from './game.js'
import {detectCollision} from './collisionDetection.js'
export default class Ball {

    constructor(game) {

        this.game = game;
        this.radius = 5;
        this.position = {

            x: game.width / 2 - this.radius,
            y: game.height / 2 - this.radius,
        };
        this.constSpeed = 0.09;
        this.speed = {
            x: this.constSpeed,
            y: this.constSpeed
        }
    }

    draw(ctx) {
        ctx.fillStyle='hsl("red", 100%, 50%)'
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2*Math.PI);
        ctx.closePath();
        ctx.fill();
    }

    isMovingRight() {
        return this.speed.x > 0;
    }

    isMovingLeft() {
        return this.speed.x < 0;
    }

    isMovingUp() {
        return this.speed.y < 0;
    }

    isMovingDown() {
        return this.speed.y > 0;
    }



    update(dt) {

        if(this.position.x <= 0 + this.radius || this.position.x + this.radius >= this.game.width) {
            this.speed.x = -this.speed.x;
        }

        if(this.position.y <= 0 + this.radius || this.position.y + this.radius >= this.game.height ) {
            this.speed.y = -this.speed.y;
        }

        this.position.x += this.speed.x * dt;
        this.position.y += this.speed.y * dt;

        if(detectCollision(this, this.game.paddle)) {
            this.speed.y = -this.constSpeed;
        }
    }
}