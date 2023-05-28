<template>
    <section class="subcatalog page">
        <TopBar/>
        <div class="container">

            <h2 class="title">Каталог товаров</h2>
            <template v-if="Object.keys(pageData?.['categories']).length">
                <div class="catalog-items">
                    <template v-for="product in pageData['categories']">
                        <Card v-if="product && !product.hidden"
                              :type="'category'"
                              :total="product.total || 0"
                              :title="product.name"
                              :description="product.description"
                              :image="product.image"
                              :isHidden="product.hidden"
                              :design="['button','white','large']"
                              :button-text="'моделей'"
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

export default {
    name: "Subcatalog",
    components: {
        Card: () => import('@/components/Card'),
        Breadcrumbs: () => import('@/components/Breadcrumbs'),
        TopBar: () => import('@/components/TopBar'),
        SocialBar: () => import('@/components/SocialBar')

    },
    props: ['category_id'],
    data() {
        return {
            menuList: [
                {title: 'Каталог товаров'},
                {title: 'Каталог категории'},
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

@media (max-width: 768px) {
    .catalog-items {
        place-content: center;
    }
}
</style>
