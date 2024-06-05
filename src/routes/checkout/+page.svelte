<script>
    import { t } from "$lib/translations";
    import lockimg from "$lib/assets/lock2.png";

    let isFormFilled = false;
    let customerName = "";
    let customerAddress = "";
    let customerApartment = "";
    let customerPhone = "";
    let customerComment = "";

    const onFormUpdate = () => {
        if (
            customerName !== "" &&
            customerAddress !== "" &&
            customerApartment !== "" &&
            customerPhone !== ""
        ) {
            isFormFilled = true;
        } else {
            isFormFilled = false;
        }
    };

    $: orderQty = 1;
    const price = 24990;
    const delivery = 990;
    $: total = orderQty * price + delivery;

    const addQty = () => {
        orderQty = orderQty + 1;
    };

    const decQty = () => {
        if (orderQty > 1) orderQty = orderQty - 1;
    };

    const submitForm = () => {
        console.log("Form sent!");
    }
</script>

<div class="div-checkout" id="new-order">
    <div class="div-checkout-2">
        <div class="div-checkout-3">
            <div class="div-checkout-4">{$t("main.new_order")}</div>
            <div class="div-checkout-5">{$t("main.new_order_d")}</div>
            <input
                type="text"
                on:input={onFormUpdate}
                bind:value={customerName}
                class:div-checkout-input-filled={customerName !== ""}
                class="div-checkout-input"
                placeholder={$t("main.cus_name")}
            />
            <input
                type="text"
                on:input={onFormUpdate}
                bind:value={customerAddress}
                class:div-checkout-input-filled={customerAddress !== ""}
                class="div-checkout-input"
                placeholder={$t("main.cus_adr")}
            />
            <input
                type="text"
                on:input={onFormUpdate}
                bind:value={customerApartment}
                class:div-checkout-input-filled={customerApartment !== ""}
                class="div-checkout-input"
                placeholder={$t("main.cus_apt")}
            />
            <input
                type="text"
                on:input={onFormUpdate}
                bind:value={customerPhone}
                class:div-checkout-input-filled={customerPhone !== ""}
                class="div-checkout-input"
                placeholder={$t("main.cus_phone")}
            />
            <input
                type="text"
                on:input={onFormUpdate}
                bind:value={customerComment}
                class:div-checkout-input-filled={customerComment !== ""}
                class="div-checkout-input comment-area"
                placeholder={$t("main.cus_comment")}
            />
        </div>
        <div class="div-checkout-11"></div>
        <div class="div-checkout-12">
            <img
                alt="kiry.kz smart lock"
                loading="lazy"
                srcset={lockimg}
                class="img"
            />
            <div class="div-checkout-13">{$t("main.smart_lock")} Kiry.kz</div>
            <div class="div-checkout-14">
                {$t("main.smart_lock_d")}.
            </div>
            <div class="div-checkout-15">
                {$t("main.smart_lock_price")}
                <span style="font-weight: 700">{price}</span>
                ₸
            </div>
        </div>
        <div class="div-checkout-16"></div>
        <div class="div-checkout-17">
            <div class="div-checkout-18">
                <div class="div-checkout-19">{$t("main.qty")}</div>
                <button on:click={decQty} class="div-checkout-redbox">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5 12h14"
                        />
                    </svg>
                </button>
                <div class="div-checkout-21">{orderQty}</div>
                <button on:click={addQty} class="div-checkout-redbox">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                        />
                    </svg>
                </button>
            </div>
            <div class="div-checkout-23">
                {orderQty}
                {#if orderQty == 1}
                    {$t("main.pack1")}
                {:else if orderQty > 1 && orderQty < 5}
                    {$t("main.pack2")}
                {:else}
                    {$t("main.pack3")}
                {/if}
                х {price} ₸ + {$t("main.delivery")}
                {delivery} ₸
            </div>
            <div class="div-checkout-24">{$t("main.total")} {total}</div>

            <button
                on:click={submitForm}
                disabled={!isFormFilled}
                class="div-checkout-26"
                class:div-checkout-26-disabled={!isFormFilled}
                >{$t("main.pay")}</button
            >

            <div class="div-checkout-25">
                {$t("main.agree1")}
                <a
                    class="div-checkout-25-link"
                    target="_blank"
                    href="https://kiry.kz">{$t("main.agree2")}</a
                >
            </div>
        </div>
    </div>
</div>
