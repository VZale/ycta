<template>
    <section class="catalog page">
        <TopBar/>
        <div class="container">
            <Breadcrumbs/>
            <h2 class="title">Каталог товаров</h2>
            <div class="catalog-items">
                <NuxtLink :to="`catalog/${'Облицовочный-кирпич-керамический'}`" class="item flex-row">
                    <h3>Облицовочный кирпич керамический</h3>
                    <img :src="require('@/assets/product-1.png')" alt="">
                    <button class="button small white">159 моделей</button>
                </NuxtLink>
            </div>
        </div>
        <Footer/>
    </section>
</template>

<script>
export default {
    name: "Catalog"
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
.item {
    padding: 24px;
    background-color: var(--white);
    border-radius: 12px;
    cursor: pointer;
    position: relative;
}
.item::before,
.item::after {
    content: '';
    position: absolute;
    background-color: transparent;
    transition: all .3s ease-out;
    opacity: 0;
}
.item:hover::after,
.item:hover::before {
    opacity: 1;
}
.item::after{
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(50, 52, 59, 0.3);
    border-radius: 12px;
}
.item::before {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url('@/assets/ycta-icons/decor.png');
    width: 50px;
    height: 50px;
    z-index: 2;
}
.item h3 {
    margin-bottom: 40px;
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
