import axios from "axios";
import type { Mock } from "vitest";
import getDegrees from "../../../src/api/getDegree";

vi.mock("axios");
const axiosGetMock = axios.get as Mock;
describe("getDegree", () => {
    beforeEach(() => {
        axiosGetMock.mockResolvedValue({
            data: [
                {
                    "id": 1,
                    "degree": "Associate"
                }
            ]
        })
    })

    it("fetches degree that candidates can apply to", async () => {
        await getDegrees();
        expect(axios.get).toHaveBeenCalledWith("http://myfakeapi:3000/degrees")
    })

    it("Expects jobs from response", async () => {
        const degree = await getDegrees();
        expect(degree).toEqual([
            {
                "id": 1,
                "degree": "Associate"
            }
        ])
    })
})
