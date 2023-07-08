import type { Mock } from "vitest";
import { createPinia, setActivePinia } from "pinia"
import axios from "axios";

import { useJobsStore} from "../../../src/stores/jobs";
import {useUserStore} from "../../../src/stores/user";
import { createJob } from "../../utility/createJob";

vi.mock("axios");
const axiosGetMock = axios.get as Mock;

describe("state", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    })

    it("stores job lisitngs", () => {
        const store = useJobsStore();
        expect(store.jobs).toEqual([])
    })
});

describe("actions", ()=>{
    beforeEach(() => {
        setActivePinia(createPinia());
    })

    describe("FETCH_JOBS", () => {
        it("makes api request and store received jobs", async () =>{
            axiosGetMock.mockResolvedValue({ data: ["Job1", "Job2"]});
            const store = useJobsStore();
            await store.FETCH_JOBS();
            expect(store.jobs).toEqual(["Job1", "Job2"])
        })
    })
})


describe("getters", () => {

    beforeEach(() => {
        setActivePinia(createPinia());
    })

    describe('UNIQUE_ORGANIZATIONS', () => {
        it("finds unique organization from list of jobs", () => {
            const store = useJobsStore();

            store.jobs = [
                createJob({ organization: "Google" }),
                createJob({ organization: "Amazon" }),
                createJob({ organization: "Google" }),
            ];

            const result = store.UNIQUE_ORGANIZATIONS;

            expect(result).toEqual(new Set(["Google", "Amazon"]));
        })
    });

    describe("INCLUDE_JOB_BY_ORGANIZATION", () => {
        describe("when the user has not selected any organizations", () => {
            it("includes jobs", () => {
                const userStore = useUserStore();
                userStore.selectedOrganizations = [];
                const store = useJobsStore();
                const job = createJob({ organization: 'Google'});

                const result = store.INCLUDE_JOB_BY_ORGANIZATION(job);

                expect(result).toBe(true)
            })
        })
        it("identifies if job is associated with given organization", () => {
            const userStore = useUserStore();
            userStore.selectedOrganizations = ["Google", "Microsoft"];
            const store = useJobsStore();
            const job = createJob({ organization: 'Google'});

            const result = store.INCLUDE_JOB_BY_ORGANIZATION(job);

            expect(result).toBe(true)
        })
    })

    describe('INCLUDE_JOB_BY_JOB_TYPE', () => {
        describe("when the user has not selected any job types", () => {
            it("includes jobs", () => {
                const userStore = useUserStore();
                userStore.selectedJobTypes = [];
                const store = useJobsStore();
                const job = createJob({ jobType: 'Full-time'});

                const result = store.INCLUDE_JOB_BY_JOB_TYPE(job);

                expect(result).toBe(true)
            })
        });

        it("identifies if job is associated with given job type", () => {
            const userStore = useUserStore();
            userStore.selectedJobTypes = ['Full-time'];
            const store = useJobsStore();
            const job = createJob({ jobType: 'Full-time'});

            const result = store.INCLUDE_JOB_BY_JOB_TYPE(job);

            expect(result).toBe(true)
        })
    })

    describe('UNIQUE_JOB_TYPES', () => {
        it("finds unique job types from list of jobs", () => {
            const store = useJobsStore();
            store.jobs = [
                createJob({ jobType: "Full-time" }),
                createJob({ jobType: "Temporary" }),
                createJob({ jobType: 'Full-time' })
            ]

            const result = store.UNIQUE_JOB_TYPES;

            expect(result).toEqual(new Set(["Full-time", "Temporary"]))
        })
    })
})

