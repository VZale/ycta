<template>
    <section class="collaboration">
        <div class="container">
            <div class="top">
                <h3 class="title">С кем мы работаем</h3>
                <div class="right">
                    <p>Мы заручились крепкой, качественной и проверенной поддержкой ведущих компаний-производителей</p>
                    <div class="slider-buttons">
                        <button class="slide-button" @click="showPrev"><img
                            :src="require('@/assets/ycta-icons/arrow-left.svg')"
                            alt=""></button>
                        <button class="slide-button" @click="showNext"><img
                            :src="require('@/assets/ycta-icons/arrow-right.svg')"
                            alt=""></button>
                    </div>
                </div>
            </div>
            <VueSlickCarousel ref="carousel" :arrows="false" :dots="true">
                <div class="slide-item">
                    <div class="collaboration-items">
                        <div class="item">
                            <img :src="require('@/assets/ycta-collaboration/1.png')" alt="">
                        </div>
                        <div class="item">
                            <img :src="require('@/assets/ycta-collaboration/2.png')" alt="">
                        </div>
                        <div class="item">
                            <img :src="require('@/assets/ycta-collaboration/3.png')" alt="">
                        </div>
                        <div class="item">
                            <img :src="require('@/assets/ycta-collaboration/4.png')" alt="">
                        </div>
                        <div class="item">
                            <img :src="require('@/assets/ycta-collaboration/5.png')" alt="">
                        </div>
                        <div class="item">
                            <img :src="require('@/assets/ycta-collaboration/6.png')" alt="">
                        </div>
                        <div class="item">
                            <img :src="require('@/assets/ycta-collaboration/7.png')" alt="">
                        </div>
                        <div class="item">
                            <img :src="require('@/assets/ycta-collaboration/8.png')" alt="">
                        </div>
                    </div>
                </div>
                <div class="slide-item">
                    <div class="collaboration-items">
                        <div class="item">
                            <img :src="require('@/assets/ycta-collaboration/9.png')" alt="">
                        </div>
                        <div class="item">
                            <img :src="require('@/assets/ycta-collaboration/10.png')" alt="">
                        </div>
                    </div>
                </div>

                <template #customPaging="page" class="custom-dots">
                    <div class="custom-dot">

                    </div>
                </template>
            </VueSlickCarousel>
        </div>
    </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: "Collaboration",
    components: {
        VueSlickCarousel
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

.collaboration .top {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 48px;
}

.collaboration .top .right {
    display: grid;
    grid-template-columns: 1fr max-content;
    gap: 100px;
}

.collaboration .top h3 {
    color: #32343B;
}

.collaboration .slider-buttons {
    position: relative;
    bottom: 0;
    left: 0;
    justify-content: end;
}

.collaboration .slide-button {
    background: #DDE0EA;
}


.collaboration .slide-button:hover {
    background-color: var(--white);
    color: #000;
}

.collaboration .slide-button img {
    filter: invert(2) sepia(5) saturate(5) hue-rotate(35deg);
}

.collaboration .custom-dot {
    background-color: #000;
    opacity: .3;
    width: 10px;
    height: 10px;
    border-radius: 100%;
}

.collaboration .slick-dots {
    bottom: -32px;
}

.collaboration .slick-active .custom-dot {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #000;
    opacity: 1;
}

.collaboration .collaboration-items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 12px;
    cursor: grab;
}

.collaboration .slide-item {
    padding: 0;
}

.collaboration .collaboration-items .item {
    background-color: var(--white);
    border-radius: 12px;
}

@media (max-width: 1000px) {
    .collaboration .top {
        grid-template-columns: 1fr;
        gap: 24px;
    }
    .collaboration .top .right {
        grid-template-columns: 1fr;
        gap: 24px;
    }
}
</style>
