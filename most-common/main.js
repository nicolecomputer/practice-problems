function mostSeen(frequencyMap) {
    let mostSeenValue = 0;
    let mostSeenCount = 0;

    for (const num in frequencyMap) {
        if (frequencyMap[num] > mostSeenCount) {
            mostSeenCount = frequencyMap[num]
            mostSeenValue = num
        }
    }

    return mostSeenValue
}

/**
 * @param {number[]} numbers
 * @param {number} k
 * @return {number[]}
 */
export default function mostCommonElements(numbers, k) {
    let seen = {}

    for (const n of numbers) {
        seen[n] = (seen[n] ?? 0) + 1
    }

    let values = [];
    for (let i = 0; i < k; i++) {
        const most = mostSeen(seen)
        values.push(parseInt(most))
        delete seen[most]
    }


    return values
}
