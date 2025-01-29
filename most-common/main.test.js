import mostCommonElements from "./main"

describe("mostCommonElements", () => {
    test("numbers = [4,4,4,6,6,5,5,5], k = 2", () => {
        const expected = [4, 5]
        const result = mostCommonElements([4, 4, 4, 6, 6, 5, 5, 5], 2)

        expect(result).toEqual(expected)
    })

    test("numbers = [7,7,7,8,8,9,9,9], k = 3", () => {
        const expected = [7, 9, 8]
        const result = mostCommonElements([7, 7, 7, 8, 8, 9, 9, 9], 3)

        expect(result).toEqual(expected)
    })
})
