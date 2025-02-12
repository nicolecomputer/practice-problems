/**
 * @typedef TreeNode
 * @prop {number} val
 * @prop {TreeNode | null} left
 * @prop {TreeNode | null} right
 */


// function insertIntoArray(root) {
//     result[index] = root.val
//     something(root.left, Math.pow(2, level + 1) +
// }
/**
 * @param {TreeNode | null} root
 * @return {string}
 */
export function serializeBinaryTree(root) {
    if (root === null) {
        return JSON.stringify([])
    }

    let queue = [root]
    let values = []

    let current;
    while (queue.findIndex(n => n != null) != -1) {
        current = queue.shift()

        if (current !== null) {
            values.push(current.val)
        } else {
            values.push(null)
        }

        queue.push(current?.left ?? null, current?.right ?? null)
    }

    return JSON.stringify(values)
}


function deserializeBinaryTreeHelper(data, index = 0) {
    if (index >= data.length || data[index] === null) {
        return null
    }

    return {
        val: data[index],
        left: deserializeBinaryTreeHelper(data, 2 * index + 1),
        right: deserializeBinaryTreeHelper(data, 2 * index + 2)
    }
}

/**
 * @param {string} data
 * @return {TreeNode | null}
 */
export function deserializeBinaryTree(data) {
    let parsed = JSON.parse(data)
    return deserializeBinaryTreeHelper(parsed)
}

