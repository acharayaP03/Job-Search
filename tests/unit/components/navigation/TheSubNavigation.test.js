import { render, screen } from "@testing-library/vue";
import TheSubNavigation from "@/components/Navigation/TheSubNavigation.vue";

describe("TheSubNavigation", () => {
    describe("when user is on jobs page", () => {
        it("displays job count", () => {
            const $route = {
                name: "JobResults",
            }

            render(TheSubNavigation, {
                global: {
                    mocks: {
                        $route
                    },
                    stubs: {
                        FontAwesomeIcon: true
                    }
                },
            });

            const jobCount = screen.getByText("1653");

            expect(jobCount).toBeInTheDocument();
        })
    })

    describe("when user is not on jobs page", () =>{
        it("dont NOT displays job count", () => {

            const $route = {
                name: "Home"
            }
            render(TheSubNavigation, {
                global: {
                    mocks: {
                        $route
                    },
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