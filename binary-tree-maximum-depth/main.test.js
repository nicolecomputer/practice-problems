import binaryTreeMaximumDepth, { parseTree } from "./main"

describe("binaryTreeMaximumDepth", () => {
    test("depth 0", () => {
        const expected = 0;
        const input = []
        const result = binaryTreeMaximumDepth(parseTree(input))

        expect(result).toEqual(expected);
    })

    test("depth 3", () => {
        const expected = 3;
        const input = [1, 2, 3, 4, 5, 6, 7]
        const result = binaryTreeMaximumDepth(parseTree(input))

        expect(result).toEqual(expected);
    })

    test("depth 2", () => {
        const expected = 2;
        const input = [1, null, 2]
        const result = binaryTreeMaximumDepth(parseTree(input))

        expect(result).toEqual(expected);
    })

    test("depth 3 with nulls", () => {
        const expected = 3;
        const input = [10, 5, 15, null, null, 12, 20]
        const result = binaryTreeMaximumDepth(parseTree(input))

        expect(result).toEqual(expected);
    })
})

describe("parseTree", () => {
    it("parses an empty tree", () => {
        const expected = null;
        const result = parseTree([])

        expect(result).toEqual(expected);
    })

    it("parses a tree with 1 element", () => {
        const expected = {
            val: 1,
            left: null,
            right: null
        }
        const result = parseTree([1])

        expect(result).toEqual(expected);
    })

    it("parses a tree with 3 elements", () => {
        const expected = {
            val: 1,
            left: {
                val: 2,
                left: null,
                right: null
            },
            right: {
                val: 3,
                left: null,
                right: null
            }
        }
        const result = parseTree([1, 2, 3])

        expect(result).toEqual(expected);
    })

    it("parses a tree with 5 elements", () => {
        const expected = {
            val: 1,
            left: {
                val: 2,
                left: null,
                right: {
                    val: 4,
                    left: null,
                    right: null
                }
            },
            right: {
                val: 3,
                left: null,
                right: null
            }
        }

        const result = parseTree([1, 2, 3, null, 4])

        expect(result).toEqual(expected);
    })


})
