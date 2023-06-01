import { useUserStore } from "../../../src/stores/user";
import { createPinia, setActivePinia } from "pinia";

describe("State", () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    });

    it("keeps track of if user is logged in", () => {
        const store = useUserStore();
        expect(store.isLoggedIn).toBe(false)
    })
})

describe("actions", () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    });

    it("logs the user in", () => {
        const store = useUserStore();
        store.loginUser();
        expect(store.isLoggedIn).toBe(true)
    })
})