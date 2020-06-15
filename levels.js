import Brick from './brick.js'

export const level1 = [

    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,0,1,1,0,1,1,1]

];

export function buildLevel(game) {

    let bricks = [];

level1.forEach((row, rowIndex) => {

    row.forEach( (brick, brickIndex) => {

        if(brick === 1) {

            bricks.push( new Brick(game, brickIndex * 80, rowIndex * 20));

        }

    });

});

return bricks;

}