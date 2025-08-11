export const locales = ['en', 'fr']
export const defaultLocale = 'en'

const dictionaries = {
    en: () => import('../dictionaries/en.json').then((module) => module.default),
    fr: () => import('../dictionaries/fr.json').then((module) => module.default),
}

export const getDictionary = async (locale) => {
    if (!dictionaries[locale]) {
        return dictionaries[defaultLocale]()
    }
    return dictionaries[locale]()
}