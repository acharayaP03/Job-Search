import { screen, render } from "@testing-library/vue";

import { HeaderContainer } from '../../../../src/components/Shared';

describe("HeaderContainer", () => {
    it("allows parent component to provide title content", () => {
        render(HeaderContainer, {
            slots: {
                title: "<h2>Some title</h2>"
            }
        });

        expect(screen.getByText("Some title")).toBeInTheDocument()
    })

    it("allows parent component to provide subtitle content", () => {
        render(HeaderContainer, {
            slots: {
                subtitle: "<h2>Some subTitle</h2>"
            }
        });

        expect(screen.getByText("Some subTitle")).toBeInTheDocument()
    })
})