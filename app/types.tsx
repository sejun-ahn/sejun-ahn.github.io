export interface Publication {
    id: string;
    title: string;
    authors: string[];
    date: string;           // ISO date string (YYYY-MM-DD), used for sorting
    venue: string;          // name of the journal/conference/workshop
    venue_type: "journal" | "conference" | "workshop" | "preprint"; // type of venue
    project_page?: string | null;  // optional link to project page
    code?: string | null;          // optional link to code repository
    pdf?: string | null;           // optional link to PDF
    video?: string | null;         // optional link to video
    poster?: string | null;        // optional link to poster
    thumbnail?: string | null;     // optional 4:3 thumbnail image path
}
