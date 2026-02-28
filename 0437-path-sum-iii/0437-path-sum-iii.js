var pathSum = function(root, targetSum) {
    const map = new Map();
    map.set(0, 1);

    function dfs(node, currentSum) {
        if (!node) return 0;

        currentSum += node.val;

        let count = map.get(currentSum - targetSum) || 0;
        map.set(currentSum, (map.get(currentSum) || 0) + 1);
        count += dfs(node.left, currentSum);
        count += dfs(node.right, currentSum);
        map.set(currentSum, map.get(currentSum) - 1);

        return count;
    }

    return dfs(root, 0);
};