import { render, screen} from "@testing-library/vue";

import TheHeadline from "../../../src/components/TheHeadline.vue";


describe("TheHeadline", () => {
    describe("Vitest playground", () => {
        it("tracks wheter it has been called", () => {
            const mockFunction = vi.fn();
            mockFunction(1)
            expect(mockFunction).toHaveBeenCalledWith(1);
        })
    });

    it("displays introductory action verb", () => {
        vi.useFakeTimers();
        render(TheHeadline);

        const actionPhrase = screen.getByRole("heading", {
            name: /build for everyone/i
        });
        expect(actionPhrase).toBeInTheDocument();
        vi.useRealTimers();
    });

    it("changes action verb at a consistent interval", () => {
        vi.useFakeTimers();
        const mock = vi.fn();
        vi.stubGlobal("setInterval", mock);
        render(TheHeadline);

        expect(mock).toHaveBeenCalled()
        vi.useRealTimers();
    })
})