import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";
import {JobListingItem} from "../../../../src/components/JobResults";
import type { Job } from "@/api/types";

import { createJob } from "../../../utility/createJob";

describe("JobListing", () => {

    const renderJobListingItem = (job: Job) => {
        render(JobListingItem, {
            global : {
                stubs: {
                    "router-link": RouterLinkStub
                }
            },
            props: {
                job: {
                    ...job
                }
            },
            computed: {
                title() {
                    return this.job.title;
                },
                organization() {
                    return this.job.organization
                },
                getJobUrl() {
                    return `/jobs/results/${this.job.id}`
                },
            }
        })
    }
    it("renders job title", () => {
        const jobProps = createJob({ title: "VueJs Developer"})
        renderJobListingItem(jobProps)
        expect(screen.getByText("VueJs Developer")).toBeInTheDocument()
    })

    it("renders job organization", () => {
        const jobProps = createJob({ organization: "Trishten Tech"})
        renderJobListingItem(jobProps)
        expect(screen.getByText("Trishten Tech")).toBeInTheDocument()
    })

    it("renders job locations", () => {
        const jobProps = createJob({
            locations: ["Lidcombe", "Sydney"]
        })
        renderJobListingItem(jobProps)
        expect(screen.getByText("Lidcombe")).toBeInTheDocument()
        expect(screen.getByText("Sydney")).toBeInTheDocument()
    })

    it("renders job qualifications", () => {
        const jobProps = createJob({
            preferredQualification: ["Code", "Develop"]
        });
        renderJobListingItem(jobProps);
        expect(screen.getByText("Code")).toBeInTheDocument()
        expect(screen.getByText("Develop")).toBeInTheDocument()
    })
})