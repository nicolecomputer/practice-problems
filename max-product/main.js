/**
 * Returns the product of the numbers in the array
 * @param {number[]} numbers
 * @returns {number}
 */
export function product(numbers) {
    return numbers.reduce((product, n) => product * n, 1)
}

/**
 * @param {number[]} numbers
 * @return {number}
 */
export default function maxProductSubArray(numbers) {
    let largestValue = 0;

    for (let startingPos = 0; startingPos < numbers.length; startingPos++) {
        for (let endingPos = startingPos + 1; endingPos <= numbers.length; endingPos++) {
            const subarray = numbers.slice(startingPos, endingPos)
            const value = product(subarray)

            if (value > largestValue) {
                largestValue = value
            }
        }
    }

    return largestValue
}
