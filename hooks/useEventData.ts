import { useState, useEffect } from 'react';
import { cmsApi } from '@/lib/cms-api';

export function useEventData(yearId?: string) {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                setError(null);

                let targetYearId = yearId;

                // If no yearId provided, get current year
                if (!targetYearId) {
                    const currentYear = await cmsApi.getCurrentYear();
                    if (currentYear.error || !currentYear.data) {
                        throw new Error(currentYear.error || 'No current year found');
                    }
                    targetYearId = currentYear.data.id;
                }

                // Fetch all event data for the year
                const eventData = await cmsApi.getEventData(targetYearId);
                setData(eventData);

            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch event data');
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [yearId]);

    return { data, loading, error };
}