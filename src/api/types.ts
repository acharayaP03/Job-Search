export interface Job {
    id: number;
    title: string;
    organization: string;
    degree: string;
    jobType: string;
    locations: string[];
    minimumQualification: string[];
    preferredQualification: string[];
    description: string[];
    dateAdded: string
}

export interface Degree {
    id: number | string;
    degree: string
}