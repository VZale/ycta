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
    name: "Single",
    mounted() {
        this.menuList.push({
            title: this.$route.params.name.replaceAll('-', ' ')
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
