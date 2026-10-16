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
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    const result = [];
    const queue = [root];
    let head = 0;
    let leftToRight = true;
    while(head < queue.length) {
        const levelSize = queue.length - head;
        const level = new Array(levelSize);
        for (let i = 0 ; i <levelSize ;i++) {
            const node = queue[head++];
            const index = leftToRight ? i : levelSize - 1 - i;
            level[index] = node.val;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);

        }
        result.push(level);
        leftToRight =  !leftToRight;
    }
    return result;
};