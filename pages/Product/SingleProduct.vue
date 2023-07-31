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
                            currentProduct.price?.toLocaleString(undefined, {maximumSignificantDigits: 2})
                        }}₽</p>
                    <h3 class="sub-title">Напишите нам</h3>
                    <ul class="contact-us">
                        <li @click="sendMail('whatsapp')">
                            <img :src="require('@/assets/ycta-icons/wa-colored.png')" alt="">
                            <span>WhatsApp</span>
                        </li>
                        <li @click="sendMail('telegram')">
                            <img :src="require('@/assets/ycta-icons/telegram-colored.png')" alt="">
                            <span>Telegram</span>
                        </li>
                    </ul>
                    <ul class="product-specifications">
                        <h3 class="sub-title">Характеристики</h3>
                        <li v-for="(item, i,n) in currentProduct.characteristics" :key="i">
                            {{filtersList[n]}}
                            <p>{{ item.join(',') }}</p>
                        </li>
                    </ul>
                    <div class="description">
                        <h3 class="sub-title">Описание</h3>
                        <div v-if="showFullDescription" v-html="currentProduct.description"></div>
                        <div v-else v-html="shortDescription"></div>
                        <p class="more"
                           v-if="!showFullDescription && shortDescription.length > 99 && currentProduct.description"
                           @click="showFullDescription = true">Развернуть</p>
                        <p v-if="showFullDescription"  @click="showFullDescription = false" class="more">Свернуть</p>
                    </div>
                </div>
            </div>
            <RelatedProducts v-if="currentProduct.same_products_id" :related-products="sameProducts"/>
            <ModalBox v-if="chooseProduct">
                <template #modalContent>
                    <Consultation :social="social" :productId="currentProduct._id" :title="'Отправить заявку'"
                                  :nickname="nickname" @close-modal="chooseProduct=false" :is-modal="true"/>
                </template>
            </ModalBox>
            <Consultation/>
            <Delivery/>
        </div>
        <Footer/>
        <SocialBar/>
    </div>
</template>

<script>
import {mapGetters} from "vuex"

import('@/css/page.css')

export default {
    name: "SingleProduct",
    components: {
        ProductGallery: () => import('@/components/ProductGallery'),
        Delivery: () => import('@/components/Delivery'),
        Consultation: () => import('@/components/Consultation'),
        RelatedProducts: () => import('@/components/RelatedProducts'),
        SocialBar: () => import('@/components/SocialBar')
    },
    mounted() {
        this.$store.dispatch('getCurrentProduct', this.$route.params.id)
        this.$store.dispatch('getAllFilter')
        if (!Object.keys(this.filtersList).length){
            this.$store.dispatch('getFilterList')
        }
    },
    data() {
        return {
            menuList: [
                {title: 'Каталог товаров', to: '/catalog'},
                {
                    title: this.$route.params.category_name,
                    to: `/catalog/${this.$route.params.category_name?.replaceAll('-', ' ')}/${this.$route.params.subcategory_id}`
                },
                {title: this.$route.params.name, to: '/'}
            ],
            chooseProduct: false,
            showFullDescription: false,
            shortDescription: '',
            social: '',
            nickname: true
        }
    },
    computed: {
        ...mapGetters(['currentProduct', 'filters', 'sameProducts','filtersList'])
    },
    methods: {
        updateShortDescription() {
            if (!this.currentProduct || !this.currentProduct.description) {
                this.shortDescription = ''
                return
            }

            const fullDescription = this.currentProduct.description
            this.shortDescription = fullDescription.slice(0, 100) + '...'
        },
        sendMail(social) {
            this.nickname = true
            this.chooseProduct = true
            this.social = social

            if (social === 'whatsapp') {
                this.nickname = false
            }
        }
    },
    watch: {
        currentProduct: {
            handler() {
                this.updateShortDescription()
            },
            immediate: true
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
    cursor: pointer;
    font-weight: 500;
}

.contact-us li {
    cursor: pointer;
}

@media (max-width: 1000px) {
    .content {
        grid-template-columns: 1fr;
    }

    .delivery {
        margin-top: 24px;
    }
}

</style>
