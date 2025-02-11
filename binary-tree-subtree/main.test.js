import binaryTreeSubtree, { parseTree, sameTree } from "./main"

describe("binaryTreeSubtree", () => {
    test("empty trees", () => {
        const expected = true
        const result = binaryTreeSubtree(
            parseTree([]),
            parseTree([]))

        expect(result).toEqual(expected)
    })

    test("example 1", () => {
        const expected = false
        const result = binaryTreeSubtree(
            parseTree([1, 2, 3]),
            parseTree([1, 2]))

        expect(result).toEqual(expected)
    })

    test("example 2", () => {
        const expected = true
        const result = binaryTreeSubtree(
            parseTree([12, 8, 6, 3, 5]),
            parseTree([8, 3, 5]))

        expect(result).toEqual(expected)
    })
})


describe("sameTree", () => {
    test("two empty trees", () => {
        const expected = true
        const result = sameTree(
            parseTree([]),
            parseTree([])
        )

        expect(result).toEqual(expected)
    })

    test("two single value trees that are the same", () => {
        const expected = true
        const result = sameTree(
            parseTree([9]),
            parseTree([9])
        )

        expect(result).toEqual(expected)
    })

    test("two single value trees that are different", () => {
        const expected = false
        const result = sameTree(
            parseTree([9]),
            parseTree([8])
        )

        expect(result).toEqual(expected)
    })

    test("complicated same trees", () => {
        const expected = true
        const result = sameTree(
            parseTree([9, 8, 7, 6, 5, 4]),
            parseTree([9, 8, 7, 6, 5, 4])
        )

        expect(result).toEqual(expected)
    })

    test("complicated different trees", () => {
        const expected = false
        const result = sameTree(
            parseTree([9, 8, 7, 6, 5, 4]),
            parseTree([9, 8, 4, 6, 5, 4])
        )

        expect(result).toEqual(expected)
    })

    test("complicated different sized trees", () => {
        const expected = false
        const result = sameTree(
            parseTree([9, 8, 7, 6, 5, 4]),
            parseTree([9, 8])
        )

        expect(result).toEqual(expected)
    })

})
