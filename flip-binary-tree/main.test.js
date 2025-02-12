import binaryTreeFlip, { deserializeTree, serializeTree } from "./main";

describe("binaryTreeFlip", () => {
    test("first test", () => {
    })
})

describe("serialization", () => {
    describe("deserialize", () => {
        test("empty", () => {
            const expected = null
            const result = deserializeTree([])
            expect(result).toEqual(expected)
        })

        test("a single node", () => {
            const expected = {
                val: 1,
                left: null,
                right: null
            }
            const input = [1]
            const result = deserializeTree(input)
            expect(result).toEqual(expected)
        })

    })

    describe("serialize", () => {
        test("empty", () => {
            const expected = null
            const result = serializeTree(null)
            expect(result).toEqual(expected)
        })

        test("a single node", () => {
            const expected = [1]
            const input = {
                val: 1,
                left: null,
                right: null
            }
            const result = serializeTree(input)
            expect(result).toEqual(expected)
        })

    })


})
