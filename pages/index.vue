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
                        :main="true"
                        :title="'Широкий ассортимент'"
                        :description="'Более 600 видов строительного материала'"
                        :button-text="'Перейти в каталог'"
                        :button-classes="['small white']"
                    />
                    <Card
                        :title="'Облицовочный кирпич керамический'"
                        :info-product="true"
                        :button-text="'159 моделей'"
                        :button-classes="['small white']"
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
                        :discount="true"
                        :title="'Скидки на кирпичи'"
                        :description="'Акция действует до конца месяца!'"
                        :button-text="'Перейти в каталог'"
                        :button-classes="['small red']"
                        :image="'discont'"
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
        </section>
        <ProductAbout :title="'Представляем крупнейшие заводы производители'"
                      :description="'Строительный Двор «УСТА» — с 2004 года официальный партнер и региональный представитель крупнейших заводов производителей облицовочного кирпича, керамических блоков и автоклавного газобетона в Южном федеральном округе.'"
                      :button-text="'Подробнее о компании'"/>
        <Collaboration/>
        <Consultation/>
        <Delivery/>
        <Footer/>
    </div>
</template>

<script>
export default {
    name: 'IndexPage',
    components: {
        Slider: () => import('@/components/Slider'),
        Delivery: () => import('@/components/Delivery'),
        Consultation: () => import('@/components/Consultation'),
        Collaboration: () => import('@/components/Collaboration'),
        ProductAbout: () => import('@/components/ProductAbout'),
        Card: () => import('@/components/Card')
    },
    data() {
        return {}
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
