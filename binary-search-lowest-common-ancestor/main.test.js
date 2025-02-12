import BSTLowestCommonAncestor, { findPath, parseTree } from "./main"

describe("BSTLowestCommonAncestor", () => {
    test("test 1", () => {
        const expected = 7
        const result = BSTLowestCommonAncestor(
            parseTree([3, 1, 7, null, 2, 6, 10]),
            7, 6)

        expect(result.val).toEqual(expected)
    })

    test("test 2", () => {
        const expected = 5
        const result = BSTLowestCommonAncestor(
            parseTree([5, 3, 8, 2, 4, 7, 9]),
            3, 9)

        expect(result.val).toEqual(expected)
    })

    test("test 3", () => {
        const expected = 10
        const result = BSTLowestCommonAncestor(
            parseTree([7, 3, 10, 2, 5, 8, 12]),
            8, 12)

        expect(result.val).toEqual(expected)
    })
})

describe("parseTree", () => {
    test("empty input", () => {
        const expected = null
        const result = parseTree([])
        expect(result).toEqual(expected);
    })

    test("a single node", () => {
        const expected = {
            val: 1,
            left: null,
            right: null
        }
        const result = parseTree([1])
        expect(result).toEqual(expected);
    })

    test("a small tree with a hole", () => {
        const expected = {
            val: 1,
            left: null,
            right: {
                val: 3,
                left: null,
                right: null
            }
        }
        const result = parseTree([1, null, 3])
        expect(result).toEqual(expected);
    })
})

describe("findPath", () => {
    test("empty tree", () => {
        const expected = [false, null]
        const [resultHasNode, resultPathInNodes] = findPath(parseTree([]), 7)

        const resultPath = resultPathInNodes && resultPathInNodes.map(n => n.val)

        expect(resultHasNode).toEqual(expected[0])
        expect(resultPath).toEqual(expected[1])
    })

    test("The result at the root", () => {
        const expected = [true, [7]]
        const [resultHasNode, resultPathInNodes] = findPath(parseTree([7]), 7)

        const resultPath = resultPathInNodes && resultPathInNodes.map(n => n.val)

        expect(resultHasNode).toEqual(expected[0])
        expect(resultPath).toEqual(expected[1])
    })

    test("The result is in one of the leaf notes", () => {
        const expected = [true, [1, 7]]
        const [resultHasNode, resultPathInNodes] = findPath(parseTree([1, 2, 7]), 7)

        const resultPath = resultPathInNodes && resultPathInNodes.map(n => n.val)

        expect(resultHasNode).toEqual(expected[0])
        expect(resultPath).toEqual(expected[1])
    })


    test("The result is not in a complicated tree", () => {
        const expected = [false, null]
        const [resultHasNode, resultPathInNodes] = findPath(parseTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 99)

        const resultPath = resultPathInNodes && resultPathInNodes.map(n => n.val)

        expect(resultHasNode).toEqual(expected[0])
        expect(resultPath).toEqual(expected[1])
    })

})
