<template>
    <div class="breadcrumbs">
        <NuxtLink to="/" class="prev-route">Главная</NuxtLink>
        <span class="line">/</span> <span class="current-route">О компании</span>
    </div>
</template>

<script>
export default {
    name: "Breadcrumbs"
}
</script>

<style scoped>

.breadcrumbs {
    font-size: 16px;
}

.line {
    margin: 0 8px;
    color: var(--gray-3);
}

.prev-route {
    color: var(--gray-3);
}

</style>
