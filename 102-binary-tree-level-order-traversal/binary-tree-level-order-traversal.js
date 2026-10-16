/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    const queue = [root];
    const result = [];
    let head = 0;
     while (head < queue.length){
        const levelSize = queue.length - head ;
        const level = [];
        for (let i = 0; i < levelSize; i++) {
            const node = queue[head++];
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);

        }
        result.push(level);
     }
     return result;
    };