interface ApiResponse<T> {
    data?: T;
    error?: string;
}

class CmsApiClient {
    private baseUrl: string;

    constructor() {
        this.baseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL || 'http://localhost:3002';
    }

    private async request<T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<ApiResponse<T>> {
        try {
            const url = `${this.baseUrl}/api${endpoint}`;
            const response = await fetch(url, {
                ...options,
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers,
                },
            });



            const data = await response.json();

            if (!response.ok) {
                return { error: data.error || `HTTP ${response.status}` };
            }

            return { data };
        } catch (error) {
            console.error('CMS API request error:', error);
            return { error: 'Network error' };
        }
    }

    // Public endpoints - no authentication required
    async getSpeakers(yearId: string) {
        return this.request(`/speakers?yearId=${yearId}`);
    }

    async getAgenda(yearId: string) {
        return this.request(`/agenda?yearId=${yearId}`);
    }

    async getSponsors(yearId: string) {
        return this.request(`/sponsors?yearId=${yearId}`);
    }

    async getGallery(yearId: string) {
        return this.request(`/gallery?yearId=${yearId}`);
    }

    async getOrganizers(yearId: string) {
        return this.request(`/organizers?yearId=${yearId}`);
    }

    async getVolunteers(yearId: string) {
        return this.request(`/volunteers?yearId=${yearId}`);
    }

    async getVenue(yearId: string) {
        return this.request(`/venue?yearId=${yearId}`);
    }

    async getContactInfo(yearId: string) {
        return this.request(`/contact?yearId=${yearId}`);
    }

    async getSettings(yearId: string) {
        return this.request(`/settings?yearId=${yearId}`);
    }

    async getYears() {
        return this.request('/years');
    }

    async getCurrentYear() {
        const yearsResponse = await this.getYears();
        if (yearsResponse.data && yearsResponse.data?.length > 0) {
            // Return the latest year (assuming they're ordered by creation date)
            return { data: yearsResponse.data[0] };
        }
        return { error: 'No years found' };
    }

    // Helper to get all event data for a specific year
    async getEventData(yearId: string) {
        const [
            speakers,
            agenda,
            sponsors,
            gallery,
            organizers,
            volunteers,
            venue,
            contact,
            settings
        ] = await Promise.all([
            this.getSpeakers(yearId),
            this.getAgenda(yearId),
            this.getSponsors(yearId),
            this.getGallery(yearId),
            this.getOrganizers(yearId),
            this.getVolunteers(yearId),
            this.getVenue(yearId),
            this.getContactInfo(yearId),
            this.getSettings(yearId)
        ]);

        return {
            speakers: speakers.data || [],
            agenda: agenda.data || [],
            sponsors: sponsors.data || [],
            gallery: gallery.data || [],
            organizers: organizers.data || [],
            volunteers: volunteers.data || [],
            venue: venue.data || null,
            contact: contact.data || null,
            settings: settings.data || null
        };
    }
}

export const cmsApi = new CmsApiClient();