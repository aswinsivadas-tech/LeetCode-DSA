/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {

    let m = maze.length;
    let n = maze[0].length;
    let queue = [[entrance[0], entrance[1], 0]];
    let dirs = [[1,0],[-1,0],[0,1],[0,-1]];

    maze[entrance[0]][entrance[1]] = '+';

    while(queue.length){

        let [r,c,steps] = queue.shift();

        for(let [dr,dc] of dirs){

            let nr = r + dr;
            let nc = c + dc;

            if(nr<0 || nc<0 || nr>=m || nc>=n) continue;
            if(maze[nr][nc] === '+') continue;
            if(nr===0 || nc===0 || nr===m-1 || nc===n-1){
                return steps + 1;
            }

            maze[nr][nc] = '+';
            queue.push([nr,nc,steps+1]);
        }
    }

    return -1;
};