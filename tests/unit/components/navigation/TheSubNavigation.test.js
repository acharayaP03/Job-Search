import { render, screen } from "@testing-library/vue";
import TheSubNavigation from "../../../../src/components/Navigation/TheSubNavigation.vue";

describe("TheSubNavigation", () => {
    describe("when user is on jobs page", () => {
        it("displays job count", () => {
            render(TheSubNavigation, {
                global: {
                    stubs: {
                        FontAwesomeIcon: true
                    }
                },
                data() {
                    return {
                        onJobResultsPage: true,
                    }
                }
            });

            const jobCount = screen.getByText("1653");

            expect(jobCount).toBeInTheDocument();
        })
    })

    describe("when user is not on jobs page", () =>{
        it("dont NOT displays job count", () => {
            render(TheSubNavigation, {
                global: {
                    stubs: {
                        FontAwesomeIcon: true
                    }
                },
                data() {
                    return {
                        onJobResultsPage: false,
                    }
                }
            });

            const jobCount = screen.queryByText("1653");

            expect(jobCount).not.toBeInTheDocument();
        })
    })
})