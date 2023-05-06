<template>
    <div class="page" v-if="Object.keys(currentProduct).length">
        <TopBar/>
        <div class="container">
            <Breadcrumbs :menuList="menuList"/>

            <div class="content">
                <ProductGallery :images="currentProduct.images"/>
                <div class="product-information">
                    <h2 class="title">
                        {{
                            $route.params?.name?.replaceAll('-', ' ').charAt(0).toUpperCase() + $route.params?.name?.replaceAll('-', ' ').slice(1)
                        }}</h2>
                    <p class="price">{{
                            currentProduct.price.toLocaleString(undefined, {maximumSignificantDigits: 2})
                        }}₽</p>
                    <h3 class="sub-title">Напишите нам</h3>
                    <ul class="contact-us">
                        <li>
                            <img :src="require('@/assets/ycta-icons/wa-colored.png')" alt="">
                            <span>WhatsApp</span>
                        </li>
                        <li>
                            <img :src="require('@/assets/ycta-icons/telegram-colored.png')" alt="">
                            <span>Telegram</span>
                        </li>
                    </ul>
                    <ul class="product-specifications">
                        <h3 class="sub-title">Характеристики</h3>
                        <li v-for="(item, i) in currentProduct.characteristics" :key="i">
                            <h4>{{ i }}</h4>
                            <p>{{ item.join(',') }}</p>
                        </li>
                    </ul>
                    <div class="description">
                        <h3 class="sub-title">Описание</h3>
                        <p>{{ currentProduct.description }}</p>
                        <!--                        <p class="more">Развернуть</p>-->
                    </div>
                </div>
            </div>

            <RelatedProducts v-if="currentProduct.same_products_id" :related-products="sameProducts"/>
            <Consultation/>
            <Delivery/>
        </div>
        <Footer/>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "SingleProduct",
    components: {
        ProductGallery: () => import('@/components/ProductGallery'),
        Delivery: () => import('@/components/Delivery'),
        Consultation: () => import('@/components/Consultation'),
        RelatedProducts: () => import('@/components/RelatedProducts')
    },
    mounted() {
        this.$store.dispatch('getCurrentProduct', this.$route.params.id)
        this.$store.dispatch('getAllFilter')
    },
    data() {
        return {
            menuList: [
                {title: 'Каталог товаров', to: '/catalog'},
                {
                    title: this.$route.params.category_name,
                    to: `/catalog/${this.$route.params.category_name?.replaceAll('-', ' ')}`
                },
                {title: this.$route.params.name, to: '/'}
            ]
        }
    },
    computed: {
        ...mapGetters(['currentProduct', 'filters', 'sameProducts'])
    }
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
    gap: 32px;
    margin-top: 40px;
}

.related {
    margin: 0;
}

.title {
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
