import binaryTreeSubtree, { walkTree } from "./main"

// describe("binaryTreeSubtree", () => {
//     test("example 1", () => {
//         const expected = false
//         const result = binaryTreeSubtree([1, 2, 3], [1, 2])

//         expect(result).toEqual(expected)
//     })

//     test("example 2", () => {
//         const expected = true
//         const result = binaryTreeSubtree([12, 8, 6, 3, 5], [3, 5])

//         expect(result).toEqual(expected)
//     })
// })

describe("walktree", () => {
    it("walks the tree", () => {
        walkTree([1, 2, 3, 4, 5, 6])
    })
})
