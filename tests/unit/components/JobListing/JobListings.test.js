import { render, screen } from "@testing-library/vue";
import { useRoute } from "vue-router";
vi.mock("vue-router")
import { createTestingPinia } from "@pinia/testing";
import { RouterLinkStub } from "@vue/test-utils";
import {JobListings} from "../../../../src/components/JobResults";
import { useJobsStore } from "../../../../src/stores/jobs";

describe("JobListings", () => {
    const renderJobListings = () => {
        const pinia = createTestingPinia();
        const jobsStore = useJobsStore();
        jobsStore.FILTERED_JOBS = Array(15).fill({})
        render(JobListings, {
            global: {
                plugins: [pinia],
                stubs: {
                    RouterLink: RouterLinkStub
                },
            }
        });

        return { jobsStore }
    }

    it("fetches jobs data", () => {
        useRoute.mockReturnValue({ query: {}})

        const { jobsStore } = renderJobListings()
        expect(jobsStore.FETCH_JOBS).toHaveBeenCalled()
    })

    it("Creates a job listing for every job", async () => {

        useRoute.mockReturnValue({ query: { page: "1"}})
        const { jobsStore } = renderJobListings()
        jobsStore.FILTERED_JOBS = Array(15).fill({})

        const jobListings = await screen.findAllByRole("listitem");
        expect(jobListings).toHaveLength(10)
    })

    it("when params exclude page number", () => {
        useRoute.mockReturnValue({ query: { page: undefined }})
        renderJobListings();

        expect(screen.getByText("Page 1")).toBeInTheDocument();
    })

    it("when params include page number", () => {
        const queryParams = { page: "3" };
        useRoute.mockReturnValue({ query: { ...queryParams }})
        renderJobListings();

        expect(screen.getByText("Page 3")).toBeInTheDocument();
    })

    describe("when user is on the first page", () => {
        it("does not show link to previous page", async () => {

            const queryParams = { page: "1" };
            useRoute.mockReturnValue({ query: { ...queryParams }});

            const { jobsStore } = renderJobListings();
            jobsStore.FILTERED_JOBS = Array(20).fill({})

            /** wait for list item to load first **/
            await screen.findAllByRole('listitem');
            const previousLink = screen.queryByRole("link", { name: /previous/i});

            expect(previousLink).not.toBeInTheDocument()
        })

        it("does shows link to next page", async () => {

            const queryParams = { page: "1" };
            useRoute.mockReturnValue({ query: { ...queryParams }})


            const { jobsStore } = renderJobListings();
            jobsStore.FILTERED_JOBS = Array(20).fill({})
            /** wait for list item to load first **/
            await screen.findAllByRole('listitem');
            const nextLink = screen.queryByRole("link", { name: /next/i});

            expect(nextLink).toBeInTheDocument()
        })
    })

    describe("When the user is on the last page", async () =>{
        it("does not show link to previous page", async () => {

            const queryParams = { page: "2" };
            useRoute.mockReturnValue({ query: { ...queryParams }})


            const { jobsStore } = renderJobListings();
            jobsStore.FILTERED_JOBS = Array(20).fill({})
            /** wait for list item to load first **/
            await screen.findAllByRole('listitem');
            const nextLink = screen.queryByRole("link", { name: /next/i});

            expect(nextLink).not.toBeInTheDocument()
        })
        it("does not show link to previous page", async () => {

            const queryParams = { page: "2" };
            useRoute.mockReturnValue({ query: { ...queryParams }})


            const { jobsStore } = renderJobListings();
            jobsStore.FILTERED_JOBS = Array(20).fill({})

            /** wait for list item to load first **/
            await screen.findAllByRole('listitem');
            const previousLink = screen.queryByRole("link", { name: /previous/i});

            expect(previousLink).toBeInTheDocument()
        })
    })
})
