<template>
    <footer>
        <div class="top">
            <div class="container">
                <img class="logo" :src="require('@/assets/ycta-logo-white.png')" alt="Logo">
                <div class="end">
                    <div class="item">
                        <p>Позвоните нам</p>
                        <NuxtLink to="/">
                            <img :src="require('@/assets/ycta-icons/phone.png')" alt="">
                            8 (918) 040 02-00
                        </NuxtLink>
                    </div>
                    <div class="item">
                        <p>Или напишите</p>
                        <a href="#">
                            <img :src="require('@/assets/ycta-icons/email.png')" alt="">
                            sd-usta@mail.ru
                        </a>
                    </div>
                    <div class="item">
                        <span></span>
                        <a href="#">
                            <img :src="require('@/assets/ycta-icons/wa.png')" alt="">
                            WhatsApp
                        </a>
                    </div>
                    <div class="item">
                        <span></span>
                        <a href="#">
                            <img :src="require('@/assets/ycta-icons/telegram.png')" alt="">
                            Telegram
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="footer-menu">
                <div class="item">
                    <p class="sub-menu">Каталог</p>
                    <ul class="menu-list">
                        <div class="left">
                            <li v-for="link in Object.values(pageData['categories']).slice(0, 5)">
                                <NuxtLink to="/">{{ link.name }}</NuxtLink>
                            </li>
                        </div>
                        <div class="right">
                            <li v-for="link in Object.values(pageData['categories']).slice(5, 10)">
                                <NuxtLink to="/">{{ link.name }}</NuxtLink>
                            </li>
                        </div>
                    </ul>
                </div>
                <div class="item">
                    <p class="sub-menu">Каталог</p>
                    <ul class="menu-list">
                        <div class="left">
                            <li>
                                <NuxtLink to="/about">О компании</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/guarantee">Доставка</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/payment">Оплата</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/contacts">Контакты</NuxtLink>
                            </li>
                        </div>
                    </ul>
                </div>
                <div class="contact-info">
                    <div class="item">
                        <p class="sub-menu">Адрес</p>
                        <p class="address">
                            Краснодарский край, г. Славянск-на-Кубани ул. Маевское шоссе 10/1
                        </p>
                    </div>
                    <div class="item">
                        <p class="sub-menu">График работы</p>
                        <p class="address">
                            пн-пт 8.00-18.30
                            <br>
                            сб 8.00-17.00
                        </p>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <p>© Строительный Двор «УСТА», 2023</p>
                <NuxtLink to="/privacy">Политика конфиденциальности</NuxtLink>
                <p>Сделано в <a href="https://enternaloptimist.com/">enternaloptimist.com</a></p>
            </div>
        </div>
    </footer>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "Footer",
    computed: {
        ...mapGetters(['pageData'])
    }
}
</script>

<style scoped>
footer {
    padding: 32px 0;
    background: #32343B;
    color: var(--white);
}

footer .top {
    padding-bottom: 32px;
    position: relative;
}

footer .top .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
}

footer .top::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 1px;
    background-color: #52555E;
}

.top .end {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}

.top .end .item {
    display: grid;
    grid-template-rows: max-content 1fr;
    color: #828691;
    margin-right: 54px;
    gap: 12px;
}

.top .item a {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    transition: all .3s ease-in-out;
    color: var(--white);
}

.top .item a:hover {
    opacity: .5;
}

.top .item:first-child {
    margin-right: 150px;
}

.top .item:last-child {
    margin-right: 0;
}

.footer-menu {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
    padding: 42px 0 120px;
}

.footer-menu .menu-list {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    gap: 30px;
    color: #828691;
}

.menu-list li {
    margin-bottom: 12px;
    color: #C1C3CC;
    transition: all .3s ease-in-out;
}

.menu-list li:hover {
    color: var(--white);
}

.menu-list li:last-child {
    margin-bottom: 0;
}

.footer-menu .sub-menu {
    color: #828691;
    margin-bottom: 15px;
}

.footer-menu .contact-info .item {
    margin-bottom: 32px;
}

.footer-menu .contact-info .item:last-child {
    margin-bottom: 0;
}


footer .bottom {
    color: #828691;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
}

footer .bottom p:last-child {
    text-align: right;
}

@media (max-width: 1000px) {
    .footer-menu {
        padding: 42px 0 60px;
    }
}
</style>
