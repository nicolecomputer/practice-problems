import isBalancedBrackets from "./main";

describe("balanced brackets", () => {
    it("returns true for an empty string", () => {
        const expected = true
        const result = isBalancedBrackets("")

        expect(result).toEqual(expected);
    })

    it("returns true for a set of balanced brackets", () => {
        const expected = true
        const result = isBalancedBrackets("{}")

        expect(result).toEqual(expected);
    })

    it("returns true for a nested brackets", () => {
        const expected = true
        const result = isBalancedBrackets("{{}{}{{}}}")

        expect(result).toEqual(expected);
    })

    it("returns false for all opening brackets", () => {
        const expected = false
        const result = isBalancedBrackets("{{{{{{{{{")

        expect(result).toEqual(expected);
    })

    it("returns false for all closing brackets", () => {
        const expected = false
        const result = isBalancedBrackets("}}}}}}}}}")

        expect(result).toEqual(expected);
    })

    it("returns false for a complicated unbalanced example", () => {
        const expected = false
        const result = isBalancedBrackets("{{{}}}{}{}{}}{{{}}}}")

        expect(result).toEqual(expected);
    })

    it("allows mixed marks", () => {
        const expected = false
        const result = isBalancedBrackets("([)]")

        expect(result).toEqual(expected);
    })


    it("allows balanced mixed marks", () => {
        const expected = true
        const result = isBalancedBrackets("([]){}")

        expect(result).toEqual(expected);
    })
})
