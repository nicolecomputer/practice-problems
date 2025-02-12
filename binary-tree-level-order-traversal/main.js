/**
 * @typedef TreeNode
 * @prop {number} val
 * @prop {TreeNode | null} left
 * @prop {TreeNode | null} right
 */


/**
 *
 * @param {number[]} input
 * @param {number} index - parse root starting at this index, leave blank to start at root
 * @returns {TreeNode | null}
 */
export function parseTree(input, index = 0) {
    if (index >= input.length || input[index] == null) {
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
 * @return {number[][]}
 */
export default function binaryTreeLevelOrderTraversal(root) {
    let result = []

    let toExplore = [
        {
            level: 0,
            node: root
        }
    ]

    let current;
    while (toExplore.length > 0) {
        current = toExplore.shift()
        result[current.level] ||= []
        result[current.level].push(current.node.val)

        if (current.node.left) {
            toExplore.push({
                level: current.level + 1,
                node: current.node.left
            })
        }

        if (current.node.right) {
            toExplore.push({
                level: current.level + 1,
                node: current.node.right
            })
        }
    }


    return result
}
