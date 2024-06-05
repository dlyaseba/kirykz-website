import { loadTranslations } from '$lib/translations';
import { get } from "svelte/store";
import { localLanguage } from "./../store";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ url }) => {
    const { pathname } = url;

    const initLocale = get(localLanguage);

    await loadTranslations(initLocale, pathname); // keep this just before the `return`

    return {};
}