<template>
    <div class="page-not-found">
        <TopBar/>
        <div class="content">
            <div class="decor">
                4 <img :src="require('@/assets/ycta-decor/circle.png')" alt=""> 4
            </div>
            <h2 class="title">Увы, страница не найдена</h2>
            <p>Мы разберемся с этим недоразумением, а пока предлагаем вам вернуться на главную</p>
            <NuxtLink to="/" class="button red large">Вернуться на главную</NuxtLink>
        </div>
        <Footer/>
    </div>
</template>

<script>
export default {
    name: "404",
    components: {}
}
</script>

<style scoped>
.content {
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
    min-height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.decor {
    margin-bottom: 40px;
    font-weight: 500;
    font-size: 52px;
    line-height: 105%;
}
.title {
    margin-bottom: 24px;
    line-height: 1;
    font-size: 38px;
}
.button {
    margin-top: 40px;
}
@media (max-width: 469px) {
    .content {
        min-height: auto;
        margin: 60px 0;
    }
    .button {
        width: 100%;
        margin-top: 24px;
    }
    .decor {
        font-size: 36px;
        margin-bottom: 24px;
    }
    .title {
        margin-bottom: 16px;
        font-size: 24px;
    }
    p {
        font-size: 16px;
    }
}
</style>
