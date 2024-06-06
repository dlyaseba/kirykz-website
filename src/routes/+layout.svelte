<script>
    import "../app.css";
    import "@fontsource/roboto/100.css";
    import "@fontsource/roboto/300.css";
    import "@fontsource/roboto/400.css";
    import "@fontsource/roboto/500.css";
    import "@fontsource/roboto/700.css";
    import "@fontsource/roboto/900.css";
    import "@fontsource/abel";

    import { get } from "svelte/store";
    import { languageLocale } from "./../store";
    import { langaugeSet } from "./../store";
    import { t } from "$lib/translations";
    import { invalidateAll } from "$app/navigation";
    import getUserLocale from "get-user-locale";


    const userLocale = getUserLocale({
        fallbackLocale: "ru-RU",
    });

    if (get(langaugeSet) == false) languageLocale.set(userLocale);

    $: languageSelected = get(languageLocale);

    const langaugeOptions = [
        { id: "ru-RU", value: "Русский" },
        { id: "en-EN", value: "English" },
        { id: "kk-KZ", value: "Қазақша" },
    ];
    const changeLanguage = () => {
        languageLocale.set(languageSelected);
        invalidateAll();
    };
</script>

<div class="div">
    <div class="div-2">
        <div class="div-3">KIRY.KZ</div>
        <a class="div-4" href="/checkout#new-order">{$t("main.buy")} </a>
        <div class="div-5">
            <a href="tel:+77050123456">+7 705 0123456</a>
        </div>

        <form class="max-w-sm mx-auto mt-10">
            <select
                id="countries"
                class="text-l bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                bind:value={languageSelected}
                on:change={changeLanguage}
            >
                {#each langaugeOptions as option}
                    <option value={option.id}>{option.value}</option>
                {/each}
            </select>
        </form>
    </div>

    <slot />
    <div class="div-32">
        <div class="div-33">{$t("main.contacts")}</div>
        <div class="div-34">
            {$t("main.company")}
            <br />
            {$t("main.iin")}: 23409230220
            <br />
            {$t("main.address")}
            <br />
            {$t("main.tel")}: <a href="tel:+7700923924">+7700923924</a>
            <br />
            Email: support@kiry.kz
            <br />
            <br />
            Kiry.kz © 2024
        </div>
    </div>
</div>
