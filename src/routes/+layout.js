import { loadTranslations } from '$lib/translations';
import { get } from "svelte/store";
import { languageLocale } from "./../store";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ url }) => {
    const { pathname } = url;

    const initLocale = get(languageLocale);

    await loadTranslations(initLocale, pathname); // keep this just before the `return`

    return {};
}