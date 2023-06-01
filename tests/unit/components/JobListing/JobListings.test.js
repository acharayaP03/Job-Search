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
})
