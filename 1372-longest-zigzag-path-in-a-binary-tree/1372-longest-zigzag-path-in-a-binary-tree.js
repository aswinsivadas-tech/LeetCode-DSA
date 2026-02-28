var longestZigZag = function(root) {
    let maxLen = 0;

    function dfs(node) {
        if (!node) return [-1, -1]; 


        const [leftFromLeft, rightFromLeft] = dfs(node.left);
        const [leftFromRight, rightFromRight] = dfs(node.right);
        const leftZig = rightFromLeft + 1;
        const rightZig = leftFromRight + 1;

        maxLen = Math.max(maxLen, leftZig, rightZig);

        return [leftZig, rightZig];
    }

    dfs(root);
    return maxLen;
};