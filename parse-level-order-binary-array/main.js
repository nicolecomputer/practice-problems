/**
 * @typedef TreeNode
 * @prop {number} value
 * @prop {TreeNode} left
 * @prop {TreeNode} right
 */


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
 *
 * @param {number[]} input
 * @returns {number}
 */
export function depth(input) {
    let depth = 0
    let currentIndex = 0

    while (currentIndex < input.length) {
        currentIndex += Math.pow(2, depth)
        depth += 1
    }

    return depth
}
