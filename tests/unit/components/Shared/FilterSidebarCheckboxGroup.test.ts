import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import { useRouter } from "vue-router";
import { createTestingPinia } from "@pinia/testing";
import type { Mock } from "vitest";
import { useUserStore } from "@/stores/user";

vi.mock("vue-router");
// const userRouterMock = useRouter() as Mock;

const userRouterMock = vi.mocked(useRouter) as Mock;
import { FilterSidebarCheckboxGroup } from '../../../../src/components/Shared';

interface JobFilterSidebarCheckboxGroup {
    uniqueItems: Set<string>,
    actions: Mock,
}

describe("FilterSideBarCheckboxGroup", () => {
    const createProps = (props: Partial<JobFilterSidebarCheckboxGroup> = {}): JobFilterSidebarCheckboxGroup => ({
        uniqueItems: new Set(["ValueA", "ValueB"]),
        actions: vi.fn(),
        ...props
    });

    const renderFilterSidebarCheckbox = (props: JobFilterSidebarCheckboxGroup) => {
        const pinia = createTestingPinia({ stubActions: false });
        const userStore = useUserStore();

        render(FilterSidebarCheckboxGroup, {
            props: {
                ...props
            },
            global: {
                plugins: [pinia],
            }
        });

        return { userStore };
    };

    it("renders unique list of values", async () => {
        const props = createProps({
            uniqueItems: new Set(["Full-time", "Part-time"])
        });
        renderFilterSidebarCheckbox(props);
        const jobTypeListItems = screen.getAllByRole("listitem");
        const jobType = jobTypeListItems.map((node) => node.textContent);

        expect(jobType).toEqual(["Full-time", "Part-time"])
    });

    describe("when user clicks checkbox", () => {
        it("communicates that user has selected checkbox for job types", async () => {
            const actions = vi.fn()
            const props = createProps({
                uniqueItems: new Set(["Full-time", "Part-time"]),
                actions
            })
            userRouterMock.mockReturnValue({ push: vi.fn() })
            renderFilterSidebarCheckbox(props)

            const fullTimeCheckbox = screen.getByRole("checkbox", {
                name: /full-time/i
            });

            await userEvent.click(fullTimeCheckbox);

            expect(actions).toHaveBeenCalledWith(['Full-time'])
        });
        it("navigates user to job results page to see fresh batch of filtered jobs", async () => {
            const push = vi.fn();
            const props = createProps({
                uniqueItems: new Set(["Full-time", "Part-time"])
            })
            userRouterMock.mockReturnValue({ push })
            renderFilterSidebarCheckbox(props)
            const fullTimeCheckbox = screen.getByRole("checkbox", {
                name: /full-time/i
            });

            await userEvent.click(fullTimeCheckbox);

            expect(push).toHaveBeenCalledWith({ name: 'JobResults' })
        })
    })


    describe("when user clicks on clear button", () => {
        it("clears all selected checkboxes", async () => {

            const props = createProps({
                uniqueItems: new Set(["Full-time"]),
            })
            userRouterMock.mockReturnValue({ push: vi.fn() })
            const { userStore } = renderFilterSidebarCheckbox(props)

            const fullTimeCheckbox = screen.getByRole<HTMLInputElement>("checkbox", {
                name: /full-time/i
            });

            await userEvent.click(fullTimeCheckbox);
            expect(fullTimeCheckbox.checked).toBe(true);
            userStore.CLEAR_USER_JOB_SELECTIONS();

            const fullTimeCheckboxAfterAction = await screen.findByRole<HTMLInputElement>("checkbox", {
                name: /full-time/i
            });

            expect(fullTimeCheckboxAfterAction.checked).toBe(false);

            // const clearButton = screen.getByRole("button", {
            //     name: /clear/i
            // });

            // await userEvent.click(clearButton);
        })
    })
})