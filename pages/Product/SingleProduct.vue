<template>
    <div class="page">
        <TopBar/>
        <div class="container">
            <Breadcrumbs :menuList="menuList"/>

            <div class="content">
                <ProductGallery/>
                <div class="product-information">
                    <h2 class="title">
                        {{
                            $route.params?.id?.replaceAll('-', ' ').charAt(0).toUpperCase() + $route.params?.id?.replaceAll('-', ' ').slice(1)
                        }}</h2>
                    <p class="price">46.00 ₽</p>
                    <h3 class="sub-title">Напишите нам</h3>
                    <ul class="contact-us">
                        <li>
                            <img :src="require('@/assets/ycta-icons/wa-colored.png')" alt="">
                            <a href="">WhatsApp</a>
                        </li>
                        <li>
                            <img :src="require('@/assets/ycta-icons/telegram-colored.png')" alt="">
                            <a href="">Telegram</a>
                        </li>
                    </ul>
                    <ul class="product-specifications">
                        <h3 class="sub-title">Характеристики</h3>
                        <li>
                            <h4>Марка прочности</h4>
                            <p>М125</p>
                        </li>
                        <li>
                            <h4>Размер, мм</h4>
                            <p>210*100*65</p>
                        </li>
                        <li>
                            <h4>Морозостойкость, циклов</h4>
                            <p>F100</p>
                        </li>
                        <li>
                            <h4>Цвет</h4>
                            <p>Красная цветовая группа</p>
                        </li>
                        <li>
                            <h4>Вес, кг</h4>
                            <p>2.3</p>
                        </li>
                        <li>
                            <h4>Количество на поддоне, шт</h4>
                            <p>560</p>
                        </li>
                    </ul>
                    <div class="description">
                        <h3 class="sub-title">Описание</h3>
                        <p>Используется для возведения облегченных наружных стен с высокой теплоизоляцией, внутренних
                            перегородок, заполнения каркасов высотных и многоэтажных зданий. Благодаря наличию
                            внутренних пустот обладает повышенными тепло и звукоизоляционными показателями. Меньший вес,
                            по сравнению с полнотелым кирпичом, значительно снижает нагрузки на фундамент, позволяя
                            сократить расходы на его возведение.</p>
                        <!--                        <p class="more">Развернуть</p>-->
                    </div>
                </div>
            </div>

            <RelatedProducts :related-products="{}"/>
            <Consultation/>
            <Delivery/>
        </div>
        <Footer/>
    </div>
</template>

<script>
export default {
    name: "SingleProduct",
    components: {
        ProductGallery: () => import('@/components/ProductGallery'),
        Delivery: () => import('@/components/Delivery'),
        Consultation: () => import('@/components/Consultation'),
        RelatedProducts: () => import('@/components/RelatedProducts')
    },
    data() {
        return {
            menuList: [
                {title: 'Каталог товаров', to: '/catalog'},
            ]
        }
    },
}
</script>

<style scoped>
.container {
    min-height: 700px;
}

.content {
    margin-bottom: 120px;
    display: grid;
    grid-template-columns: 560px 1fr;
    gap: 12px;
    margin-top: 40px;
}

.related {
    margin: 0;
}

.delivery {
    padding: 0 0 120px;
}

.price {
    margin: 40px 0;
    font-weight: 500;
    font-size: 40px;
    line-height: 110%;
}

.sub-title {
    font-weight: 500;
    font-size: 24px;
    line-height: 120%;
    color: var(--black);
}

.contact-us {
    display: grid;
    place-items: center;
    gap: 32px;
    grid-template-columns: repeat(2, max-content);
    margin: 20px 0 40px;
}

.contact-us li {
    display: grid;
    place-items: center;
    grid-template-columns: repeat(2, max-content);
    gap: 12px;
}

.product-specifications {
    margin-bottom: 40px;
}

.product-specifications h3 {
    margin-bottom: 20px;
}

.product-specifications li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
}

.product-specifications li:last-child {
    margin-bottom: 0;
}

.product-specifications li h4 {
    color: var(--gray-4);
}

.product-specifications li p {
    color: var(--black);
}

.description h3 {
    margin-bottom: 20px;
}

.more {
    color: var(--red-1);
    margin-top: 8px;
}
</style>
