import binaryTreeLevelOrderTraversal, { parseTree } from "./main"

describe("binaryTreeLevelOrderTraversal", () => {
    test("test 1", () => {
        const expected = [[13], [-55]]
        const result = binaryTreeLevelOrderTraversal(
            parseTree([13, null, -55])
        )

        expect(result).toEqual(expected)
    })
})
