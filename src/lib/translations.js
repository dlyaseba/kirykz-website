import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = ({
    loaders: [
        {
            locale: 'en-EN',
            key: 'main',
            loader: async () => (
                await import('./translations/en-EN/main.json')
            ).default,
        },
        {
            locale: 'ru-RU',
            key: 'main',
            loader: async () => (
                await import('./translations/ru-RU/main.json')
            ).default,
        },
        {
            locale: 'kk-KZ',
            key: 'main',
            loader: async () => (
                await import('./translations/kk-KZ/main.json')
            ).default,
        }
    ],
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);