import { render, screen } from "@testing-library/vue";
import axios from "axios";
import { RouterLinkStub } from "@vue/test-utils";
import {JobListings} from "../../../../src/components/JobResults";

/**
 * @vi mock will import all the available methods from axios to mock any request
 */
vi.mock("axios");

describe("JobListings", () => {
    const createRoute = (queryParams = {}) => ({
        query: {
            page: "5",
            ...queryParams
        }
    })

    const renderJobListings = ($route) => {
        render(JobListings, {
            global: {
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
        axios.get.mockResolvedValue( { data : []});
        const $route = createRoute()
        renderJobListings($route)

        expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs")
    })

    it("Creates a job listing for every job", async () => {
        await axios.get.mockResolvedValue( { data: Array(15).fill({})});
        const $route = createRoute({ page: "1"})
        renderJobListings($route)

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
            axios.get.mockResolvedValue( { data: Array(20).fill({})});
            const queryParams = { page: "1" };
            const $route = createRoute(queryParams);

            renderJobListings($route);

            /** wait for list item to load first **/
            await screen.findAllByRole('listitem');
            const previousLink = screen.queryByRole("link", { name: /previous/i});

            expect(previousLink).not.toBeInTheDocument()
        })

        it("does shows link to next page", async () => {
            axios.get.mockResolvedValue( { data: Array(20).fill({})});
            const queryParams = { page: "1" };
            const $route = createRoute(queryParams);

            renderJobListings($route);

            /** wait for list item to load first **/
            await screen.findAllByRole('listitem');
            const nextLink = screen.queryByRole("link", { name: /next/i});

            expect(nextLink).toBeInTheDocument()
        })
    })

    describe("When the user is on the last page", async () =>{
        it("does not show link to previous page", async () => {
            axios.get.mockResolvedValue( { data: Array(20).fill({})});
            const queryParams = { page: "2" };
            const $route = createRoute(queryParams);

            renderJobListings($route);

            /** wait for list item to load first **/
            await screen.findAllByRole('listitem');
            const nextLink = screen.queryByRole("link", { name: /next/i});

            expect(nextLink).not.toBeInTheDocument()
        })
        it("does not show link to previous page", async () => {
            axios.get.mockResolvedValue( { data: Array(20).fill({})});
            const queryParams = { page: "2" };
            const $route = createRoute(queryParams);

            renderJobListings($route);

            /** wait for list item to load first **/
            await screen.findAllByRole('listitem');
            const previousLink = screen.queryByRole("link", { name: /previous/i});

            expect(previousLink).toBeInTheDocument()
        })
    })
})
