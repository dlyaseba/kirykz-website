<script>
    import { t } from "$lib/translations";

    import lockimg from '$lib/assets/lock.png';
    import backgroundimg from '$lib/assets/background.svg';
    import playmarket from '$lib/assets/playmarket.svg';
    import appstore from '$lib/assets/appstore.svg';
</script>

<div class="div-6">
    <div class="div-7">
        {$t("main.about")}
    </div>
    <img
        alt="Kiry.kz"
        srcset={lockimg}
        class="img"
    />
    <a href="/checkout#new-order">
        <div class="div-8">{$t("main.order")}</div>
    </a>
</div>
<div class="div-9">
    {$t("main.3steps")}:
</div>
<div class="div-10">
    <div class="div-11">1. {$t("main.install_lock")}</div>
    <div class="div-12">{$t("main.install_lock_d")}</div>
    <div class="div-13">~15 {$t("main.install_lock_t")}</div>
</div>
<div class="div-14">
    <div class="div-15">2. {$t("main.share_payment")}</div>
    <div class="div-16">
        {$t("main.share_payment_d")}
    </div>
    <div class="div-17">1 {$t("main.share_payment_t")}</div>
</div>
<div class="div-18">
    <div class="div-19">
        3.
        <span style="font-weight: 700">{$t("main.rent_income")}</span>
        {$t("main.rent_income2")}
    </div>
    <div class="div-20">{$t("main.rent_income_d")}</div>
    <div class="div-21">24/7</div>
</div>
<div class="div-22">
    <div class="div-23">{$t("main.make_order")}</div>
    <div class="div-24">{$t("main.make_order_d")}</div>
</div>
<div class="div-25">
    <img
        src={backgroundimg}
        class="img-2"
        alt="Kiry.kz App Download Background"
    />
    <div class="div-26">{$t("main.download_app")} Kiry.kz</div>
    <div class="div-27">
        {$t("main.download_app_d")}
    </div>
    <div class="div-28">
        <a href="https://cdn.kiry.kz/d/about.pdf" target="_blank"
            >{$t("main.download_app_more")}</a
        >
    </div>
    <a href="https://kiry.kz?to=play+market" target="_blank">
        <img
            src={playmarket}
            class="img-3"
            alt="Kiry.kz on Google Play Market"
        />
    </a>
    <a href="https://kiry.kz?to=app+store" target="_blank">
        <img
            src={appstore}
            class="img-4"
            alt="Kiry.kz on Apple App Store"
        />
    </a>
    <div class="div-29">
        <a href="https://cdn.kiry.kz/d/kiry.apk" target="_blank">
            {$t("main.download_app_link")}
        </a>
    </div>
</div>
<div class="div-30">
    {$t("main.customer_reviews")}
    <br />
    {$t("main.customer_reviews2")}
</div>
<a href="https://go.2gis.com/hsno3" class="div-31" target="_blank">
    {$t("main.read_reviews")}
</a>
