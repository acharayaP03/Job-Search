export interface Job {
    id: number;
    title: string;
    organization: string;
    degree: string;
    jobType: string;
    locations: string;
    minimumQualifications: string[];
    preferredQualification: string[];
    description: string[];
    dateAdded: string
}