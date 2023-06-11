import { render, screen } from "@testing-library/vue";
import SpotLights from "../../../../src/components/JobSearch/SpotLights.vue";
import axios from "axios";

vi.mock('axios');


describe("SpotLight", () => {
    const mockSpotLightResponse = (spotlight = { }) => {
        axios.get.mockResolvedValue({
            data: [
                {
                    id: 1,
                    image: "Image url",
                    title: "Title for the card",
                    description: "some description",
                    ...spotlight
                }
            ]
        });
    }
    it("renders image to the dom", async () => {
        const spotlight = { image: "other Image"}
        mockSpotLightResponse(spotlight)
        render(SpotLights, {
            slots: {
                default: `<template v-slot:default="slotProps">
                   <h1>{{ slotProps.image }}</h1>
                </template>
                `
            }
        });

        const text =  await screen.queryByText("other Image");
        expect(text).not.toBeInTheDocument()
    })

    it("renders title to the dom", async () => {

        const spotlight = { title: 'other title'};
        mockSpotLightResponse(spotlight)
        render(SpotLights, {
            slots: {
                default: `<template v-slot:default="slotProps"><h1>{{ slotProps.title }}</h1></template>`
            }
        });

        const text =  await screen.queryByText("other title");
        expect(text).not.toBeInTheDocument()
    })
    it("renders description to the dom", async () => {
        const spotlight = { description: "other description"}
        mockSpotLightResponse(spotlight)
        render(SpotLights, {
            slots: {
                default: `<template v-slot:default="slotProps"><h1>{{ slotProps.title }}</h1></template>`
            }
        });

        const text =  await screen.queryByText("other description");
        expect(text).not.toBeInTheDocument()
    })
})