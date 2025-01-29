import maxProductSubArray from "./main";
import { product } from "./main";

describe("product", () => {
    test("[2, 2, 2]", () => {
        const expected = 8;
        const result = product([2, 2, 2]);

        expect(result).toEqual(expected);

    })
})

describe("maxProductSubArray", () => {
    test("[1,2,-3,5,1]", () => {
        const expected = 5;
        const result = maxProductSubArray([1, 2, -3, 5, 1]);

        expect(result).toEqual(expected);
    })

    test("[9]", () => {
        const expected = 9;
        const result = maxProductSubArray([9]);

        expect(result).toEqual(expected);
    })

    test("[1,2,0,-1,8,-4]", () => {
        const expected = 32;
        const result = maxProductSubArray([1, 2, 0, -1, 8, -4]);

        expect(result).toEqual(expected);
    })
})
