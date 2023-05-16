<template>
    <div>
        <TopBar/>
        <main>
            <div class="container">
                <Slider :arrows="true" slide-button-style="large red"/>
            </div>
        </main>
        <section class="catalog">
            <div class="container">
                <div class="items">
                    <Card
                        :title="'Широкий ассортимент'"
                        :description="'Более 600 видов строительного материала'"
                        :button-text="'Перейти в каталог'"
                        :design="['button','white','small']"
                        :type="'decor'"
                        :pathName="'Товары'"
                    />
                    <template v-if="pageData['categories']"
                              v-for="(category, i) in Object.values(pageData['categories']).slice(0, 19)">
                        <Card v-if="category && !category.hidden"
                              :type="'Category'"
                              :total="category.total_product || 0"
                              :title="category.name"
                              :description="category.description"
                              :image="category.image"
                              :isHidden="category.hidden"
                              :design="['button','white','large']"
                              :button-text="'моделей'"
                              :pathName="'Каталог товаров'"
                              :pathParams="[`${category.name}`,`${category._id}`]"
                        />
                    </template>
                </div>
            </div>
        </section>
        <ProductAbout :title="'Представляем крупнейшие заводы производители'"
                      :description="'Строительный Двор «УСТА» — с 2004 года официальный партнер и региональный представитель крупнейших заводов производителей облицовочного кирпича, керамических блоков и автоклавного газобетона в Южном федеральном округе.'"
                      :button-text="'Подробнее о компании'"/>
        <Collaboration/>
        <Consultation/>
        <Delivery/>
        <Footer/>
        <SocialBar/>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: 'IndexPage',
    mounted() {
        this.$store.dispatch('getCategories')
    },
    components: {
        Slider: () => import('@/components/Slider'),
        Delivery: () => import('@/components/Delivery'),
        Consultation: () => import('@/components/Consultation'),
        Collaboration: () => import('@/components/Collaboration'),
        ProductAbout: () => import('@/components/ProductAbout'),
        Card: () => import('@/components/Card'),
        SocialBar: () => import('@/components/SocialBar')
    },
    data() {
        return {}
    },
    computed: {
        ...mapGetters(['pageData'])
    }
}
</script>

<style scoped>
main {
    padding-top: 150px;
}

.catalog {
    margin-top: 48px;
    padding-bottom: 120px;
}

.catalog .items {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

@media (max-width: 768px) {
    .catalog .items {
        padding-top: 50px;
    }
}
</style>
