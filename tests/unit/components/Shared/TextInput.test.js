import { render, screen } from "@testing-library/vue";
import userEvent from '@testing-library/user-event'
import TextInput from "@/components/Shared/TextInput.vue";

describe("TextInput", () => {
    it("Communicates that user has entered characters", async () => {
        const { emitted } = render(TextInput, {
            props: {
                modelValue: ""
            }
        });

        const input = screen.getByRole("textbox");
        console.log(emitted())
        await userEvent.type(input, "NYC")
        //console.log(emitted()) returns  'update:modelValue': [ [ 'N' ], [ 'NY' ], [ 'NYC' ] ],
        const outputValue = emitted()["update:modelValue"]
        expect(outputValue).toEqual([["N"], ["NY"], ["NYC"]])
    })
})