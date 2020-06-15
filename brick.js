export default class Brick {

    constructor(game, x, y) {


        this.img = document.getElementById("brick");
        this.game = game;
        this.position = {
            x: x,
            y: y
        }
        this.width = 80;
        this.height = 20;
    }

    update(dt) {

    }

    draw(ctx) {
        ctx.fillStyle='black';
        ctx.strokeRect(this.position.x, this.position.y, this.width, this.height);
        //ctx.shadowBlur = 10;
        //ctx.shadowColor = "black";
        ctx.fillStyle='orange';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        ctx.shadowBlur = 0;
    }
}