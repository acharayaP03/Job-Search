import { render, screen} from "@testing-library/vue";

import TheHeadline from "../../../src/components/TheHeadline.vue";
import {nextTick} from "vue";


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
    });

    it("swaps action verb after interval", async () => {
        vi.useFakeTimers();
        render(TheHeadline);

        // force processes to next timer ignoring the original setInterval in the component
        vi.advanceTimersToNextTimer();

        // this will await till the setInterval proceed to next interval
        await nextTick();
        const actionPhrase = screen.getByRole("heading", {
            name: /create for everyone/i
        });

        expect(actionPhrase).toBeInTheDocument()
        vi.useRealTimers();
    });

    it("removes interval when component disappears", () => {
        vi.useFakeTimers()
        const clearInterval = vi.fn();
        vi.stubGlobal("clearInterval", clearInterval);

        const { unmount } = render(TheHeadline);
        unmount();
        expect(clearInterval).toHaveBeenCalled();
        vi.unstubAllGlobals();
        vi.useRealTimers()
    });
})