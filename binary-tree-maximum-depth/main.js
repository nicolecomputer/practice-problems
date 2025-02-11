/**
 * @typedef TreeNode
 * @param {number} val
 * @param {TreeNode} left
 * @param {TreeNode} right
 */


/**
 *
 * @param {number[]} input
 * @param {number} index
 * @returns {TreeNode | null}
 */
export function parseTree(input, index = 0) {
    if (index >= input.length || input[index] === null) {
        return null
    }

    return {
        val: input[index],
        left: parseTree(input, index * 2 + 1),
        right: parseTree(input, index * 2 + 2)
    }
}

/**
 * @param {TreeNode | null} root
 * @return {number}
 */
export default function binaryTreeMaximumDepth(root, depth = 0) {
    if (root === null) {
        return depth
    }

    return Math.max(
        binaryTreeMaximumDepth(root.left, depth + 1),
        binaryTreeMaximumDepth(root.right, depth + 1))
}
