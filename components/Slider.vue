<template>
    <div class="slider" :class="forSection">
        <VueSlickCarousel ref="carousel" :arrows="false" :dots="true">
            <div class="slide-item">
                <img class="slide-image" :src="require('@/assets/ycta-main-slider/slide-1.png')" alt="slide-1">
                <div class="slide-content">
                    <h2 class="slide-title">Поставляем стройматериалы по Югу России</h2>
                    <p class="slide-description">Газобетонный блок, облицовочный кирпич, кровельные материалы,
                        тротуарную
                        плитку. Со своего склада, либо со складов производителей</p>
                </div>
                <button class="button" :class="slideButtonStyle">Начать с консультации</button>
            </div>
            <div class="slide-item">
                <img class="slide-image" :src="require('@/assets/ycta-main-slider/slide-1.png')" alt="slide-1">
                <div class="slide-content">
                    <h2 class="slide-title">Поставляем стройматериалы по Югу России</h2>
                    <p class="slide-description">Газобетонный блок, облицовочный кирпич, кровельные материалы,
                        тротуарную
                        плитку. Со своего склада, либо со складов производителей</p>
                </div>
                <button class="button" :class="slideButtonStyle">Начать с консультации</button>
            </div>
            <template #customPaging="page" class="custom-dots">
                <div class="custom-dot">

                </div>
            </template>
        </VueSlickCarousel>
        <div class="slider-buttons" v-if="arrows">
            <button class="slide-button" @click="showPrev"><img :src="require('@/assets/ycta-icons/arrow-left.svg')"
                                                                alt=""></button>
            <button class="slide-button" @click="showNext"><img :src="require('@/assets/ycta-icons/arrow-right.svg')"
                                                                alt=""></button>
        </div>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    props: {
        arrows: {
            type: Boolean,
            default: false
        },
        slideButtonStyle: {
            type: String,
            default: ''
        },
        forSection: {
            type: String,
            default: 'main-section'
        }
    },
    name: "Slider",
    components: {VueSlickCarousel},
    data() {
        return {}
    },
    methods: {
        showNext() {
            this.$refs.carousel.next()
        },
        showPrev() {
            this.$refs.carousel.prev()
        }
    },
}
</script>

<style>
.main-section {
    height: 520px;
    margin-top: 25px;
}


.main-section .custom-dot {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: var(--white);
    opacity: .3;
}

.main-section .slick-dots {
    bottom: 40px;
}

.main-section .slick-dots li {
    width: 10px;
    height: 10px;
}

.main-section .slick-active .custom-dot {
    opacity: 1;
    background-color: var(--white);
}

</style>
