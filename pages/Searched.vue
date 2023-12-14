<template>
    <div class="page">
        <TopBar/>
        <div class="container">
            <Breadcrumbs :menuList="menuList"/>
            <div class="content">
                <div class="top-content">
                    <p class="search-desc">
                        {{
                            Object.keys(searchedProducts).length ? ` По запросу ${$route.params.name} найдено (${Object.keys(searchedProducts).length})` : `По запросу «${$route.params.name}» ничего не найдено`
                        }}</p>
                    <div class="more-detailed" v-if="!Object.keys(searchedProducts).length">
                        <p class="sub-desc">Попробуйте сформулировать запрос по-другому или вернитесь в каталог
                            товаров</p>
                        <NuxtLink class="button red large" to="/catalog">
                            В каталог товаров
                        </NuxtLink>
                    </div>
                </div>

                <div class="product-list">
                    <template v-for="product in searchedProducts">
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
                              :pathParams="`../catalog/${Object.values(pageData['categories']).find(category => category._id === product.category_id)?.name}/${Object.values(pageData['subcategories']).find(subcategory => subcategory._id === product?.sub_category_id)?.name.replace(' ', '-').toLowerCase()}/${Object.values(pageData['categories']).find(category => category._id === product.category_id)?._id}/${product.name.toLowerCase().replace(' ', '-')}/${product._id}`"
                        />
                    </template>
                </div>
                <Pagination v-if="Object.keys(searchedProducts).length > 18"/>
            </div>
        </div>
        <Footer/>
        <SocialBar/>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import ButtonBox from "../components/ButtonBox";

export default {
    name: "Searched",
    components: {
        ButtonBox,
        Pagination: () => import('@/components/Pagination'),
        RelatedProducts: () => import('@/components/RelatedProducts'),
        Card: () => import('@/components/Card'),
        ProductFilter: () => import('@/components/ProductFilter'),
        SocialBar: () => import('@/components/SocialBar')
    },
    mounted() {
        this.$store.dispatch('search', this.$route.params.name)
    },
    data() {
        return {
            menuList: [
                {title: 'поиск', to: '/search'},
            ],
        }
    },
    computed: {
        ...mapGetters(['searchedProducts', 'pageData'])
    },
}
</script>

<style scoped>
.page .breadcrumbs {
    margin-top: 32px;
    margin-bottom: 40px;
}

.search-desc {
    font-weight: 500;
    font-size: 52px;
    line-height: 105%;
}

.more-detailed {
    display: inline-grid;
    gap: 40px;
    margin-top: 24px;
    margin-bottom: 120px;
}

.button {
    width: max-content;
}

.container {
    min-height: 700px;
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
    margin-bottom: 30px;
}
</style>
