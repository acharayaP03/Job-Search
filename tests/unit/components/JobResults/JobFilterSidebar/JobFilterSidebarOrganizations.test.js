import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import {createTestingPinia} from "@pinia/testing";

import JobFiltersSidebarOrganization from "../../../../../src/components/JobResults/JobFiltersSidebarOrganization.vue";
import { useJobsStore } from "../../../../../src/stores/jobs";
import {useUserStore} from "../../../../../src/stores/user";

describe("JobFilterSidebarOrganization", () => {
    const renderJobFilterSidebarOrganizations = () => {
        const pinia = createTestingPinia();
        const jobsStore = useJobsStore();
        const userStore = useUserStore();
        const $router = { push : vi.fn() }

        render(JobFiltersSidebarOrganization, {
            global: {
                plugins: [pinia],
                stubs: {
                    FontAwesomeIcon : true
                },
                mocks: {
                    $router
                }
            }
        });

        return { jobsStore, userStore, $router }
    }
    it("renders unique list of organizations from jobs", async () => {

        const { jobsStore } = renderJobFilterSidebarOrganizations();
        jobsStore.UNIQUE_ORGANIZATIONS = new Set(["Google", "Amazon"]);

        const button = screen.getByRole('button', {
            name: /organizations/i
        })

        await userEvent.click(button);

        const organizationListItems = screen.getAllByRole("listitem");
        const organizations = organizationListItems.map((node) => node.textContent);

        expect(organizations).toEqual(["Google", "Amazon"])
    });


    describe("when user clicks checkbox", () => {

        it("communicates that user has selected checkbox for organization", async () => {
            const { jobsStore, userStore } = renderJobFilterSidebarOrganizations()
            jobsStore.UNIQUE_ORGANIZATIONS = new Set(["Google", "Amazon"]);

            const button = screen.getByRole('button', {
                name: /organizations/i
            })
            await userEvent.click(button);

            const googleCheckbox = screen.getByRole("checkbox", {
                name: /google/i
            });

            await userEvent.click(googleCheckbox);

            expect(userStore.ADD_SELECTED_ORGANIZATIONS).toHaveBeenCalledWith(['Google'])
        })
        it("navigates user to job result page to see fresh batch of jobs", async () => {
            const { jobsStore, $router } = renderJobFilterSidebarOrganizations()
            jobsStore.UNIQUE_ORGANIZATIONS = new Set(["Google", "Amazon"]);

            const button = screen.getByRole('button', {
                name: /organizations/i
            })
            await userEvent.click(button);

            const googleCheckbox = screen.getByRole("checkbox", {
                name: /google/i
            });

            await userEvent.click(googleCheckbox);

            expect($router.push).toHaveBeenCalledWith({ name: "JobResults"})
        })
    })

})