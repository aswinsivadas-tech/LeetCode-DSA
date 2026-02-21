/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];
 for (let ast of asteroids) {
        let alive = true;

        while (alive && stack.length > 0 && stack[stack.length - 1] > 0 && ast < 0) {
            let top = stack[stack.length - 1];

            if (Math.abs(ast) > Math.abs(top)) {
                stack.pop();
            } else if (Math.abs(ast) === Math.abs(top)) {
                stack.pop(); 
                alive = false;
            } else {

                alive = false;
            }
        }

        if (alive) {
            stack.push(ast);
        }
    }

    return stack;
};