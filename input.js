export default class InputHandler {

    constructor(paddle) {

        const LEFT_KEY = 37;
        const RIGHT_KEY = 39;

        document.addEventListener('keydown', (event) => {

            switch(event.keyCode) {
                case LEFT_KEY:
                    paddle.moveLeft();
                    break;
                case RIGHT_KEY:
                    paddle.moveRight();
                    break;
            }

        });

        document.addEventListener('keyup', (event) => {

            switch(event.keyCode) {
                case LEFT_KEY:
                    if(paddle.isMovingLeft()) {
                        paddle.stop();
                    }
                    break;
                case RIGHT_KEY:
                    if(paddle.isMovingRight()) {
                        paddle.stop();
                    }
                    break;
            }

        });
    }

}