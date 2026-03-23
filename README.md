# 🧩 LeetCode-DSA

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Algorithms](https://img.shields.io/badge/Algorithms-Yes-brightgreen)
![LeetHub](https://img.shields.io/badge/LeetHub-3.0-blue)

A collection of *LeetCode problem solutions* written in *JavaScript*, showcasing clean and optimized code for practicing algorithms and data structures.  
All solutions are stored in a *single folder* for easy access.  

---

## 🚀 Features

- 📝 *All-in-One Folder* – All solutions in a single place  
- 🔗 *Problem Links* – Each file contains a reference to the original LeetCode problem  
- ⚡ *Optimized Code* – Focused on readability and efficiency  
- 📂 *Automatic Sync* – Solutions can be synced via LeetHub 3.0  

---

## 🛠️ Technologies Used

- *JavaScript*  
- *Git & GitHub*  
- *LeetHub 3.0 Chrome Extension*  

---

- All solution files are in the root folder.  
- Each file is named after the LeetCode problem for easy identification.  

---

## 🔗 Links

- GitHub Repository: [LeetCode-DSA](https://github.com/aswinsivadas-tech/LeetCode-DSA)  
- LeetCode Profile: [aswinsivadas](https://leetcode.com/u/Aswinsivadas/)

---

## 📌 How to Use

1. Browse the repository files.  
2. Open a solution file to view the code and problem reference link.  
3. Use it for *learning, reference, and practice*.  

---

*Example Code Preview*  

```javascript
// Example: Two Sum
const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) return [map.get(target - nums[i]), i];
    map.set(nums[i], i);
  }
};

<!---LeetCode Topics Start-->
# LeetCode Topics
## Tree
| Problem Name | Difficulty |
| ------- | ------- |
| [0199-binary-tree-right-side-view](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0199-binary-tree-right-side-view/) | Medium |
| [0236-lowest-common-ancestor-of-a-binary-tree](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0236-lowest-common-ancestor-of-a-binary-tree/) | Medium |
| [0450-delete-node-in-a-bst](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0450-delete-node-in-a-bst/) | Medium |
| [0700-search-in-a-binary-search-tree](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0700-search-in-a-binary-search-tree/) | Easy |
| [1161-maximum-level-sum-of-a-binary-tree](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/1161-maximum-level-sum-of-a-binary-tree/) | Medium |
## Depth-First Search
| Problem Name | Difficulty |
| ------- | ------- |
| [0199-binary-tree-right-side-view](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0199-binary-tree-right-side-view/) | Medium |
| [0236-lowest-common-ancestor-of-a-binary-tree](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0236-lowest-common-ancestor-of-a-binary-tree/) | Medium |
| [0399-evaluate-division](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0399-evaluate-division/) | Medium |
| [0547-number-of-provinces](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0547-number-of-provinces/) | Medium |
| [0841-keys-and-rooms](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0841-keys-and-rooms/) | Medium |
| [1161-maximum-level-sum-of-a-binary-tree](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/1161-maximum-level-sum-of-a-binary-tree/) | Medium |
| [1466-reorder-routes-to-make-all-paths-lead-to-the-city-zero](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/1466-reorder-routes-to-make-all-paths-lead-to-the-city-zero/) | Medium |
## Binary Tree
| Problem Name | Difficulty |
| ------- | ------- |
| [0199-binary-tree-right-side-view](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0199-binary-tree-right-side-view/) | Medium |
| [0236-lowest-common-ancestor-of-a-binary-tree](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0236-lowest-common-ancestor-of-a-binary-tree/) | Medium |
| [0450-delete-node-in-a-bst](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0450-delete-node-in-a-bst/) | Medium |
| [0700-search-in-a-binary-search-tree](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0700-search-in-a-binary-search-tree/) | Easy |
| [1161-maximum-level-sum-of-a-binary-tree](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/1161-maximum-level-sum-of-a-binary-tree/) | Medium |
## Breadth-First Search
| Problem Name | Difficulty |
| ------- | ------- |
| [0199-binary-tree-right-side-view](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0199-binary-tree-right-side-view/) | Medium |
| [0399-evaluate-division](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0399-evaluate-division/) | Medium |
| [0547-number-of-provinces](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0547-number-of-provinces/) | Medium |
| [0841-keys-and-rooms](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0841-keys-and-rooms/) | Medium |
| [0994-rotting-oranges](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0994-rotting-oranges/) | Medium |
| [1161-maximum-level-sum-of-a-binary-tree](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/1161-maximum-level-sum-of-a-binary-tree/) | Medium |
| [1466-reorder-routes-to-make-all-paths-lead-to-the-city-zero](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/1466-reorder-routes-to-make-all-paths-lead-to-the-city-zero/) | Medium |
| [1926-nearest-exit-from-entrance-in-maze](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/1926-nearest-exit-from-entrance-in-maze/) | Medium |
## Binary Search Tree
| Problem Name | Difficulty |
| ------- | ------- |
| [0162-find-peak-element](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0162-find-peak-element/) | Medium |
| [0374-guess-number-higher-or-lower](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0374-guess-number-higher-or-lower/) | Easy |
| [0450-delete-node-in-a-bst](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0450-delete-node-in-a-bst/) | Medium |
| [0700-search-in-a-binary-search-tree](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0700-search-in-a-binary-search-tree/) | Easy |
| [0875-koko-eating-bananas](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0875-koko-eating-bananas/) | Medium |
| [1268-search-suggestions-system](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/1268-search-suggestions-system/) | Medium |
| [2300-successful-pairs-of-spells-and-potions](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/2300-successful-pairs-of-spells-and-potions/) | Medium |
## Graph Theory
| Problem Name | Difficulty |
| ------- | ------- |
| [0399-evaluate-division](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0399-evaluate-division/) | Medium |
| [0547-number-of-provinces](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0547-number-of-provinces/) | Medium |
| [0841-keys-and-rooms](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0841-keys-and-rooms/) | Medium |
| [1466-reorder-routes-to-make-all-paths-lead-to-the-city-zero](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/1466-reorder-routes-to-make-all-paths-lead-to-the-city-zero/) | Medium |
## Union-Find
| Problem Name | Difficulty |
| ------- | ------- |
| [0399-evaluate-division](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0399-evaluate-division/) | Medium |
| [0547-number-of-provinces](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0547-number-of-provinces/) | Medium |
## Array
| Problem Name | Difficulty |
| ------- | ------- |
| [0136-single-number](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0136-single-number/) | Easy |
| [0162-find-peak-element](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0162-find-peak-element/) | Medium |
| [0198-house-robber](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0198-house-robber/) | Medium |
| [0215-kth-largest-element-in-an-array](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0215-kth-largest-element-in-an-array/) | Medium |
| [0216-combination-sum-iii](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0216-combination-sum-iii/) | Medium |
| [0399-evaluate-division](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0399-evaluate-division/) | Medium |
| [0435-non-overlapping-intervals](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0435-non-overlapping-intervals/) | Medium |
| [0452-minimum-number-of-arrows-to-burst-balloons](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0452-minimum-number-of-arrows-to-burst-balloons/) | Medium |
| [0714-best-time-to-buy-and-sell-stock-with-transaction-fee](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0714-best-time-to-buy-and-sell-stock-with-transaction-fee/) | Medium |
| [0746-min-cost-climbing-stairs](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0746-min-cost-climbing-stairs/) | Easy |
| [0875-koko-eating-bananas](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0875-koko-eating-bananas/) | Medium |
| [0994-rotting-oranges](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0994-rotting-oranges/) | Medium |
| [1268-search-suggestions-system](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/1268-search-suggestions-system/) | Medium |
| [1926-nearest-exit-from-entrance-in-maze](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/1926-nearest-exit-from-entrance-in-maze/) | Medium |
| [2300-successful-pairs-of-spells-and-potions](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/2300-successful-pairs-of-spells-and-potions/) | Medium |
| [2462-total-cost-to-hire-k-workers](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/2462-total-cost-to-hire-k-workers/) | Medium |
| [2542-maximum-subsequence-score](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/2542-maximum-subsequence-score/) | Medium |
## String
| Problem Name | Difficulty |
| ------- | ------- |
| [0017-letter-combinations-of-a-phone-number](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0017-letter-combinations-of-a-phone-number/) | Medium |
| [0072-edit-distance](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0072-edit-distance/) | Medium |
| [0208-implement-trie-prefix-tree](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0208-implement-trie-prefix-tree/) | Medium |
| [0399-evaluate-division](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0399-evaluate-division/) | Medium |
| [1143-longest-common-subsequence](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/1143-longest-common-subsequence/) | Medium |
| [1268-search-suggestions-system](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/1268-search-suggestions-system/) | Medium |
## Shortest Path
| Problem Name | Difficulty |
| ------- | ------- |
| [0399-evaluate-division](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0399-evaluate-division/) | Medium |
## Matrix
| Problem Name | Difficulty |
| ------- | ------- |
| [0994-rotting-oranges](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0994-rotting-oranges/) | Medium |
| [1926-nearest-exit-from-entrance-in-maze](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/1926-nearest-exit-from-entrance-in-maze/) | Medium |
## Divide and Conquer
| Problem Name | Difficulty |
| ------- | ------- |
| [0215-kth-largest-element-in-an-array](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0215-kth-largest-element-in-an-array/) | Medium |
## Sorting
| Problem Name | Difficulty |
| ------- | ------- |
| [0215-kth-largest-element-in-an-array](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0215-kth-largest-element-in-an-array/) | Medium |
| [0435-non-overlapping-intervals](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0435-non-overlapping-intervals/) | Medium |
| [0452-minimum-number-of-arrows-to-burst-balloons](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0452-minimum-number-of-arrows-to-burst-balloons/) | Medium |
| [1268-search-suggestions-system](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/1268-search-suggestions-system/) | Medium |
| [2300-successful-pairs-of-spells-and-potions](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/2300-successful-pairs-of-spells-and-potions/) | Medium |
| [2542-maximum-subsequence-score](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/2542-maximum-subsequence-score/) | Medium |
## Heap (Priority Queue)
| Problem Name | Difficulty |
| ------- | ------- |
| [0215-kth-largest-element-in-an-array](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0215-kth-largest-element-in-an-array/) | Medium |
| [1268-search-suggestions-system](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/1268-search-suggestions-system/) | Medium |
| [2336-smallest-number-in-infinite-set](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/2336-smallest-number-in-infinite-set/) | Medium |
| [2462-total-cost-to-hire-k-workers](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/2462-total-cost-to-hire-k-workers/) | Medium |
| [2542-maximum-subsequence-score](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/2542-maximum-subsequence-score/) | Medium |
## Quickselect
| Problem Name | Difficulty |
| ------- | ------- |
| [0215-kth-largest-element-in-an-array](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0215-kth-largest-element-in-an-array/) | Medium |
## Hash Table
| Problem Name | Difficulty |
| ------- | ------- |
| [0017-letter-combinations-of-a-phone-number](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0017-letter-combinations-of-a-phone-number/) | Medium |
| [0208-implement-trie-prefix-tree](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0208-implement-trie-prefix-tree/) | Medium |
| [2336-smallest-number-in-infinite-set](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/2336-smallest-number-in-infinite-set/) | Medium |
## Design
| Problem Name | Difficulty |
| ------- | ------- |
| [0208-implement-trie-prefix-tree](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0208-implement-trie-prefix-tree/) | Medium |
| [2336-smallest-number-in-infinite-set](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/2336-smallest-number-in-infinite-set/) | Medium |
## Ordered Set
| Problem Name | Difficulty |
| ------- | ------- |
| [2336-smallest-number-in-infinite-set](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/2336-smallest-number-in-infinite-set/) | Medium |
## Greedy
| Problem Name | Difficulty |
| ------- | ------- |
| [0435-non-overlapping-intervals](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0435-non-overlapping-intervals/) | Medium |
| [0452-minimum-number-of-arrows-to-burst-balloons](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0452-minimum-number-of-arrows-to-burst-balloons/) | Medium |
| [0714-best-time-to-buy-and-sell-stock-with-transaction-fee](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0714-best-time-to-buy-and-sell-stock-with-transaction-fee/) | Medium |
| [2542-maximum-subsequence-score](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/2542-maximum-subsequence-score/) | Medium |
## Two Pointers
| Problem Name | Difficulty |
| ------- | ------- |
| [2300-successful-pairs-of-spells-and-potions](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/2300-successful-pairs-of-spells-and-potions/) | Medium |
| [2462-total-cost-to-hire-k-workers](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/2462-total-cost-to-hire-k-workers/) | Medium |
## Simulation
| Problem Name | Difficulty |
| ------- | ------- |
| [2462-total-cost-to-hire-k-workers](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/2462-total-cost-to-hire-k-workers/) | Medium |
## Interactive
| Problem Name | Difficulty |
| ------- | ------- |
| [0374-guess-number-higher-or-lower](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0374-guess-number-higher-or-lower/) | Easy |
## Backtracking
| Problem Name | Difficulty |
| ------- | ------- |
| [0017-letter-combinations-of-a-phone-number](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0017-letter-combinations-of-a-phone-number/) | Medium |
| [0216-combination-sum-iii](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0216-combination-sum-iii/) | Medium |
## Math
| Problem Name | Difficulty |
| ------- | ------- |
| [0062-unique-paths](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0062-unique-paths/) | Medium |
| [1137-n-th-tribonacci-number](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/1137-n-th-tribonacci-number/) | Easy |
## Dynamic Programming
| Problem Name | Difficulty |
| ------- | ------- |
| [0062-unique-paths](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0062-unique-paths/) | Medium |
| [0072-edit-distance](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0072-edit-distance/) | Medium |
| [0198-house-robber](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0198-house-robber/) | Medium |
| [0338-counting-bits](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0338-counting-bits/) | Easy |
| [0435-non-overlapping-intervals](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0435-non-overlapping-intervals/) | Medium |
| [0714-best-time-to-buy-and-sell-stock-with-transaction-fee](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0714-best-time-to-buy-and-sell-stock-with-transaction-fee/) | Medium |
| [0746-min-cost-climbing-stairs](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0746-min-cost-climbing-stairs/) | Easy |
| [0790-domino-and-tromino-tiling](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0790-domino-and-tromino-tiling/) | Medium |
| [1137-n-th-tribonacci-number](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/1137-n-th-tribonacci-number/) | Easy |
| [1143-longest-common-subsequence](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/1143-longest-common-subsequence/) | Medium |
## Memoization
| Problem Name | Difficulty |
| ------- | ------- |
| [1137-n-th-tribonacci-number](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/1137-n-th-tribonacci-number/) | Easy |
## Combinatorics
| Problem Name | Difficulty |
| ------- | ------- |
| [0062-unique-paths](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0062-unique-paths/) | Medium |
## Bit Manipulation
| Problem Name | Difficulty |
| ------- | ------- |
| [0136-single-number](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0136-single-number/) | Easy |
| [0338-counting-bits](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0338-counting-bits/) | Easy |
| [1318-minimum-flips-to-make-a-or-b-equal-to-c](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/1318-minimum-flips-to-make-a-or-b-equal-to-c/) | Medium |
## Trie
| Problem Name | Difficulty |
| ------- | ------- |
| [0208-implement-trie-prefix-tree](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0208-implement-trie-prefix-tree/) | Medium |
| [1268-search-suggestions-system](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/1268-search-suggestions-system/) | Medium |
<!---LeetCode Topics End-->