<template>
    <div class="slider" :class="forSection">
        <VueSlickCarousel ref="carousel" :arrows="false" :dots="true" v-if="Object.keys(mainSlider).length">
            <div class="slide-item" v-for="(slide, i) in mainSlider" :key="i">
                <img class="slide-image" :src="slide.image ? `https://api.kirpichkrasnodar.ru/file/download/${slide.image}` : require('@/assets/ycta-main-slider/slide-1.png')" alt="slide-1">
                <div class="slide-content">
                    <h2 class="slide-title">{{ slide.title }}</h2>
                    <p class="slide-description">{{slide.description}}</p>
                </div>
                <button class="button" :class="slideButtonStyle" @click="consultationModal = true">Начать с консультации</button>
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
        <ModalBox v-if="consultationModal">
            <template #modalContent>
                <Consultation @close-modal="consultationModal = false" :isModal="true"/>
            </template>
        </ModalBox>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import {mapGetters} from "vuex";

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
    components: {
        VueSlickCarousel,
        ModalBox: () => import('@/components/ModalBox'),
        Consultation: () => import('@/components/Consultation'),
    },
    data() {
        return {
            consultationModal: false
        }
    },
    computed: {
        ...mapGetters(['mainSlider'])
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
