import Header from "./sections/header";
import ClientLayout from "./client-layout";
import Footer from "./sections/footer";
import ScrollToTop from "./scroll-to-top";
import { getDictionary } from '@/lib/i18n'
import { getContactData } from '@/lib/cms-data'

export default async function LayoutContent({ children, lang }) {
    const [dict, contactData] = await Promise.all([
        getDictionary(lang),
        getContactData() // Fetch contact data
    ]);

    return (
        <ClientLayout>
            <Header lang={lang} dict={dict} />
            {children}
            <Footer
                lang={lang}
                dict={dict}
                contactData={contactData} // Pass contact data to footer
            />
            <ScrollToTop />
        </ClientLayout>
    );
}