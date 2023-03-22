<template>
    <div class="contact page">
        <TopBar/>
        <div class="container">
            <Breadcrumbs/>
            <h2 class="title">Свяжитесь с нами</h2>

            <div class="contact-info">
                <div class="static-info">
                    <div class="item">
                        <h3>Позвоните нам</h3>
                        <div class="items">
                            <div class="item-box phone">
                                <img :src="require('@/assets/ycta-icons/phone.png')" alt="">
                                <a href="#">8 (918) 040 02-00</a>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <h3>Или напишите</h3>
                        <div class="items">
                            <div class="item-box wa">
                                <img :src="require('@/assets/ycta-pages/contact/wa.png')" alt="">
                                <a href="#">WhatsApp</a>
                            </div>
                            <div class="item-box telegram">
                                <img :src="require('@/assets/ycta-pages/contact/telegram.png')" alt="">
                                <a href="#">Telegram</a>
                            </div>
                            <div class="item-box email">
                                <img :src="require('@/assets/ycta-pages/contact/email.png')" alt="">
                                <a href="#">sd-usta@mail.ru</a>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <h3>Адрес</h3>
                        <p>Краснодарский край, г. Славянск-на-Кубани ул. Маевское шоссе 10/1</p>
                    </div>
                    <div class="item">
                        <h3>График работы</h3>
                        <div class="items">
                            <p>пн-пт 8.00-18.30</p>
                            <p>сб 8.00-17.00</p>
                        </div>
                    </div>
                </div>
                <div class="map">

                </div>
            </div>

            <ProductAbout :title="'Приходите к нам в гости в наш офис'"
                          :moreDescription="[
                          'В географическом центре Краснодарского края, в небольшом городке без пробок!',
                          'Мы поставляем газобетонный бллок, облицивочный кирпич, кровельные материалы, тротуарную плитку. Со своего склада, либо со складов производителей. География наших клиентов: Краснодарский край, Адыгея, Крым, Ставропольский край, Ростовкая область'
                          ]"
            />
            <Consultation/>
        </div>
        <Footer/>
    </div>
</template>

<script>
export default {
    name: "Contacts",
    components: {
        TopBar: () => import('@/components/TopBar.vue'),
        Footer: () => import("@/components/Footer.vue"),
        Breadcrumbs: () => import("@/components/Breadcrumbs.vue"),
        Consultation: () => import("@/components/Consultation.vue"),
        ProductAbout: () => import('@/components/ProductAbout')
    },
}
</script>

<style scoped>
.breadcrumbs {
    margin-top: 32px;
}

.contact-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin: 40px 0 80px;
}

.static-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
}

.static-info .item {
    min-height: 220px;
    border-radius: 12px;
    background: var(--white);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 24px;
}

.item h3 {
    font-weight: 500;
    font-size: 24px;
    line-height: 120%;
}

.item p {
    font-weight: 500;
}

.item-box {
    margin-bottom: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 12px;
}

.item-box {
    transition: all .3s ease-in-out;
}

.item-box a {
    transition: all .3s ease-in-out;
}

.item-box.phone img {
    filter: invert(2) sepia(5) saturate(5) hue-rotate(5deg);
}

.item-box.email:hover,
.item-box.phone:hover {
    opacity: .5;
}

.item-box.wa:hover a {
    color: #48C95F;
}

.item-box.telegram:hover a {
    color: #27A6E5;
}

.item-box:last-child {
    margin: 0;
}
</style>
