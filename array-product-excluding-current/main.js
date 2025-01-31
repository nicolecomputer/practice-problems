/**
 *
 * @param {number[]} numbers
 * @returns {number} - The product of all of the numbers
 */
function product(numbers) {
    return numbers.reduce((p, n) => p * n, 1)
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
export default function arrayProductExcludingCurrent(numbers) {
    return numbers.map((_, i, n) => {
        const allExceptThis = [...n.slice(0, i), ...n.slice(i + 1)]
        return product(allExceptThis)
    })
}
