const brackets = {
    "}": "{",
    "]": "[",
    ")": "("
}

const marks = [
    ...Object.keys(brackets),
    ...Object.values(brackets)
]

function isOpener(str) {
    return Object.values(brackets).includes(str)
}

function isCloser(str) {
    return Object.keys(brackets).includes(str)
}

function openerFor(closer) {
    return brackets[closer]
}

/**
 * @param {string} str
 * @return {boolean}
 */
export default function isBalancedBrackets(str) {
    if (str.length === 0) {
        return true
    }

    const chars = str.split("")

    let stack = []
    for (const char of chars) {
        if (isOpener(char)) {
            stack.push(char)
        } else if (isCloser(char)) {
            if (stack.length === 0) {
                return false
            }
            if (stack[stack.length - 1] != openerFor(char)) {
                return false
            }

            stack.pop()
        }
    }

    return stack.length === 0
}
