'use client'

import { useRouter, usePathname } from 'next/navigation'

export default function LanguageSwitcher({ currentLang }) {
    const router = useRouter()
    const pathname = usePathname()

    const handleLanguageChange = (newLang) => {
        // Remove the current language from the pathname
        const pathWithoutLang = pathname.replace(`/${currentLang}`, '')
        // Navigate to the same path with the new language
        router.push(`/${newLang}${pathWithoutLang}`)
    }

    const toggleLang = () => {
        const newLang = currentLang === 'en' ? 'fr' : 'en';
        handleLanguageChange(newLang);
    };

    return (
        <button
            onClick={toggleLang}
            className="ml-4 text-white underline underline-offset-4"
        >
            {currentLang === 'en' ? 'Fr' : 'En'}
        </button>
    )
}