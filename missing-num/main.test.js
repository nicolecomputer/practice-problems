import findMissingNumberInSequence from "./main";

describe("findMissingNumberInSequence", () => {
    test("example 1", () => {
        const expected = 2
        const result = findMissingNumberInSequence([1, 3, 0])

        expect(result).toEqual(expected)
    })

    test("example 2", () => {
        const expected = 0
        const result = findMissingNumberInSequence([1])

        expect(result).toEqual(expected)
    })
})
