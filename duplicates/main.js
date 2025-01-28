/**
 * @param {number[]} numbers
 * @return {boolean}
 */
export default function findDuplicates(numbers) {
    let seen = {}

    for (const num of numbers) {
        if (seen[num]) {
            return true
        }
        seen[num] = true
    }
    return false
}

export const hasDuplicates = findDuplicates
