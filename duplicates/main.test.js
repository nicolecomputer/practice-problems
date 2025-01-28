import { hasDuplicates } from "./main";

describe("hasDuplicates", () => {
    it("returns false for an empty array", () => {
        const expected = false
        const result = hasDuplicates([])

        expect(expected).toEqual(result)
    })

    it("returns false for a unique array", () => {
        const expected = false
        const result = hasDuplicates([5, 7, 1, 3])

        expect(expected).toEqual(result)
    })

    it('returns true for an array containing duplicates', () => {
        const expected = true
        const result = hasDuplicates([10, 7, 0, 0, 9])

        expect(expected).toEqual(result)
    })

    it('returns true for a complicated array containing duplicates', () => {
        const expected = true
        const result = hasDuplicates([3, 2, 6, 5, 0, 3, 10, 3, 10, 5])

        expect(expected).toEqual(result)
    })
})
