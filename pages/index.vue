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
                    <div class="item main">
                        <div class="top-content">
                            <h3>Широкий ассортимент</h3>
                            <p>Более 600 видов строительного материала</p>
                        </div>
                        <button class="button small white">Перейти в каталог</button>
                    </div>
                    <div class="item">
                        <div class="top-content">
                            <h3>Облицовочный кирпич керамический</h3>
                        </div>
                        <img :src="require('@/assets/product-1.png')" alt="">
                        <button class="button small white">159 моделей</button>
                    </div>
                    <div class="item">
                        <div class="top-content">
                            <h3>Облицовочный кирпич керамический</h3>
                        </div>
                        <img :src="require('@/assets/product-1.png')" alt="">
                        <button class="button small white">159 моделей</button>
                    </div>
                    <div class="item">
                        <div class="top-content">
                            <h3>Облицовочный кирпич керамический</h3>
                        </div>
                        <img :src="require('@/assets/product-1.png')" alt="">
                        <button class="button small white">159 моделей</button>
                    </div>
                    <div class="item">
                        <div class="top-content">
                            <h3>Облицовочный кирпич керамический</h3>
                        </div>
                        <img :src="require('@/assets/product-1.png')" alt="">
                        <button class="button small white">159 моделей</button>
                    </div>
                    <div class="item">
                        <div class="top-content">
                            <h3>Облицовочный кирпич керамический</h3>
                        </div>
                        <img :src="require('@/assets/product-1.png')" alt="">
                        <button class="button small white">159 моделей</button>
                    </div>
                    <div class="item discount">
                        <div class="top-content">
                            <h3>Скидки на кирпичи</h3>
                            <p>Акция действует до конца месяца!</p>
                        </div>
                        <img :src="require('@/assets/discont.png')" alt="">
                        <button class="button small red">Перейти в раздел</button>
                    </div>
                    <div class="item">
                        <div class="top-content">
                            <h3>Облицовочный кирпич керамический</h3>
                        </div>
                        <img :src="require('@/assets/product-1.png')" alt="">
                        <button class="button small white">159 моделей</button>
                    </div>
                    <div class="item">
                        <div class="top-content">
                            <h3>Облицовочный кирпич керамический</h3>
                        </div>
                        <img :src="require('@/assets/product-1.png')" alt="">
                        <button class="button small white">159 моделей</button>
                    </div>
                    <div class="item">
                        <div class="top-content">
                            <h3>Облицовочный кирпич керамический</h3>
                        </div>
                        <img :src="require('@/assets/product-1.png')" alt="">
                        <button class="button small white">159 моделей</button>
                    </div>
                    <div class="item">
                        <div class="top-content">
                            <h3>Облицовочный кирпич керамический</h3>
                        </div>
                        <img :src="require('@/assets/product-1.png')" alt="">
                        <button class="button small white">159 моделей</button>
                    </div>
                    <div class="item">
                        <div class="top-content">
                            <h3>Печной кирпич</h3>
                        </div>
                        <img :src="require('@/assets/no-image.png')" alt="">
                        <button class="button small white">52 моделей</button>
                    </div>
                </div>
            </div>
        </section>
        <ProductAbout :title="'Представляем крупнейшие заводы производители'"
                      :description="'Строительный Двор «УСТА» — с 2004 года официальный партнер и региональный представитель крупнейших заводов производителей облицовочного кирпича, керамических блоков и автоклавного газобетона в Южном федеральном округе.'"
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
        ProductAbout: () => import('@/components/ProductAbout')
    },
    data() {
        return {}
    }
}
</script>

<style scoped>
.catalog {
    margin-top: 48px;
    padding-bottom: 120px;
}

.catalog .items {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.catalog .item {
    position: relative;
    height: 420px;
    display: flex;
    flex-direction: column;
    color: #32343B;
    justify-content: space-between;
    background-color: var(--white);
    border-radius: 12px;
    padding: 24px;
    overflow: hidden;
    cursor: pointer;
}

.catalog .item.main {
    background: #BB2329;
}

.catalog .item.discount,
.catalog .item.main {
    position: relative;
    color: var(--white);
}

.catalog .item.discount h3,
.catalog .item.main h3 {
    font-size: 40px;
    line-height: 110%;
    margin-bottom: 15px;
    font-weight: 500;
}

.catalog .item.discount img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 2;
}

.catalog .item.discount .top-content,
.catalog .item.discount button {
    position: relative;
    z-index: 3;
    border: none;
}

.catalog .item h3 {
    font-size: 24px;
    line-height: 120%;
    font-weight: 500;
}

.catalog .item.main p {
    font-weight: 400;
}

.catalog .item.main::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    background-image: url("/assets/ycta-decor/lines.png");
    background-repeat: no-repeat;
    background-position: bottom right;
}

.catalog .item .button {
    border: 2px solid #EDEFF4;
    font-size: 18px;
    width: fit-content;
}

</style>
