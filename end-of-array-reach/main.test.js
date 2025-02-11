import arrayReachableEnd from "./main";

describe("arrayReachableEnd", () => {
    test("example [4, 1, 0, 0, 2, 3]", () => {
        const expected = true;
        const result = arrayReachableEnd([4, 1, 0, 0, 2, 3]);

        expect(result).toEqual(expected);
    })
    test("example [1,0,0,0]", () => {
        const expected = false;
        const result = arrayReachableEnd([1, 0, 0, 0]);

        expect(result).toEqual(expected);
    })
    test("example [2,3,1,1,4]", () => {
        const expected = true;
        const result = arrayReachableEnd([2, 3, 1, 1, 4]);

        expect(result).toEqual(expected);
    })
})
