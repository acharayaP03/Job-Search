import type { Mock } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import axios from "axios";
import { useDegreesStore } from "@/stores/degrees";
import {createDegree} from "../../utility/createDegree";

vi.mock('axios');
const axiosGetMock = axios.get as Mock;

describe("State", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it("stores all degrees that jobs may require", () => {
        const store = useDegreesStore();
        expect(store).toEqual([])
    })
});
describe("actions", () =>{
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it("FETCHES_DEGREES", async () => {
        axiosGetMock.mockReturnValue({
            data: [
                {
                    id: 1,
                    degree: "Bachelor's"
                }
            ]
        });
        const store = useDegreesStore();
        await store.FETCH_DEGREES();

        expect(store.degrees).toEqual([
            {
                id: 1,
                degree: "Bachelor's"
            }
        ])
    })
});

describe("getters", () => {
    describe("UNIQUE_DEGREES", () => {
        beforeEach(() => {
            setActivePinia(createPinia());
        });
        it("finds unique degrees from collection of degrees", () => {
            const store = useDegreesStore();
            store.degrees = [
                createDegree({ degree: "Master's"}),
                createDegree({ degree: "Bachelor's"})
            ]

            const result = store.UNIQUE_DEGREES;
            expect(result).toEqual(["Master's", "Bachelor's"]);
        })
    })
})