// lib/cms-data.ts
import { cmsApi } from "@/lib/cms-api";

// Helper function to get current year
async function getCurrentYearData() {
    const currentYear = await cmsApi.getCurrentYear();
    if (currentYear.error || !currentYear.data) {
        console.error("Error fetching current year:", currentYear.error);
        return null;
    }
    return currentYear.data;
}

// Gallery Data
export async function getGalleryData() {
    try {
        const currentYear = await getCurrentYearData();
        if (!currentYear) return { galleryImages: [] };

        const galleryResponse = await cmsApi.getGallery(currentYear.id);
        if (galleryResponse.error) {
            console.error("Error fetching gallery:", galleryResponse.error);
            return { galleryImages: [] };
        }

        return {
            galleryImages: galleryResponse.data || [],
        };
    } catch (error) {
        console.error("Error fetching gallery data:", error);
        return { galleryImages: [] };
    }
}

// Event Data (Settings)
export async function getEventData() {
    try {
        const currentYear = await getCurrentYearData();
        if (!currentYear) return null;

        const settingsResponse = await cmsApi.getSettings(currentYear.id);
        if (settingsResponse.error || !settingsResponse.data) {
            console.error('Error fetching settings:', settingsResponse.error);
            return null;
        }

        return {
            yearId: currentYear.id,
            settings: settingsResponse.data,
            currentYear: currentYear
        };
    } catch (error) {
        console.error('Error fetching event data:', error);
        return null;
    }
}

// Volunteers Data
export async function getVolunteersData() {
    try {
        const currentYear = await getCurrentYearData();
        if (!currentYear) return { volunteers: [] };

        const volunteersResponse = await cmsApi.getVolunteers(currentYear.id);
        if (volunteersResponse.error) {
            console.error("Error fetching volunteers:", volunteersResponse.error);
            return { volunteers: [] };
        }

        return {
            volunteers: volunteersResponse.data || [],
        };
    } catch (error) {
        console.error("Error fetching volunteers data:", error);
        return { volunteers: [] };
    }
}

// Speakers Data
export async function getSpeakersData() {
    try {
        const currentYear = await getCurrentYearData();
        if (!currentYear) return { speakers: [] };

        const speakersResponse = await cmsApi.getSpeakers(currentYear.id);
        if (speakersResponse.error) {
            console.error("Error fetching speakers:", speakersResponse.error);
            return { speakers: [] };
        }

        return {
            speakers: speakersResponse.data || [],
        };
    } catch (error) {
        console.error("Error fetching speakers data:", error);
        return { speakers: [] };
    }
}

// Agenda Data
export async function getAgendaData() {
    try {
        const currentYear = await getCurrentYearData();
        if (!currentYear) return { agenda: [] };

        const agendaResponse = await cmsApi.getAgenda(currentYear.id);
        if (agendaResponse.error) {
            console.error("Error fetching agenda:", agendaResponse.error);
            return { agenda: [] };
        }

        return {
            agenda: agendaResponse.data || [],
        };
    } catch (error) {
        console.error("Error fetching agenda data:", error);
        return { agenda: [] };
    }
}

// Sponsors Data
export async function getSponsorsData() {
    try {
        const currentYear = await getCurrentYearData();
        if (!currentYear) return { sponsors: [] };

        const sponsorsResponse = await cmsApi.getSponsors(currentYear.id);
        if (sponsorsResponse.error) {
            console.error("Error fetching sponsors:", sponsorsResponse.error);
            return { sponsors: [] };
        }

        return {
            sponsors: sponsorsResponse.data || [],
        };
    } catch (error) {
        console.error("Error fetching sponsors data:", error);
        return { sponsors: [] };
    }
}

// Organizers Data
export async function getOrganizersData() {
    try {
        const currentYear = await getCurrentYearData();
        if (!currentYear) return { organizers: [] };

        const organizersResponse = await cmsApi.getOrganizers(currentYear.id);
        if (organizersResponse.error) {
            console.error("Error fetching organizers:", organizersResponse.error);
            return { organizers: [] };
        }

        return {
            organizers: organizersResponse.data || [],
        };
    } catch (error) {
        console.error("Error fetching organizers data:", error);
        return { organizers: [] };
    }
}

// Venue Data
export async function getVenueData() {
    try {
        const currentYear = await getCurrentYearData();
        if (!currentYear) return { venue: null };

        const venueResponse = await cmsApi.getVenue(currentYear.id);
        if (venueResponse.error) {
            console.error("Error fetching venue:", venueResponse.error);
            return { venue: null };
        }

        return {
            venue: venueResponse.data || null,
        };
    } catch (error) {
        console.error("Error fetching venue data:", error);
        return { venue: null };
    }
}

// Contact Data
export async function getContactData() {
    try {
        const currentYear = await getCurrentYearData();
        if (!currentYear) return { contact: null };

        const contactResponse = await cmsApi.getContactInfo(currentYear.id);
        if (contactResponse.error) {
            console.error("Error fetching contact:", contactResponse.error);
            return { contact: null };
        }

        return {
            contact: contactResponse.data || null,
        };
    } catch (error) {
        console.error("Error fetching contact data:", error);
        return { contact: null };
    }
}

// Settings Data (for event settings)
export async function getSettingsData(){
    try{
        const currentYear = await getCurrentYearData();
        if (!currentYear) return { settings: null };

        const settingsResponse = await cmsApi.getSettings(currentYear.id);
        if (settingsResponse.error || !settingsResponse.data) {
            console.error('Error fetching settings:', settingsResponse.error);
            return { settings: null };
        }

        return {
            settings: settingsResponse.data || null,
        };
    } catch (error) {
        console.error('Error fetching settings data:', error);
        return { settings: null };
    }
}