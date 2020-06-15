import Game from './game.js'
export default class Paddle {
    constructor(game) {

        this.width = 150;
        this.height = 20;

        this.gameWidth = game.width;
        this.gameHeight = game.height;
        this.speed = 0;
        this.constSpeed = 190;

        this.position = {
            x: this.gameWidth / 2 - this.width / 2,
            y: this.gameHeight - this.height -10,
        }

    }

    draw(ctx) {
        ctx.fillStyle='blue';
        //ctx.shadowBlur = 0;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    moveLeft() {

        this.speed = -this.constSpeed;
    }

    moveRight() {

        this.speed = this.constSpeed;
    }

    stop() {
        this.speed = 0;
    }

    isMovingRight() {
        return this.speed > 0;
    }

    isMovingLeft() {
        return this.speed < 0;
    }

    update(dt) {

        this.position.x += this.speed * dt;

        if(this.position.x + this.width >= this.gameWidth ) {
            this.position.x = this.gameWidth - this.width;
        } 
        else if ( this.position.x <= 0 ) {
            this.position.x = 0;
        }

        


        
    }
}