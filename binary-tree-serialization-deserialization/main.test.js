import { serializeBinaryTree, deserializeBinaryTree } from "./main";

describe("serialization", () => {
    test("an empty tree", () => {
        const expected = JSON.stringify([])
        const result = serializeBinaryTree(deserializeBinaryTree(expected))

        expect(result).toEqual(expected)
    })

    test("a single node", () => {
        const expected = JSON.stringify([1])
        const result = serializeBinaryTree(deserializeBinaryTree(expected))

        expect(result).toEqual(expected)
    })

    test("a two level tree", () => {
        const expected = JSON.stringify([1, 2, 3])
        const result = serializeBinaryTree(deserializeBinaryTree(expected))

        expect(result).toEqual(expected)
    })

    test("a complicated filled out tree", () => {
        const expected = JSON.stringify([1, 2, 3, 4])
        const result = serializeBinaryTree(deserializeBinaryTree(expected))

        expect(result).toEqual(expected)
    })

})
