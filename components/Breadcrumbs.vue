<template>
    <div class="breadcrumbs">
        <NuxtLink to="/" class="prev-route">Главная</NuxtLink>
        <span class="line">/</span>
        <span
            v-for="(menu, index) in menuList"
            :key="index"
            class="current-route"
        >
      <template v-if="index !== menuList.length - 1">
        <NuxtLink :to="menu.to" :class="{ 'prev-route': isActive(menu.to) }">{{ menu.title }}</NuxtLink>
      </template>
      <template v-else>
        <span>{{ menu.title }}</span>
      </template>
      <span v-if="index !== menuList.length - 1" class="line">/</span>
    </span>
    </div>
</template>

<script>
export default {
    name: "Breadcrumbs",
    props: ['menuList'],
    computed: {
        isCatalogPath() {
            return this.$route.path.startsWith('/catalog')
        }
    },
    methods: {
        isActive(path) {
            if (path === this.$route.path) {
                return true
            } else return !!(path === '/catalog' && this.isCatalogPath);
        }
    },
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

.current-route {
    text-transform: capitalize;
}
</style>
