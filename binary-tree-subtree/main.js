/**
 * @typedef TreeNode
 * @prop {number} val
 * @prop {TreeNode} left
 * @prop {TreeNode} right
 */


/**
 * @param {number[]} input
 * @returns {TreeNode | null}
 */
export function parseTree(input, index = 0) {
    if (index >= input.length || input[index] === null) {
        return null
    }

    return {
        val: input[index],
        left: parseTree(input, 2 * index + 1),
        right: parseTree(input, 2 * index + 2)
    }
}

/**
 *
 * @param {TreeNode | null} t
 * @param {TreeNode | null} q
 * @returns {boolean}
 */
export function sameTree(t, q) {
    if (t === null && q === null) {
        return true
    }

    if (t === null || q === null) {
        return false
    }

    return t.val === q.val && sameTree(t.left, q.left) && sameTree(t.right, q.right)
}

/**
 * @param {TreeNode | null} root
 * @param {TreeNode | null} subRoot
 * @return {boolean}
 */
export default function binaryTreeSubtree(root, subRoot) {
    if (subRoot === null) {
        return true
    }

    if (root === null) {
        return false
    }

    if (sameTree(root, subRoot)) {
        return true
    }

    return binaryTreeSubtree(root.left, subRoot) ||
        binaryTreeSubtree(root.right, subRoot)
}
