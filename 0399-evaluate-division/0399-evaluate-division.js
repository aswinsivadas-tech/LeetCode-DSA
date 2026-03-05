/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
 let graph = {};
    for (let i = 0; i < equations.length; i++) {
        let [a, b] = equations[i];
        let val = values[i];

        if (!graph[a]) graph[a] = [];
        if (!graph[b]) graph[b] = [];

        graph[a].push([b, val]);
        graph[b].push([a, 1 / val]);
    }

    function dfs(curr, target, visited) {
        if (curr === target) return 1;

        visited.add(curr);

        for (let [next, weight] of graph[curr]) {
            if (!visited.has(next)) {
                let result = dfs(next, target, visited);
                if (result !== -1) {
                    return result * weight;
                }
            }
        }

        return -1;
    }

    let ans = [];

    for (let [a, b] of queries) {
        if (!graph[a] || !graph[b]) {
            ans.push(-1);
        } else {
            let visited = new Set();
            ans.push(dfs(a, b, visited));
        }
    }

    return ans;
};