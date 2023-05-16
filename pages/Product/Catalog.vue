<template>
    <section class="catalog page">
        <TopBar/>
        <div class="container">
            <Breadcrumbs :menuList="menuList"/>
            <h2 class="title">Каталог товаров</h2>
                <template v-if="Object.keys(pageData?.['categories']).length">
                    <div class="catalog-items">
                        <template v-for="product in pageData['categories']">
                            <Card v-if="product && !product.hidden"
                                  :type="'Category'"
                                  :total="product.total_product || 0"
                                  :title="product.name"
                                  :description="product.description"
                                  :image="product.image"
                                  :isHidden="product.hidden"
                                  :design="['button','white','large']"
                                  :button-text="'моделей'"
                                  :pathName="'Каталог товаров'"
                                  :pathParams="[`${product.name}`,`${product._id}`]"
                            />
                        </template>
                    </div>
                </template>
            </div>
        <Footer/>
        <SocialBar/>
    </section>
</template>

<script>
import {mapGetters} from "vuex"
import Card from "../../components/Card";

export default {
    name: "Catalog",
    components: {Card,
        SocialBar: () => import('@/components/SocialBar')
    },
    data() {
        return {
            menuList: [
                {title: 'Каталог товаров'},
            ]
        }
    },
    computed: {
        ...mapGetters(['pageData'])
    },
}
</script>

<style scoped>
.catalog .container {
    min-height: 700px;
}
.catalog-items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 320px));
    gap: 12px;
    margin: 40px 0 120px;
}
.grid-row {
    display: grid;
    grid-template-columns: 1fr;
}

img {
    object-fit: contain;
    height: 200px;
    width: 100%;
}
.button {
    margin-top: 20px;
}
</style>
