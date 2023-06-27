import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import { useRouter } from "vue-router";
import { createTestingPinia } from "@pinia/testing";
vi.mock("vue-router");

import { FilterSidebarCheckboxGroup } from '../../../../src/components/Shared';


describe("FilterSideBarCheckboxGroup", () =>{
    const createProps = (props ={}) => ({
        heading: "Heading",
        uniqueItems: new Set(["ValueA", "ValueB"]),
        actions: vi.fn(),
        ...props
    });

    const renderFilterSidebarCheckbox = (props) => {
        const pinia = createTestingPinia();

        render(FilterSidebarCheckboxGroup, {
            props: {
                ...props
            },
            global: {
                plugins: [pinia],
                stubs: {
                    FontAwesomeIcon : true
                }
            }
        });
    };

    it("renders unique list of values", async () => {
        const props = createProps({
            heading: "Job Types",
            uniqueItems: new Set(["Full-time", "Part-time"])
        });
        renderFilterSidebarCheckbox(props);
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
            const actions = vi.fn()
            const props = createProps({
                heading: "Job Types",
                uniqueItems: new Set(["Full-time", "Part-time"]),
                actions
            })
            useRouter.mockReturnValue({ push: vi.fn() })
            renderFilterSidebarCheckbox(props)

            const button = screen.getByRole('button', {
                name: /job types/i
            })
            await userEvent.click(button);

            const fullTimeCheckbox = screen.getByRole("checkbox", {
                name: /full-time/i
            });

            await userEvent.click(fullTimeCheckbox);

            expect(actions).toHaveBeenCalledWith(['Full-time'])
        });
        it("navigates user to job results page to see fresh batch of filtered jobs", async () => {
            const push = vi.fn();
            const props = createProps({
                heading: "Job Types",
                uniqueItems: new Set(["Full-time", "Part-time"])
            })
            useRouter.mockReturnValue({ push})
            renderFilterSidebarCheckbox(props)

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