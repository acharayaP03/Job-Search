import { render, screen } from "@testing-library/vue";

import { createTestingPinia } from "@pinia/testing";
import { RouterLinkStub } from "@vue/test-utils";
import {JobListings} from "../../../../src/components/JobResults";
import { useJobsStore } from "../../../../src/stores/jobs";

describe("JobListings", () => {
    const createRoute = (queryParams = {}) => ({
        query: {
            page: "5",
            ...queryParams
        }
    })

    const renderJobListings = ($route) => {
        const pinia = createTestingPinia();
        render(JobListings, {
            global: {
                plugins: [pinia],
                stubs: {
                    RouterLink: RouterLinkStub
                },
                mocks: {
                    $route
                }
            }
        });
    }

    it("fetches jobs data", () => {

        const $route = createRoute()
        renderJobListings($route)
        const jobsStore = useJobsStore();
        expect(jobsStore.FETCH_JOBS).toHaveBeenCalled()
    })

    it("Creates a job listing for every job", async () => {
        const $route = createRoute({ page: "1"})

        renderJobListings($route);
        const jobsStore = useJobsStore();
        jobsStore.jobs = Array(15).fill({})

        const jobListings = await screen.findAllByRole("listitem");
        expect(jobListings).toHaveLength(10)
    })

    it("when params exclude page number", () => {
        const queryParams = { page: undefined };
        const $route = createRoute(queryParams);
        renderJobListings($route);

        expect(screen.getByText("Page 1")).toBeInTheDocument();
    })

    it("when params include page number", () => {
        const queryParams = { page: "3" };
        const $route = createRoute(queryParams);
        renderJobListings($route);

        expect(screen.getByText("Page 3")).toBeInTheDocument();
    })

    describe("when user is on the first page", () => {
        it("does not show link to previous page", async () => {

            const queryParams = { page: "1" };
            const $route = createRoute(queryParams);

            renderJobListings($route);
            const jobStore = useJobsStore();
            jobStore.jobs = Array(20).fill({})

            /** wait for list item to load first **/
            await screen.findAllByRole('listitem');
            const previousLink = screen.queryByRole("link", { name: /previous/i});

            expect(previousLink).not.toBeInTheDocument()
        })

        it("does shows link to next page", async () => {

            const queryParams = { page: "1" };
            const $route = createRoute(queryParams);

            renderJobListings($route);
            const jobsStore = useJobsStore();
            jobsStore.jobs = Array(20).fill({})
            /** wait for list item to load first **/
            await screen.findAllByRole('listitem');
            const nextLink = screen.queryByRole("link", { name: /next/i});

            expect(nextLink).toBeInTheDocument()
        })
    })

    describe("When the user is on the last page", async () =>{
        it("does not show link to previous page", async () => {

            const queryParams = { page: "2" };
            const $route = createRoute(queryParams);

            renderJobListings($route);

            const jobsStore = useJobsStore();
            jobsStore.jobs = Array(20).fill({})
            /** wait for list item to load first **/
            await screen.findAllByRole('listitem');
            const nextLink = screen.queryByRole("link", { name: /next/i});

            expect(nextLink).not.toBeInTheDocument()
        })
        it("does not show link to previous page", async () => {

            const queryParams = { page: "2" };
            const $route = createRoute(queryParams);

            renderJobListings($route);

            const jobsStore = useJobsStore();
            jobsStore.jobs = Array(20).fill({})

            /** wait for list item to load first **/
            await screen.findAllByRole('listitem');
            const previousLink = screen.queryByRole("link", { name: /previous/i});

            expect(previousLink).toBeInTheDocument()
        })
    })
})
