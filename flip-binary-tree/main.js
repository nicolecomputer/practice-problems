/**
 * @typedef TreeNode
 * @prop {number} val
 * @prop {TreeNode} left
 * @prop {TreeNode} right
 */

/**
 *
 * @param {number[]} input
 * @param {number} index
 * @returns {TreeNode | null}
 */
export function deserializeTree(input, index = 0) {
    if (index >= input.length) {
        return null
    }

    return {
        val: input[index],
        left: deserializeTree(input, index * 2 + 1),
        right: deserializeTree(input, index * 2 + 2)
    }
}

/**
 *
 * @param {TreeNode | null} tree
 * @return {number[]}
 */
export function serializeTree(tree) {
    if (tree === null) {
        return null
    }

    return [tree.val]
}

/**
 * @param {TreeNode | null} root
 * @return {TreeNode | null}
 */
/**
 * @param {TreeNode | null} root
 * @return {TreeNode | null}
 */
export default function binaryTreeFlip(root) {
    if (root == null) {
        return null;
    }

    return {
        val: root.val,
        left: binaryTreeFlip(root.right),
        right: binaryTreeFlip(root.left)
    }
}
