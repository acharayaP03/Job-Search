import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";
import {JobListingItem} from "../../../../src/components/JobResults";

describe("JobListing", () => {

    const createJobProps = (jobProps = {}) => ({
        title: "Vue Developer",
        organization: "Air BnB",
        ...jobProps
    })
    const renderJobListingItem = (jobProps) => {
        render(JobListingItem, {
            global : {
                stubs: {
                    "router-link": RouterLinkStub
                }
            },
            props: {
                job: {
                    ...jobProps
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
        const jobProps = createJobProps({ title: "VueJs Developer"})
        renderJobListingItem(jobProps)
        expect(screen.getByText("VueJs Developer")).toBeInTheDocument()
    })

    it("renders job organization", () => {
        const jobProps = createJobProps({ organization: "Trishten Tech"})
        renderJobListingItem(jobProps)
        expect(screen.getByText("Trishten Tech")).toBeInTheDocument()
    })

    it("renders job locations", () => {
        const jobProps = createJobProps({
            locations: ["Lidcombe", "Sydney"]
        })
        renderJobListingItem(jobProps)
        expect(screen.getByText("Lidcombe")).toBeInTheDocument()
        expect(screen.getByText("Sydney")).toBeInTheDocument()
    })

    it("renders job qualifications", () => {
        const jobProps = createJobProps({
            preferredQualifications: ["Code", "Develop"]
        });
        renderJobListingItem(jobProps);
        expect(screen.getByText("Code")).toBeInTheDocument()
        expect(screen.getByText("Develop")).toBeInTheDocument()
    })
})