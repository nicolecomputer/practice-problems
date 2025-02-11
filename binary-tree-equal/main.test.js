import binaryTreeEqual, { parseLevelOrder } from "./main";

describe("binaryTreeEqual", () => {
    test("an empty tree", () => {
        const expected = true
        const result = binaryTreeEqual(
            parseLevelOrder([]),
            parseLevelOrder([])
        )
        expect(result).toEqual(expected)
    })

    test("a small tree", () => {
        const expected = true
        const result = binaryTreeEqual(
            parseLevelOrder([1]),
            parseLevelOrder([1])
        )
        expect(result).toEqual(expected)
    })

    test("another small tree with different second levels", () => {
        const expected = false
        const result = binaryTreeEqual(
            parseLevelOrder([1, 2, 3]),
            parseLevelOrder([1, 3, 2])
        )
        expect(result).toEqual(expected)
    })

    test("first example", () => {
        const expected = false
        const result = binaryTreeEqual(
            parseLevelOrder([1, null, 2]),
            parseLevelOrder([1, 2])
        )
        expect(result).toEqual(expected)
    })

    test("second example", () => {
        const expected = true
        const result = binaryTreeEqual(
            parseLevelOrder([65, null, 17]),
            parseLevelOrder([65, null, 17])
        )
        expect(result).toEqual(expected)
    })

    test("a tricky example", () => {
        const expected = false
        const result = binaryTreeEqual(
            parseLevelOrder([80]),
            parseLevelOrder([-99])
        )
        expect(result).toEqual(expected)
    })
})
