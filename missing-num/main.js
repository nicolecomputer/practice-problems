function sum(result = 0, num) {
    return result + num
}

function sumOfFirstNNumbers(n) {
    return n * (n + 1) / 2
}

/**
 * @param {number[]} numbers
 * @return {number}
 */
export default function findMissingNumberInSequence(numbers) {
    const sumOfNumbers = numbers.reduce(sum)
    const expectedSum = sumOfFirstNNumbers(numbers.length)

    return expectedSum - sumOfNumbers
}
