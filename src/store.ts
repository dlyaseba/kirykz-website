import { persisted } from 'svelte-persisted-store';

export const languageLocale = persisted('language-locale', "ru-RU");
export const langaugeSet = persisted('language-set', false);