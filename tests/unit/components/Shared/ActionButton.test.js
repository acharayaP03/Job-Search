import { render, screen } from "@testing-library/vue";
import ActionButton from "@/components/Shared/ActionButton.vue";

describe("Action button", () => {
    it("renders button name", () =>{
        render(ActionButton, {
            props: {
                text: 'Click me'
            }
        });

        const button = screen.getByRole('button', {
            name: /click me/i
        });

        expect(button).toBeInTheDocument();
    })

    it("applies one of the several styles to button", () =>{
        render(ActionButton, {
            props: {
                text: 'Sign in',
                primary: true
            }
        });

        const button = screen.getByRole('button', {
            name: /sign in/i
        });

        expect(button).toHaveClass('primary')
    })
})