import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import {createTestingPinia} from "@pinia/testing";
import { useRouter } from "vue-router";
vi.mock("vue-router");

import {JobFiltersSidebarJobTypes} from "../../../../../src/components/JobResults";
import { useJobsStore } from "@/stores/jobs";
import {useUserStore} from "@/stores/user";
import {router} from "json-server";

describe("JobFiltersSidebarJobTypes", () => {
    const renderJobFiltersSidebarJobTypes = () => {
        const pinia = createTestingPinia();
        const jobsStore = useJobsStore();
        const userStore = useUserStore();

        const push = vi.fn()
        useRouter.mockReturnValue({ push });

        render(JobFiltersSidebarJobTypes, {
            global: {
                plugins: [pinia],
                stubs: {
                    FontAwesomeIcon : true
                }
            }
        });

        return { jobsStore, userStore, push }
    }

    it("renders unique list of job types from jobs", async () => {

        const { jobsStore } = renderJobFiltersSidebarJobTypes();
        jobsStore.UNIQUE_JOB_TYPES = new Set(["Full-time", "Part-time"]);

        const button = screen.getByRole('button', {
            name: /job types/i
        })

        await userEvent.click(button);

        const jobTypeListItems = screen.getAllByRole("listitem");
        const jobType = jobTypeListItems.map((node) => node.textContent);

        expect(jobType).toEqual(["Full-time", "Part-time"])
    });

    describe("when user clicks checkbox", () =>{
        it("communicates that user has selected checkbox for job types", async () => {
            const { jobsStore, userStore } = renderJobFiltersSidebarJobTypes()

            jobsStore.UNIQUE_JOB_TYPES = new Set(["Full-time", "Part-time"]);

            const button = screen.getByRole('button', {
                name: /job types/i
            })
            await userEvent.click(button);

            const fullTimeCheckbox = screen.getByRole("checkbox", {
                name: /full-time/i
            });

            await userEvent.click(fullTimeCheckbox);

            expect(userStore.ADD_SELECTED_JOB_TYPES).toHaveBeenCalledWith(['Full-time'])
        });
        it("navigates user to job results page to see fresh batch of filtered jobs", async () => {
            const { jobsStore, push  } = renderJobFiltersSidebarJobTypes()

            jobsStore.UNIQUE_JOB_TYPES = new Set(["Full-time", "Part-time"]);

            const button = screen.getByRole('button', {
                name: /job types/i
            })
            await userEvent.click(button);

            const fullTimeCheckbox = screen.getByRole("checkbox", {
                name: /full-time/i
            });

            await userEvent.click(fullTimeCheckbox);

            expect(push).toHaveBeenCalledWith({ name: 'JobResults'})
        })
    })
})