<template>
    <div class="related">
        <div class="head">
            <h2 class="title">Сопутствующие товары</h2>
            <div class="slider-buttons">
                <button class="slide-button" @click="showPrev"><img
                    :src="require('@/assets/ycta-icons/arrow-left.svg')"
                    alt=""></button>
                <button class="slide-button" @click="showNext"><img
                    :src="require('@/assets/ycta-icons/arrow-right.svg')"
                    alt=""></button>
            </div>
        </div>
        <VueSlickCarousel ref="carousel" :arrows="false" :dots="false">
            <div class="slide-item">
                <div class="related-items">
                    <Card
                        :title="'Кирпич ручной формовки'"
                        :info-product="true"
                        :button-text="'159 моделей'"
                        :button-classes="['small white']"
                        :image="'product-1'"
                    />
                    <Card
                        :title="'Облицовочный кирпич керамический'"
                        :info-product="true"
                        :button-text="'159 моделей'"
                        :button-classes="['small white']"
                        :image="'product-1'"
                    />
                    <Card
                        :title="'Облицовочный кирпич керамический'"
                        :info-product="true"
                        :button-text="'159 моделей'"
                        :button-classes="['small white']"
                        :image="'product-1'"
                    />
                    <Card
                        :title="'Облицовочный кирпич керамический'"
                        :info-product="true"
                        :button-text="'159 моделей'"
                        :button-classes="['small white']"
                        :image="'product-1'"
                    />
                </div>
            </div>
            <div class="slide-item">
                <div class="related-items">
                    <Card
                        :title="'Облицовочный кирпич керамический'"
                        :info-product="true"
                        :button-text="'159 моделей'"
                        :button-classes="['small white']"
                        :image="'product-1'"
                    />
                    <Card
                        :title="'Облицовочный кирпич керамический'"
                        :info-product="true"
                        :button-text="'159 моделей'"
                        :button-classes="['small white']"
                        :image="'product-1'"
                    />
                    <Card
                        :title="'Облицовочный кирпич керамический'"
                        :info-product="true"
                        :button-text="'159 моделей'"
                        :button-classes="['small white']"
                        :image="'product-1'"
                    />
                    <Card
                        :title="'Облицовочный кирпич керамический'"
                        :info-product="true"
                        :button-text="'159 моделей'"
                        :button-classes="['small white']"
                        :image="'product-1'"
                    />
                </div>
            </div>
        </VueSlickCarousel>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: "RelatedProducts",
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

<style scoped>

.related {
    margin-bottom: 120px;
}

.head {
    position: relative;
}

.slide-item {
    padding: 40px 0 0 0;
}

.slider-buttons {
    bottom: 0;
    right: 0;
}

.slide-button {
    background: var(--gray-2);
}

.slide-button img {
    transition: all .3s ease-in-out;
    filter: invert(2) sepia(5) saturate(5) hue-rotate(5deg);
}

.related-items {
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
    gap: 12px;
    cursor: grab;
}

.related-items .item {

}

@media (min-width: 1100px) {
    .slide-button:hover img {
        opacity: .3;
    }
}
</style>
