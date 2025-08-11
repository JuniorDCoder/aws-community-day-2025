import Header from "./sections/header";
import ClientLayout from "./client-layout";
import Footer from "./sections/footer";
import ScrollToTop from "./scroll-to-top";
import { getDictionary } from '@/lib/i18n'

export default async function LayoutContent({ children, lang }) {
    const dict = await getDictionary(lang)

    return (
        <ClientLayout>
            <Header lang={lang} dict={dict} />
            {children}
            <Footer lang={lang} dict={dict} />
            <ScrollToTop />
        </ClientLayout>
    );
}