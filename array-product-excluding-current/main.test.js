import arrayProductExcludingCurrent from "./main";

describe("arrayProductExcludingCurrent", () => {
    test("numbers [6, 3, 2]", () => {
        const expected = [6, 3, 2];
        const result = arrayProductExcludingCurrent([1, 2, 3])

        expect(result).toEqual(expected);
    })

    test("numbers [6, 3, 2]", () => {
        const expected = [0, 6, 0];
        const result = arrayProductExcludingCurrent([2, 0, 3])

        expect(result).toEqual(expected);
    })
})
