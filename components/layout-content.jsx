import Header from "./sections/header";
import ClientLayout from "./client-layout";
import Footer from "./sections/footer";
import ScrollToTop from "./scroll-to-top";
import { getDictionary } from '@/lib/i18n'
import { getContactData, getEventData } from '@/lib/cms-data'

export default async function LayoutContent({ children, lang }) {
    const [dict, contactData, eventData] = await Promise.all([
        getDictionary(lang),
        getContactData(), // Fetch contact data for footer
        getEventData() // Fetch event data for RSVP link in header
    ]);

    return (
        <ClientLayout>
            <Header
                lang={lang}
                dict={dict}
                eventData={eventData} // Pass event data with RSVP link
            />
            {children}
            <Footer
                lang={lang}
                dict={dict}
                contactData={contactData}
            />
            <ScrollToTop />
        </ClientLayout>
    );
}