<template>
    <section class="catalog page">
        <TopBar/>
        <div class="container">
            <Breadcrumbs :menuList="menuList"/>
            <h2 class="title">Каталог товаров</h2>
            <div class="catalog-items">
                <Card
                    :title="'Облицовочный кирпич керамический'"
                    :info-product="true"
                    :button-text="'159 моделей'"
                    :button-classes="['small white']"
                    :image="'product-1'"
                />
            </div>
        </div>
        <Footer/>
    </section>
</template>

<script>
export default {
    name: "Catalog",
    components: {},
    data() {
        return {
            menuList: [
                {title: 'Каталог товаров'},
            ]
        }
    }
}
</script>

<style scoped>
.catalog .container {
    min-height: 700px;
}
.catalog-items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 300px));
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
