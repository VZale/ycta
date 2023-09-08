<template>
    <div class="filter">
        <div class="scroll-content">
            <div class="main-head" :class="{'filter-is-open': showFilter}" @click="showFilter = !showFilter">
                Фильтры
                <img :src="require('@/assets/ycta-icons/arrow.png')" alt="">
            </div>
            <div class="filters" v-if="showFilter">
                <div class="scroll-item" v-for="(item, i) in allFilters" :key="i">
                    <div class="head" :class="{'filter-is-open': productFilterState[i]?.state}"
                         @click="openScroller(i)">
                        {{ item.name }}
                        <img :src="require('@/assets/ycta-icons/arrow.png')" alt="">
                    </div>
                    <div class="scroll-content" v-show="productFilterState[i]?.state">

                        <div class="item" :class="{'is-checked': productFilterState[i]?.[n.toLowerCase()]}" @click="setCheckbox(i,j)"
                             v-for="(n,j) in item.options" :key="j">
                            {{ n }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="buttons">
                <button class="button large red" @click="showResult()">Показать результаты</button>
                <button class="button large white" @click="clearFilter()">Сбросить фильтры</button>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue"
import {mapGetters} from "vuex"

export default {
    name: "ProductFilter",
    mounted() {
        this.$store.dispatch('getAllFilter')
    },
    data() {
        return {
            showFilter: false,
            productFilterState: {},
            productFilterChecked: {}
        }
    },
    computed: {
        ...mapGetters(['filters']),
        allFilters() {
            for (const item in this.filters) {
                Vue.set(this.productFilterState, item, {})
                Vue.set(this.productFilterChecked, item, [])
                Vue.set(this.productFilterState[item], 'state', false)
                for (const n in this.filters[item].options) {
                    Vue.set(this.productFilterState[item], this.filters[item].options[n].toLowerCase(), false)
                }
            }

            return this.filters
        }
    },
    methods: {
        openScroller(item) {
            Vue.set(this.productFilterState[item], "state", !this.productFilterState[item].state)
        },
        setCheckbox(filterName, index) {
            const checkedItems = this.productFilterChecked[filterName.toLowerCase()]
            const value = this.filters[filterName.toLowerCase()].options[index].toLowerCase()
            Vue.set(this.productFilterState[filterName], value, !this.productFilterState[filterName][value])
            if (this.productFilterState[filterName.toLowerCase()][value]) {
                checkedItems.push(value)
            } else {
                const itemIndex = checkedItems.indexOf(value)
                if (itemIndex > -1) {
                    checkedItems.splice(itemIndex, 1)
                }
            }
        },
        setProductFilterChecked(item) {

        },
        showResult() {
            this.$store.dispatch('applyFilter', {
                filter: this.productFilterChecked,
                name: this.$route.params.name
            })
            this.$emit("show-result", this.productFilterChecked)
        },
        clearFilter() {
            for (const filterName in this.productFilterChecked) {
                this.productFilterChecked[filterName] = []
                for (const index in this.productFilterState[filterName]) {
                    Vue.set(this.productFilterState[filterName], index, false)
                }
            }
            this.$store.dispatch('resetFilter')
            this.$emit("clear", this.productFilterChecked)
        },
    },

}
</script>

<style scoped>
.filter .scroll-content:first-child {
    border: 2px solid var(--gray-2);
    border-radius: 12px;
}

.main-head {
    padding: 16px;
    align-items: center;
    border-bottom: 2px solid var(--gray-2);
    font-weight: 500;
    font-size: 18px;
    line-height: 140%;
}

.scroll-content .head img,
.main-head img {
    transition: all .3s ease-in-out;
}

.scroll-content .head.filter-is-open img,
.main-head.filter-is-open img {
    transform: rotate(180deg);
}

.main-head,
.scroll-content .head {
    display: grid;
    grid-template-columns: 1fr max-content;
    width: 100%;
    cursor: pointer;
}


.scroll-item {
    margin-bottom: 24px;
}

.scroll-item:last-child {
    margin: 0;
}

.scroll-content {
    margin-top: 12px;
}

.scroll-content .item {
    margin-bottom: 8px;
    padding-left: 32px;
    position: relative;
    cursor: pointer;
}

.scroll-content .item::after,
.scroll-content .item::before {
    content: '';
    position: absolute;
}

.scroll-content .item::after {
    content: '';
    position: absolute;
    left: 0;
    width: 20px;
    height: 20px;
    border: 2px solid var(--gray-3);
    border-radius: 3px;
    top: 50%;
    transform: translateY(-50%);
}

.scroll-content .item::before {
    content: '';
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    visibility: hidden;
    width: 10px;
    height: 10px;
    border-radius: 1px;
    background-color: var(--red-1);
    transition: all .3s ease-in-out;
}

.scroll-content .item.is-checked::before {
    opacity: 1;
    visibility: visible;
}

.scroll-content .item:last-child {
    margin: 0;
}

.filters {
    padding: 16px;
}

.buttons {
    padding: 16px;
    border-top: 2px solid var(--gray-2);
}

.buttons button {
    width: 100%;
    margin-bottom: 12px;
}

.buttons button:last-child {
    margin-bottom: 0;
}
</style>
