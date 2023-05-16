<template>
    <section class="page about">
        <TopBar/>
        <div class="container">
            <main class="main-screen">
                <Breadcrumbs :menuList="menuList"/>
                <div class="content">
                    <h2 class="main-title">О компании</h2>
                    <p class="main-description">Строительный Двор «УСТА» — с 2004 года официальный партнер и
                        региональный представитель крупнейших
                        заводов производителей облицовочного кирпича, керамических блоков и автоклавного газобетона в
                        Южном
                        федеральном округе.</p>
                </div>
            </main>
            <section class="guarantee">
                <h2 class="title">Мы гарантируем</h2>
                <div class="guarantee-items">
                    <div class="guarantee-item">
                        <img :src="require('@/assets/ycta-icons/wall.png')" alt="">
                        <div class="content">
                            <h3 class="sub-title">Широкий ассортимент</h3>
                            <p class="sub-desc">Мы поставляем продукцию от лидеров рынка: «Славянский кирпич», «Красная
                                Гвардия», «Тербунский Гончар» и т.д.
                            </p>
                        </div>
                    </div>
                    <div class="guarantee-item">
                        <img :src="require('@/assets/ycta-icons/card.png')" alt="">
                        <div class="content">
                            <h3 class="sub-title">Оптимальную стоимость</h3>
                            <p class="sub-desc">Цена на кирпич, брусчатку, черепицу формируется индивидуально на
                                основании проекта и сметы
                            </p>
                        </div>
                    </div>
                    <div class="guarantee-item">
                        <img :src="require('@/assets/ycta-icons/rocket.png')" alt="">
                        <div class="content">
                            <h3 class="sub-title">Быструю доставку</h3>
                            <p class="sub-desc">Транспортировка заказа на объект выполняется оперативно с нашего склада
                                или напрямую с завода
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div class="advantages">
                <h2 class="title">Мы доставили стройматериалы более чем 6000 клиентам по всему Югу России</h2>
                <div class="items">
                    <span>Бесплатная консультация</span>
                    <span>Расчет кол-ва материалов</span>
                    <span>Доставка</span>
                    <span>Разгрузка</span>
                </div>
            </div>
        </div>
        <ProductAbout :title="'Что можно посмотреть  в нашем шоу-руме'"
                      :more-content="['Стеновые материалы. В наличии клинкерный и кермачиский кирпич, блок строительный, цветные кладочный растворы и другие товары для возведения и облицовки стен','Кровельные покрытия. В продаже цементно-песчаная, натуральная и битумная черепица, сланец', 'Ландшафтные покрытия. У нас можно заказать брусчатку, плитку, ступени, декоративные элементы для благоустройства придомой территории']"/>
        <Collaboration/>
        <Consultation/>
        <Delivery/>
        <Footer/>
        <SocialBar/>
    </section>
</template>

<script>
export default {
    components: {
        SocialBar: () => import('@/components/SocialBar')
    },
    name: "About",
    data() {
        return {
            menuList: [
                {title: 'О Компании'},
            ]
        }
    }
}
</script>

<style scoped>
.main-screen {
    background-image: url("@/assets/ycta-pages/about/about.png");
    color: var(--white);
    border-radius: 12px;
    padding: 40px 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 380px;
    margin-bottom: 80px;
}

.breadcrumbs {
    margin: 0;
}

.container {
    line-height: 1;
    margin-top: 40px;
}

.main-screen .content {
    max-width: 620px;
}

.main-title {
    font-size: 72px;
    font-weight: 500;
    margin-bottom: 24px;
    line-height: 1;
}

.main-description {
    font-size: 18px;
    line-height: 140%;
}

.guarantee-items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(425px, 280px));
    gap: 12px;
    margin: 40px 0 80px;
    place-content: center;
}

.guarantee-item {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    border-radius: 12px;
    padding: 24px;
    background-color: var(--white);
}

.sub-title {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 20px;
}

.sub-desc {
    line-height: 140%;
}

.advantages {
    border-radius: 12px;
    background-color: var(--red-1);
    color: var(--white);
    padding: 80px 115px;
    text-align: center;
    margin-bottom: 120px;
}

.advantages .title {
    margin-bottom: 32px;
}

.advantages .items {
    display: grid;
    grid-template-columns: repeat(4, max-content);
    gap: 12px;
    place-items: center center;
    place-content: center;
}

.advantages .items span {
    padding: 8px;
    border-radius: 12px;
    background-color: var(--red-2);
}

@media (max-width: 1375px) {
    .guarantee .title {
        text-align: center;
    }

    .guarantee-item:last-child {
        grid-column: 1 / 2 span;
    }
}

@media (max-width: 1375px) {
    .guarantee .title {
        text-align: center;
    }
    .guarantee-item:last-child {
        grid-column: 1 / 2 span;
    }
}
@media (max-width: 1000px) {
    .guarantee-items {
        grid-template-columns: 1fr;
    }
    .guarantee-item:last-child {
        grid-column: auto;
    }
    .main-title {
        font-size: 36px;
    }
    .main-description {
        font-size: 16px;
    }
    .title {
        font-size: 28px;
    }
    .advantages {
        padding: 28px;
    }
    .advantages .items {
        grid-template-columns: repeat(4, 1fr);
        max-width: 280px;
        margin: 0 auto;
    }
    .advantages .items span {
        font-size: 16px;
    }
    .advantages .items span:first-child {
        grid-column-start: 1;
        grid-column-end: five;
        grid-row-start: row1-start;
        grid-row-end: 1;
    }
    .advantages .items span:nth-child(2) {
        grid-column-start: 1;
        grid-column-end: five;
        grid-row-start: row1-start;
        grid-row-end: 2;
    }
    .advantages .items span:nth-child(3) {
        grid-area: 3/2;
    }
    .advantages .items span:nth-child(4) {
        grid-area: 3/3;
    }
}
</style>
