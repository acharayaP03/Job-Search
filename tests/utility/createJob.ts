import type { Job } from "../../src/api/types";

/**
 * create a typescript partials
 * Partials will create a generics from the existing interface making its properties options.
 * also it create a typesafety that you can reference to any existing property but cannot add new
 */
export const createJob = (job : Partial<Job> = {}): Job => ({
    id: 1,
    title: "Angular Developer",
    organization: "Vue and Me",
    degree: "Master's",
    jobType: "Intern",
    locations: ["Lisbon"],
    minimumQualification: [
        "Mesh granular deliverables, engineer enterprise convergence, and synergize B2C initiatives",
    ],
    preferredQualification: [
        "Mesh wireless metrics, syndicate innovative markets, and disintermediate intuitive niches",
    ],
    description: [
        "Away someone forget effect wait land.",
    ],
    dateAdded: "2021-07-04",
    ...job
})