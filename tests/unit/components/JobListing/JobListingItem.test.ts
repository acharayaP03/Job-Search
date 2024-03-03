import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";
import { JobListingItem } from "../../../../src/components/JobResults";
import type { Job } from "@/api/types";

import { createJob } from "../../../utility/createJob";

describe("JobListing", () => {

    const renderJobListingItem = (job: Job) => {
        render(JobListingItem, {
            global: {
                stubs: {
                    "router-link": RouterLinkStub
                }
            },
            props: {
                job: {
                    ...job
                }
            },
        })
    }
    it("renders job title", () => {
        const jobProps = createJob({ title: "Angular Developer" })
        renderJobListingItem(jobProps)
        expect(screen.getByText("VueJs Developer")).toBeInTheDocument()
    })

    it("renders job organization", () => {
        const jobProps = createJob({ organization: "Trishten Tech" })
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