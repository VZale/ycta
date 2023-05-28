<template>
    <div class="page">
        <TopBar/>
        <div class="container">
            <Breadcrumbs :menuList="menuList"/>
            <div class="content">
                <ProductFilter @show-result="result"/>
                <div class="right">
                    <div class="top-content">
                        <h2 class="title">{{
                                $route.params?.subcategory_name ? $route.params?.subcategory_name?.replaceAll('-', ' ').charAt(0).toUpperCase() + $route.params?.subcategory_name?.replaceAll('-', ' ').slice(1) : $route.params?.name?.replaceAll('-', ' ').charAt(0).toUpperCase() + $route.params?.name?.replaceAll('-', ' ').slice(1)
                            }}</h2>
                        <p class="price-filter" @click="filterByPrice()"> По цене</p>
                    </div>
                    <div class="product-list">
                        <template v-for="product in pageData['products']">
                            <Card v-if="product && !product.hidden"
                                  :type="'product'"
                                  :title="product.name"
                                  :price="product.price"
                                  :description="product.description"
                                  :image="product.images ? product.images[0] : ''"
                                  :labels="product.labels"
                                  :isHidden="product.hidden"
                                  :button-text="'моделей'"
                                  :pathName="'Товар'"
                                  :pathParams="[`${Object.values(pageData['categories']).find(category => category._id === product.category_id)?.name}`,`${Object.values(pageData['subcategories']).find(subcategory => subcategory._id === product?.sub_category_id)?.name}`,`${product.name}`,`${product._id}`]"
                            />
                        </template>
                    </div>
                    <Pagination/>
                    <div class="info"
                         v-html="$route.params.subcategory_name ? pageData['subcategories'][$route.params.id]?.description :  pageData['categories'][$route.params.id]?.description"></div>
                </div>
            </div>
        </div>
        <Footer/>
        <SocialBar/>
    </div>

</template>

<script>
import Vue from "vue"
import {mapGetters} from "vuex";

import('@/css/page.css')

export default {
    name: "ProductCatalog",
    components: {
        Pagination: () => import('@/components/Pagination'),
        RelatedProducts: () => import('@/components/RelatedProducts'),
        Card: () => import('@/components/Card'),
        SocialBar: () => import('@/components/SocialBar'),
        ProductFilter: () => import('@/components/ProductFilter'),
    },
    mounted() {
        if (this.$route.params.category_name) {
            this.$store.dispatch('getSubcategoryProducts', this.$route.params.id)
            this.menuList.push({
                title: this.$route.params?.category_name,
                to: `/${this.$route.params.category_name?.replaceAll('-', ' ')}`
            })
        } else {
            this.menuList.push({
                title: this.$route.params?.name?.replaceAll('-', ' ')
            })
            this.$store.dispatch('getProducts', {
                id: this.$route.params.id
            })
        }
    },
    data() {
        return {
            menuList: [
                {title: 'Каталог товаров', to: '/catalog'},
            ],
            filteredData: [],
            filteredProducts: [],
            price: false,
            priceType: '',
        }
    },
    computed: {
        ...mapGetters(['pageData'])
    },
    methods: {
        result(data) {
            Vue.set(this, 'filteredData', data)
        },
        filterByPrice() {
            this.price = !this.price
            this.price ? this.priceType = 'lower' : this.priceType = 'hider'
            this.$store.dispatch('filterByPrice', {
                data: this.filteredData,
                price: this.priceType
            })
        },
    },
}
</script>

<style scoped>
.container {
    min-height: 700px;
}

.content {
    display: grid;
    grid-template-columns: 330px 1fr;
    gap: 12px;
    margin: 40px 0 120px;
}

.title {
    margin-left: 10px;
    margin-top: 0;
}

.product-list {
    margin-top: 40px;
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.info .text-content {
    margin-bottom: 40px;
    font-size: 18px;
}

.info .text-content:last-child {
    margin-bottom: 0;
}

.top-content {
    display: grid;
    grid-template-columns: 1fr max-content;
    align-items: center;
}

.price-filter {
    position: relative;
    color: var(--red-1);
    padding-left: 32px;
    cursor: pointer;
}

.price-filter::before {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-image: url("@/assets/ycta-icons/price-filter.png");
    background-repeat: no-repeat;
    background-size: cover;
}

.info {
    margin-top: 30px;
}

@media (max-width: 1000px) {
    .content {
        grid-template-columns: 1fr;
        gap: 30px;
    }
}

@media (max-width: 768px) {
    .title {
        margin: 0 0 10px;
    }

    .top-content {
        grid-template-columns: 1fr;
    }
}
</style>
