import { createPinia, setActivePinia } from "pinia"
import axios from "axios";

import { useJobsStore} from "../../../src/stores/jobs";
import {useUserStore} from "../../../src/stores/user";

vi.mock("axios")
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
            axios.get.mockResolvedValue({ data: ["Job1", "Job2"]});
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
                { organization: "Google" },
                { organization: "Amazon" },
                { organization: "Google" },
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
                const job = { organization: 'Google'};

                const result = store.INCLUDE_JOB_BY_ORGANIZATION(job);

                expect(result).toBe(true)
            })
        })
        it("identifies if job is associated with given organization", () => {
            const userStore = useUserStore();
            userStore.selectedOrganizations = ["Google", "Microsoft"];
            const store = useJobsStore();
            const job = { organization: 'Google'};

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
                const job = { jobType: 'Full-time'};

                const result = store.INCLUDE_JOB_BY_JOB_TYPE(job);

                expect(result).toBe(true)
            })
        });

        it("identifies if job is associated with given job type", () => {
            const userStore = useUserStore();
            userStore.selectedJobTypes = ['Full-time'];
            const store = useJobsStore();
            const job = { jobType: 'Full-time'};

            const result = store.INCLUDE_JOB_BY_JOB_TYPE(job);

            expect(result).toBe(true)
        })
    })

    describe('UNIQUE_JOB_TYPES', () => {
        it("finds unique job types from list of jobs", () => {
            const store = useJobsStore();
            store.jobs = [
                { jobType: "Full-time" },
                { jobType: 'Temporary' },
                { jobType: 'Full-time' }
            ];

            const result = store.UNIQUE_JOB_TYPES;

            expect(result).toEqual(new Set(["Full-time", "Temporary"]))
        })
    })

    describe("FILTERED_JOBS_BY_ORGANIZATIONS", () => {
        it("identifies jobs that are associated with the given organizations", () => {
            const jobsStore = useJobsStore();
            jobsStore.jobs = [
                { organization: 'Google' },
                { organization: 'Amazon' },
                { organization: 'Microsoft'}
            ]

            const userStore = useUserStore();
            userStore.selectedOrganizations = ["Google", "Microsoft"];

            const result = jobsStore.FILTERED_JOBS_BY_ORGANIZATIONS;

            expect(result).toEqual([
                { organization: 'Google' },
                { organization: 'Microsoft'}
            ])
        });

        describe("when the user has not selected any organizations", () => {
            it("returs all jobs", () => {
                const jobsStore = useJobsStore();
                jobsStore.jobs = [
                    { organization: 'Google' },
                    { organization: 'Amazon' },
                    { organization: 'Microsoft'}
                ]

                const userStore = useUserStore();
                userStore.selectedOrganizations = [];

                const result = jobsStore.FILTERED_JOBS_BY_ORGANIZATIONS;
                expect(result).toEqual([
                    { organization: 'Google' },
                    { organization: 'Amazon' },
                    { organization: 'Microsoft'}
                ])
            })
        })
    });

    describe('FILTERED_JOBS_BY_JOB_TYPES', () => {
        it("identifies jobs that are associated with given job types", () => {
            const jobsStore = useJobsStore();
            jobsStore.jobs = [
                { jobType: "Full-time" },
                { jobType: "Temporary" },
                { jobType: "Part-time" }
            ];
            const userStore = useUserStore();
            userStore.selectedJobTypes = ["Full-time", "Part-time"];

            const result = jobsStore.FILTERED_JOBS_BY_JOB_TYPES;

            expect(result).toEqual([
                { jobType: "Full-time" },
                { jobType: "Part-time" }
            ])
        });

        describe("when user has not selected any job types", () => {
            it("returns all jobs", () => {
                const jobsStore = useJobsStore();
                jobsStore.jobs = [
                    { jobType: "Full-time" },
                    { jobType: "Temporary" },
                    { jobType: "Part-time" }
                ];
                const userStore = useUserStore();
                userStore.selectedJobTypes = [];

                const result = jobsStore.FILTERED_JOBS_BY_JOB_TYPES;

                expect(result).toEqual([
                    { jobType: "Full-time" },
                    { jobType: "Temporary" },
                    { jobType: "Part-time" }
                ])
            })
        })
    })
})

