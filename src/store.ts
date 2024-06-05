import { persisted } from 'svelte-persisted-store';

export const localLanguage = persisted('app-language', "");