import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

import CollapsibleAccordion from "../../../../src/components/Shared/CollapsibleAccordion.vue";

describe("CollapsibleAccrodion", () => {
    const renderSlot = (slots = {}) => {
        render(CollapsibleAccordion, {
            global: {
                stubs: {
                    FontAwesomeIcon: true
                }
            },
            props: {
                heading: 'My Category'
            },
            slots
        });
    }
    it('renders child content', async () => {
        renderSlot(  { default: "<h3>My nested child</h3>"})

        expect(screen.queryByText("My nested child")).not.toBeInTheDocument();
        const button = screen.getByRole("button", {
            name: /my category/i
        });

        await userEvent.click(button);
        expect(screen.getByText("My nested child")).toBeInTheDocument();
    });

    describe("when parent does not provide custom content", () => {
        it("renders default content", async () => {
            renderSlot()

            const button = screen.getByRole("button", {
                name: /my category/i
            });
            await userEvent.click(button);
            expect(screen.getByText("Whoops, someone forgot to populate me.")).toBeInTheDocument()
        })
    })
})

