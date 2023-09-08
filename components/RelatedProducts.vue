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
        <VueSlickCarousel ref="carousel" :arrows="false" :dots="false" v-if="Object.keys(relatedProducts).length">
            <div class="slide-item" v-for="(slide, i) in relatedProducts" :key="i">
                <div class="related-items">
                    <template v-for="product in slide">
                        <Card v-if="product && !product.hidden"
                              :type="'product'"
                              :title="product.name"
                              :price="product.price"
                              :description="product.description"
                              :image="product.images[0]"
                              :labels="product.labels"
                              :isHidden="product.hidden"
                              :button-text="'моделей'"
                              :pathName="'Товар'"
                              :pathParams="`../../../../${Object.values(pageData['categories']).find(category => category._id === product.category_id)?.name.toLowerCase().replace(' ', '-')}/${Object.values(pageData['subcategories']).find(subcategory => subcategory._id === product?.sub_category_id)?.name.toLowerCase().replace(' ', '-')}/${Object.values(pageData['categories']).find(category => category._id === product.category_id)?._id}/${product.name.toLowerCase().replace(' ', '-')}/${product._id}`"
                        />
                    </template>
                </div>
            </div>
        </VueSlickCarousel>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import {mapGetters} from "vuex";

export default {
    name: "RelatedProducts",
    props: ['relatedProducts'],
    components: {
        VueSlickCarousel
    },
    computed: {
        ...mapGetters(['pageData'])
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
    grid-template-columns: repeat(4, 25%);
    gap: 12px;
    cursor: grab;
}

@media (min-width: 1100px) {
    .slide-button:hover img {
        opacity: .3;
    }
}
</style>
