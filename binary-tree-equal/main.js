/**
 * @typedef TreeNode
 * @prop {number} value
 * @prop {TreeNode} left
 * @prop {TreeNode} right
 * /


/**
 *
 * @param {number[]} input
 * @returns {TreeNode | null}
 */
export function parseLevelOrder(input, index = 0) {
    if (input.length === 0 || index >= input.length) {
        return null
    }

    return {
        value: input[index],
        left: parseLevelOrder(input, 2 * index + 1),
        right: parseLevelOrder(input, 2 * index + 2)
    }
}


/**
 * @param {TreeNode | null} a
 * @param {TreeNode | null} b
 * @return {boolean}
 */
export default function binaryTreeEqual(a, b) {
    if (a === null && b === null) {
        return true
    } else if (a === null || b === null) {
        return false
    } else if (a.value != b.value) {
        return false
    }

    return binaryTreeEqual(a.left, b.left) &&
        binaryTreeEqual(a.right, b.right)
}
