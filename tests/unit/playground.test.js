// import { describe, it, expect } from "vitest";
import {everOrOdd, multiply } from "../../src/playground";

describe("basic math", () => {
    it("Adds two numbers", () => {
        expect(1 + 1 ).toBe(2)
    });

    describe("even or odd number", () => {
        describe("when the given number is even", () => {
            it("indicates the number is even", () => {
                expect(everOrOdd(4)).toBe("Even number");
            })
        })

        describe("when the given number is odd", () => {
            it("indicates the number is odd", () => {
                expect(everOrOdd(3)).toBe("Odd number");
            })
        })
    })

    describe("multiply", () => {
        it("multiplies two numbers together", () =>{
            expect(multiply(2,3)).toBe(6)
        })
    })
})