import { render, screen } from "@testing-library/vue";
import TheSubNavigation from "@/components/Navigation/TheSubNavigation.vue";
import {createTestingPinia} from "@pinia/testing";
import {useJobsStore} from "../../../../src/stores/jobs";
import { useRoute } from "vue-router";

vi.mock('vue-router');

describe("TheSubNavigation", () => {
    const renderTheSubNav = (routeName) => {
        const pinia = createTestingPinia();
        const jobStore = useJobsStore();
        useRoute.mockReturnValue({ name : routeName })

        render(TheSubNavigation, {
            global: {
                plugins: [pinia],
                stubs: {
                    FontAwesomeIcon: true
                }
            },
        });

        return { jobStore };
    }
    describe("when user is on jobs page",  () => {
        it("displays job count", async() => {
            const routeName = "JobResults"
            const { jobStore } = renderTheSubNav(routeName);
            const numberOfJobs = 16;
            jobStore.FILTERED_JOBS = Array(numberOfJobs).fill({})

            const jobCount = await screen.findByText(numberOfJobs);

            expect(jobCount).toBeInTheDocument();
        })
    })

    describe("when user is not on jobs page", () =>{
        it("dont NOT displays job count", () => {

            const routeName = "Home";
            const { jobStore } = renderTheSubNav(routeName);
            const numberOfJobs = 16;
            jobStore.FILTERED_JOBS = Array(numberOfJobs).fill({})

            const jobCount = screen.queryByText(numberOfJobs);
            expect(jobCount).not.toBeInTheDocument();
        })
    })
})