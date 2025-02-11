/**
 * @param {number[]} numbers
 * @return {boolean}
 */
export default function arrayReachableEnd(numbers) {
    let currentIndex = 0;
    let moves = numbers[currentIndex];

    while (moves > 0 && currentIndex < numbers.length) {
        currentIndex += moves;
        moves = numbers[currentIndex];
    }

    console.log(currentIndex)
    return currentIndex >= numbers.length
}
