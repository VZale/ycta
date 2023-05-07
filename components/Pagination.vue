<template>
    <div class="pagination" v-if="total > 18">
        <button @click="setCurrentPage(currentPage - 1)" class="slide-button"><img
            :src="require('@/assets/ycta-icons/arrow-left.svg')"
            alt=""></button>
        <ul class="list">
            <li v-for="(page, index) in pages" :key="index"
                :class="{ active: page === currentPage }"
                @click="setCurrentPage(page)">
                {{ page }}
            </li>
        </ul>
        <button class="slide-button" @click="setCurrentPage(currentPage + 1)"><img
            :src="require('@/assets/ycta-icons/arrow-right.svg')"
            alt=""></button>
    </div>
</template>

<script>

import {mapGetters} from "vuex"

export default {
    name: "Pagination",
    data() {
        return {
            currentPage: 1,
            limit: 18,
        }
    },
    computed: {
        ...mapGetters(['total']),
        maxPages(){
            return Math.ceil(this.total / this.limit)
        },
        pages() {
            if (this.maxPages <= 7) {
                return Array.from({length: this.maxPages}, (_, i) => i + 1)
            }
            if (this.currentPage <= 2) {
                return [1, 2, 3, '...', this.maxPages]
            }
            if (this.currentPage >= this.maxPages - 3) {
                return [1, '...', this.maxPages - 3, this.maxPages - 2, this.maxPages - 1, this.maxPages]
            }
            const prevPage = this.currentPage - 1
            return [1, '...', prevPage, this.currentPage, this.currentPage + 1, '...', this.maxPages]
        }
    },
    methods: {
        setCurrentPage(page) {
            if (page === '...') {
                return
            }
            if (page < 1 || page > this.maxPages) {
                return
            }
            this.currentPage = page

            this.$store.dispatch('getProducts', {
                offset: --page
            })
        },
    },
}
</script>

<style scoped>

.pagination {
    max-width: 450px;
    display: grid;
    grid-template-columns: repeat(3, max-content);
    place-items: center;
    margin: 40px auto 80px;
}

.slide-button {
    background-color: var(--gray-2);
    transition: all .3s ease-in-out;
}

.slide-button img {
    filter: invert(1) sepia(1) saturate(1) hue-rotate(0);
    opacity: .5;
    transition: all .3s ease-in-out;
}

.slide-button:hover img {
    opacity: 1;
}

.slide-button:hover {
    background-color: var(--white);
}

.list {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    margin: 0 40px;
}

.list li {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: var(--gray-2);
    color: var(--black);
    transition: all .3s ease-in-out;
    cursor: pointer;
}

.list li.active {
    background-color: var(--black);
    color: var(--white);
}
</style>
