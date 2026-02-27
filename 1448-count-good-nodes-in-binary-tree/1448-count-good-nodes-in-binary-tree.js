var goodNodes = function(root) {
    let count = 0;

    function dfs(node, maxSoFar) {
        if (!node) return;

        if (node.val >= maxSoFar) {
            count++;
        }
        let newMax = Math.max(maxSoFar, node.val);
        dfs(node.left, newMax);
        dfs(node.right, newMax);
    }

    dfs(root, root.val);
    return count;
};