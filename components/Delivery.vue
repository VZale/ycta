<template>
    <section class="delivery">
        <div class="container">
            <div class="item">
                <div class="content">
                    <h2>Доставка</h2>
                    <p>Отлаженная система доставки позволяет быстро и экономически выгодно доставить приобретенные
                        строительные
                        материалы в удобное для вас время. Доставка возможна манипулятором или длинномерным
                        транспортом</p>
                </div>
                <nuxt-link to="/" class="button black small">Подробнее о доставке</nuxt-link>
                <img :src="require('@/assets/ycta-icons/rocket.png')" alt="">
            </div>
            <div class="item">
                <div class="content">
                    <h2>Оплата</h2>
                    <ul>
                        <li>Картой и по QR-коду</li>
                        <li>Отсрочка платежа</li>
                        <li>Оплата наличными</li>
                        <li>По безналичному расчету с НДС</li>
                    </ul>
                </div>
                <nuxt-link to="/" class="button gray small">Подробнее об оплате</nuxt-link>
                <img :src="require('@/assets/ycta-icons/card.png')" alt="">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Delivery"
}
</script>

<style scoped>
.delivery {
    padding: 80px 0 120px;
    z-index: -1;
}

.delivery .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
}

.delivery .item {
    padding: 40px;
    background: var(--white);
    border-radius: 12px;
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 340px;
}

.delivery .item h2 {
    font-weight: 500;
    font-size: 52px;
    line-height: 105%;
    color: #32343B;
    margin-bottom: 24px;
}

.delivery .item p {
    line-height: 140%;
    color: #32343B;
}

.delivery ul {
    display: grid;
    grid-template-rows: repeat(2, max-content);
    grid-template-columns: repeat(2, max-content);
    gap: 12px;
}

.delivery ul li {
    list-style: disc;
    list-style-position: inside;
}

.delivery img {
    position: absolute;
    top: 20px;
    right: 20px;
}

.delivery a {
    font-size: 18px;
    font-weight: 500;
    width: max-content;
}

@media (max-width: 1000px) {
    .delivery {
        padding: 40px 0 60px;
    }
    .delivery .container {
        grid-template-columns: 1fr;
    }
    .button.black {
        background-color: var(--gray-2);
        color: var(--black);
    }
}
@media (max-width: 768px) {
    .delivery ul {
        grid-template-columns: 1fr;
    }
    .delivery .item h2 {
        font-weight: 500;
        font-size: 28px;
        line-height: 110%;
    }
    .delivery ul,
    .delivery p {
        margin-bottom: 24px;
        font-size: 16px;
        font-weight: 400;
    }
    button {
        font-size: 16px;
    }
    .delivery a {
        width: 100%;
        text-align: center;
        font-size: 16px;
    }
}
</style>
