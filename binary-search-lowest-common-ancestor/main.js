/**
 * @typedef TreeNode
 * @param {number} val
 * @param {TreeNode | null} left
 * @param {TreeNode | null} right
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
 *
 * @param {TreeNode | null} root
 * @param {number} target - the number being looked for in the tree
 * @param {number[]} path
 * @returns {[boolean, TreeNode[] | null]}
 */
export function findPath(root, target, path = []) {
    if (root === null || root == undefined) {
        return [false, null]
    }

    const nextPath = [...path, root]

    if (root.val === target) {
        return [true, nextPath]
    }

    const [foundOnLeft, leftPath] = findPath(root.left, target, nextPath)

    if (foundOnLeft) {
        return [true, leftPath]
    }

    const [foundOnRight, rightPath] = findPath(root.right, target, nextPath)
    if (foundOnRight) {
        return [true, rightPath]
    }

    return [false, null]
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} a
 * @param {TreeNode} b
 * @return {TreeNode | null}
 */
export default function BSTLowestCommonAncestor(root, a, b) {
    const [foundA, pathToA] = findPath(root, a)
    const [foundB, pathToB] = findPath(root, b)

    if (!foundA || !foundB) {
        return null
    }

    for (let i = 0; i < Math.min(pathToA.length, pathToB.length); i++) {
        const currentA = pathToA[i].val
        const currentB = pathToB[i].val
        const nextA = pathToA[i + 1]?.val
        const nextB = pathToB[i + 1]?.val

        if (currentA == currentB && nextA !== nextB) {
            return pathToA[i]
        }
    }

    return null
}
