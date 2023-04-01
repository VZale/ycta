<template>
    <div class="page">
        <TopBar/>
        <div class="container">
            <Breadcrumbs :menuList="menuList"/>
        </div>
        <Footer/>
    </div>
</template>

<script>
export default {
    name: "SingleProduct",
    mounted() {
        this.menuList.push({
            title: this.$route.params.id.replaceAll('-', ' ')
        })
    },
    data() {
        return {
            menuList: [
                {title: 'Каталог товаров', to: '/catalog'},
            ]
        }
    }
}
</script>

<style scoped>
.container {
    min-height: 700px;
}
</style>
