import { render, screen} from "@testing-library/vue";

import TheHeadline from "../../../src/components/TheHeadline.vue";

describe("TheHeadline", () => {
    describe("Vitest playground", () => {
        it("tracks wheter it has been called", () => {
            const mockFunction = vi.fn();
            mockFunction(1)
            expect(mockFunction).toHaveBeenCalledWith(1);
        })
    })
})