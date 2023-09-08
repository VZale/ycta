<template>
    <section class="product-about">
        <div class="container">
            <div class="top" :class="{'more-content': moreContent}">
                <h2 class="title">{{ title }}</h2>
                <div class="right">
                    <p v-if="description">{{
                            description
                        }}</p>
                    <div v-if="moreDescription && moreDescription.length" class="more-description">
                        <p v-for="(item, n) in moreDescription">{{ item }}</p>
                    </div>
                    <button v-if="buttonText" class="button large white">{{ buttonText }}</button>
                    <ul v-if="moreContent">
                        <li v-for="(item, i) in moreContent" :key="i">
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
            <section class="slider">
                <button class="slide-button slide-right" @click="showPrev"><img
                    :src="require('@/assets/ycta-icons/arrow-left.svg')"
                    alt=""></button>
                <VueSlickCarousel ref="carousel" :arrows="false" :dots="true" v-if="Object.keys(aboutSlider).length">
                    <div v-for="(slide, i) in aboutSlider[0]?.images" :key="i" v-if="i % 2 === 0">
                        <div class="slide-item" v-if="i % 2 === 0">
                            <img :src="'https://api.kirpichkrasnodar.ru/file/download/'+ slide" alt="">
                            <img v-if="aboutSlider[0]?.images[i + 1]"
                                 :src="'https://api.kirpichkrasnodar.ru/file/download/'+ aboutSlider[0]?.images[i + 1]"
                                 alt="">
                        </div>
                    </div>
                    <template #customPaging="page" class="custom-dots">
                        <div class="custom-dot"></div>
                    </template>
                </VueSlickCarousel>

                <button class="slide-button slide-left" @click="showNext"><img
                    :src="require('@/assets/ycta-icons/arrow-right.svg')"
                    alt=""></button>
            </section>
        </div>
    </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import {mapGetters} from "vuex";

export default {
    name: "productAbout",
    mounted() {
        if (!Object.keys(this.aboutSlider).length) {
            this.$store.dispatch('getAboutSlider')
        }
    },
    props: {
        title: {
            type: String,
        },
        buttons: {
            type: Boolean,
            default: false
        },
        moreContent: {
            type: Array
        },
        moreDescription: {
            type: Array,
        },
        description: {
            type: String
        },
        buttonText: {
            type: String
        }
    },
    components: {
        VueSlickCarousel,
        Breadcrumbs: () => import('@/components/Breadcrumbs')
    },
    methods: {
        showNext() {
            this.$refs.carousel.next()
        },
        showPrev() {
            this.$refs.carousel.prev()
        }
    },
    computed: {
        ...mapGetters(['aboutSlider'])
    }
}
</script>

<style>
.product-about {
    margin: 0 0 120px 0;
}

.product-about .top {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    margin-bottom: 48px;
}

.product-about .title {
    color: #32343B;
    line-height: 1;
}

.product-about .right p {
    font-weight: 400;
    margin-bottom: 24px;
}

.product-about .slide-button {
    background: rgba(255, 255, 255, 0.3);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 5;
}

.product-about .slide-button.slide-left {
    right: 24px;
}

.product-about .slide-button.slide-right {
    left: 24px;
}

.product-about .slide-button:hover {
    background-color: var(--white);
    color: #000;
}

.product-about .slide-button img {
    filter: invert(0) sepia(0) saturate(0) hue-rotate(0);
}

.product-about .slide-button:hover img {
    filter: invert(2) sepia(5) saturate(5) hue-rotate(35deg);
}

.product-about .custom-dot {
    background-color: #000;
    opacity: .3;
    width: 10px;
    height: 10px;
    border-radius: 100%;
}

.product-about .slick-dots {
    bottom: -50px;
}

.product-about .slider {
    position: relative;
}

.product-about .slick-active .custom-dot {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #000;
    opacity: 1;
}

.product-about .slide-item {
    position: relative;
    padding: 0;
    display: grid !important;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
}

.product-about .slide-item img {
    border-radius: 12px;
}

.product-about .top {
    place-items: start;
    gap: 12px;
}

.product-about .title {
    margin: 0;
}

.product-about .more-content li {
    list-style: disc;
    list-style-position: inside;
    margin-bottom: 8px;
}

.product-about .more-content li:last-child {
    margin-bottom: 0;
}

.product-about .more-description p {
    margin-bottom: 12px;
}

.product-about .more-description p:last-child {
    margin: 0;
}

@media (max-width: 1000px) {
    .product-about .top {
        grid-template-columns: 1fr;
        gap: 24px;
    }
}
</style>
