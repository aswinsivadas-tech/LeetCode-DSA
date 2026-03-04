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
| [1161-maximum-level-sum-of-a-binary-tree](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/1161-maximum-level-sum-of-a-binary-tree/) | Medium |
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
| [1161-maximum-level-sum-of-a-binary-tree](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/1161-maximum-level-sum-of-a-binary-tree/) | Medium |
## Binary Search Tree
| Problem Name | Difficulty |
| ------- | ------- |
| [0450-delete-node-in-a-bst](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0450-delete-node-in-a-bst/) | Medium |
| [0700-search-in-a-binary-search-tree](https://github.com/aswinsivadas-tech/LeetCode-DSA/tree/main/0700-search-in-a-binary-search-tree/) | Easy |
<!---LeetCode Topics End-->