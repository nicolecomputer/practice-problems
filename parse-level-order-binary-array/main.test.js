import { parseLevelOrder, depth } from "./main"

describe("parseLevelOrder", () => {
    it("returns null for an empty array", () => {
        const expected = null
        const result = parseLevelOrder([])

        expect(result).toEqual(expected)
    })

    it("returns a TreeNode for a single item", () => {
        const expected = { value: 1, left: null, right: null }
        const result = parseLevelOrder([1])

        expect(result).toEqual(expected)
    })

    it("fills out a tree with a single level", () => {
        const expected = {
            value: 1,
            left: {
                value: 2,
                left: null,
                right: null
            },
            right: {
                value: 3,
                left: null,
                right: null
            }
        }
        const result = parseLevelOrder([1, 2, 3])

        expect(result).toEqual(expected)
    })

    it("fills out a complicated tree", () => {
        const expected = {
            value: 12,
            left: {
                value: 8,
                left: {
                    value: 3,
                    left: null,
                    right: null
                },
                right: {
                    value: 5,
                    left: null,
                    right: null
                }
            },
            right: {
                value: 6,
                left: null,
                right: null
            }
        }
        const result = parseLevelOrder([12, 8, 6, 3, 5])

        expect(result).toEqual(expected)


    })
})

describe("depth", () => {
    it("returns 0 for an empty array", () => {
        const expected = 0
        const input = []
        const result = depth(input)

        expect(result).toEqual(expected)
    })

    it("returns 1 for an array with 1 item", () => {
        const expected = 1
        const input = [1]
        const result = depth(input)

        expect(result).toEqual(expected)
    })

    it("returns 2 for an array with 2 items", () => {
        const expected = 2
        const input = [1, 2]
        const result = depth(input)

        expect(result).toEqual(expected)
    })

    it("returns 2 for an array with 3 items", () => {
        const expected = 2
        const input = [1, 2, 3]
        const result = depth(input)

        expect(result).toEqual(expected)
    })

    it("returns 3 for an array with 4 items", () => {
        const expected = 3
        const input = [1, 2, 3, 4]
        const result = depth(input)

        expect(result).toEqual(expected)
    })

    it("returns 4 for an array with 8 items", () => {
        const expected = 4
        const input = [1, 2, 3, 4, 5, 6, 7, 8]
        const result = depth(input)

        expect(result).toEqual(expected)
    })

})
