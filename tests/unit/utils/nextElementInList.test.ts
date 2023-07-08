import nextElementInList from "../../../src/utils/nextElementInList";


describe("NextElementInList", () => {
    it("locates element in list and returns the next element in list", () => {
        const list = ["A", "B", "C", "D", "E"];
        const value = "C";
        const result = nextElementInList(list, value);
        expect(result).toBe("D");
    });

    /**
     * testing edge cases: what if the element is at the last index, then we need to loop to first which is "A"
     */

    it("when element is at the end of the list", () => {
        const list = ["A", "B", "C", "D", "E"];
        const value = "E";
        const result = nextElementInList(list, value);
        expect(result).toBe("A");
    });
})