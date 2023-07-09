import { createPinia, setActivePinia } from "pinia";

import { useDegreesStore } from "@/stores/degrees";

describe("State", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it.only("stores all degrees that jobs may require", () => {
        const store = useDegreesStore();
        expect(store).toEqual([])
    })
})