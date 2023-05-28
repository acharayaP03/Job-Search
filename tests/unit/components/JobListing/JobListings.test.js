import { render, screen } from "@testing-library/vue";
import axios from "axios";
import { RouterLinkStub } from "@vue/test-utils";
import {JobListings} from "../../../../src/components/JobResults";

/**
 * @vi mock will import all the available methods from axios to mock any request
 */
vi.mock("axios");

describe("JobListings", () => {
    it("fetches jobs data", () => {
        axios.get.mockResolvedValue( { data : []});
        render(JobListings);

        expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs")
    })

    it("Creates a job listing for every job", async () => {
        await axios.get.mockResolvedValue( { data: Array(15).fill({})});
        render(JobListings, {
            global: {
                stubs: {
                    RouterLink: RouterLinkStub
                }
            }
        });

        const jobListings = await screen.findAllByRole("listitem");
        expect(jobListings).toHaveLength(15)
    })
})
