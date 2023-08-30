import { useUserStore } from "../../../src/stores/user";
import { createPinia, setActivePinia } from "pinia";

describe("State", () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    });

    it("keeps track of if user is logged in", () => {
        const store = useUserStore();
        expect(store.isLoggedIn).toBe(false)
    });

    it("stores organizations that the user would like to filter jobs by", () => {
        const store = useUserStore();
        expect(store.selectedOrganizations).toEqual([]);
    })

    it("stores job types that the user would like to filter jobs by", () => {
        const store = useUserStore();

        expect(store.selectedJobTypes).toEqual([])
    });

    it("stores degrees that the user would like ot filter job by", () => {
        const store = useUserStore();
        expect(store.selectedDegreeType).toEqual([])
    })
})

describe("actions", () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    });

    describe("Login user", () => {
        it("logs the user in", () => {
            const store = useUserStore();
            store.LOGIN_USER();
            expect(store.isLoggedIn).toBe(true)
        })
    });

    describe("ADD_SELECTED_ORGANIZATIONS", () => {
        it("updates organizations the user has chosen to filter jobs by", () => {
            const store = useUserStore();
            store.ADD_SELECTED_ORGANIZATIONS(["ORG1", "ORG2"]);
            expect(store.selectedOrganizations).toEqual(["ORG1", "ORG2"])
        })
    })

    describe("ADD_SELECTED_JOB_TYPES", () => {
        it("updates job types the user has chosen to filter jobs by", () => {
            const store = useUserStore();
            store.ADD_SELECTED_JOB_TYPES(["Full-time", "part-time"]);

            expect(store.selectedJobTypes).toEqual(["Full-time", "part-time"])
        })
    })

    describe("ADD_SELECTED_DEGREE", () => {
        it.only("updates degrees the user has chosen to filter jobs by", () => {
            const store = useUserStore();
            store.ADD_SELECTED_DEGREE_TYPE(["Master's", "Bachelor's"]);

            expect(store.selectedDegreeType).toEqual(["Master's", "Bachelor's"])
        })
    })

    describe("CLEAR_USER_JOB_SELECTIONS", () => {
        it("removes all job filters that user has chosen", () => {
            const store = useUserStore();
            store.selectedDegrees = ["Random degree"];
            store.selectedJobTypes = ["Random job type"];
            store.selectedOrganizations = ["Random organizations"];

            store.CLEAR_USER_JOB_SELECTIONS();

            expect(store.selectedDegrees).toEqual([]);
            expect(store.selectedJobTypes).toEqual([]);
            expect(store.selectedOrganizations).toEqual([]);
        })

    })
})