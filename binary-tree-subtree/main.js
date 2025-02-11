/**
 * @typedef TreeNode
 * @prop {number} value
 * @prop {TreeNode} left
 * @prop {TreeNode} right
 */

/**
 * @param {TreeNode | null} root
 * @param {TreeNode | null} subRoot
 * @return {boolean}
 */
export default function binaryTreeSubtree(root, subRoot) {
    if (root[0] === subRoot[0])
        return false
}

export function walkTree(tree, index = 0) {
    const root = tree[index]

    const leftPos = 2 * index + 1
    const left = tree[leftPos]

    const rightPos = 2 * index + 2
    const right = tree[rightPos]

    console.log(root, left, right)

    if (left !== undefined) {
        walkTree(tree, leftPos)
    }

    if (right !== undefined) {
        walkTree(tree, rightPos)
    }
}

export function contains(tree, index = 0, subtree, subtreeIndex = 0) {
    const root = tree[index]

    const leftPos = 2 * index + 1
    const left = tree[leftPos]

    const rightPos = 2 * index + 2
    const right = tree[rightPos]

    console.log(root, left, right)

    if (left !== undefined) {
        walkTree(tree, leftPos)
    }

    if (right !== undefined) {
        walkTree(tree, rightPos)
    }
}
