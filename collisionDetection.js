export function detectCollision(ball,gameobject) {

    let topOfBall = ball.position.y;
    let bottomOfBall = ball.position.y + ball.radius;

    let topOfObject = gameobject.position.y;
    let rightSideOfObject = gameobject.position.x + gameobject.width;
    let leftSideOfObject = gameobject.position.x;
    let bottomOfObject = gameobject.position.y + gameobject.height;

    if(bottomOfBall >= topOfObject && topOfBall <= bottomOfObject &&
        ball.position.x >= leftSideOfObject &&
        ball.position.x <= rightSideOfObject) {

            return true;
    }

    return false;

}