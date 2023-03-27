<template>
    <header>
        <div class="container">
            <NuxtLink to="/" class="logo">
                <img :src="require('@/assets/ycta-logo.png')" alt="">
            </NuxtLink>
            <div class="menu">
                <div class="top">
                    <div class="left">
                        <ul>
                            <li>
                                <NuxtLink to="/about">О Компании</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/about">Доставка</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/about">Оплата</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/about">Контакты</NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div class="right">
                        <a class="phone" href="#">8 (918) 040 02-00</a>
                        <a class="email" href="#">sd-usta@mail.ru</a>
                        <select name="" id="">
                            <option>Краснодарский край</option>
                            <option>Краснодарский край</option>
                        </select>
                        <div class="search" :class="{'is-focus': isFocused}">
                            <span class="material-icons">search</span>
                            <input v-model="search" type="text" @keypress="setSearched()" placeholder="Поиск"
                                   @focus="isFocused = true"
                                   @blur="isFocused = false">
                            <div class="search-content" v-show="isSearched && isFocused">
                                <div class="item">
                                    <div class="info">
                                        <img :src="require('@/assets/product-1.png')" alt="">
                                        <NuxtLink
                                            to="/catalog/кирпич-строительный-рифлёный-облегченный-«Прохладный»-М200;-1,4нф">
                                            Кирпич строительный рифлёный облегченный «Прохладный» М200; 1,4нф
                                        </NuxtLink>
                                    </div>
                                    <p>16.00 ₽</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="buttons">
                    <button class="button black button-item more-menu" @click="openCatalogMenu()">
                        <span class="material-icons">{{ catalogMenu ? 'close' : 'menu' }}</span>
                        Каталог
                    </button>
                    <NuxtLink to="/catalog/тротуарная-плитка" class="button gray-2 button-item">
                        Тротуарная плитка
                    </NuxtLink>
                    <NuxtLink to="/catalog/облицовочный-кирпич-керамический" class="button gray-2 button-item">
                        Облицовочный кирпич керамический
                    </NuxtLink>
                    <NuxtLink to="/catalog/керамические-поризованные-блоки" class="button gray-2 button-item">
                        Керамические поризованные блоки
                    </NuxtLink>
                    <NuxtLink to="/catalog" class="button gray-2 button-item">
                        Еще +7
                    </NuxtLink>
                </div>
                <div class="catalog-menu" :class="{'is-active': catalogMenu}">
                    <ul>
                        <li v-for="(n, index) in innerCatalogMenu" :key="index">
                            <span class="link" @click="openSubCatalogMenu(index)">
                                {{ n.title }}
                            </span>
                            <ul class="inner-catalog-menu" v-show="subInnerCatalogMenuState[index]">
                                <li v-for="(item, i) in innerCatalogMenu[index].subCatalogMenu" :key="i">
                                    <NuxtLink :to="`/${item}`">{{ i }}</NuxtLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import Vue from "vue"

export default {
    name: "TopBar",
    data() {
        return {
            search: '',
            catalogMenu: false,
            isFocused: false,
            isSearched: false,
            innerCatalogMenu: {
                0: {
                    title: 'Облицовочный кирпич керамический',
                    subCatalogMenu: {
                        'Baksteen': 'baksteen',
                        'Екатеринославский кирпич': 'eкатеринославский-кирпич',
                        'Богадинский кирпичный завод': 'богадинский-кирпичный-завод',
                    },
                },
                1: {
                    title: 'Забутовочный кирпич (рядовой)',
                    subCatalogMenu: {
                        'Baksteen2': 'baksteen2',
                        'Екатеринославский кирпич2': 'eкатеринославский-кирпич2',
                        'Богадинский кирпичный завод2': 'богадинский-кирпичный-завод2',
                    },
                }
            },
            subInnerCatalogMenuState: []
        }
    },
    mounted() {
        for (const item in this.innerCatalogMenu) {
            this.subInnerCatalogMenuState.push(false)
        }
    },
    methods: {
        setSearched() {
            if (this.isFocused) {
                setTimeout(() => {
                    Vue.set(this, 'isSearched', true)
                }, 300)
            } else {
                Vue.set(this, 'isSearched', false)
            }
        },
        openSubCatalogMenu(index) {
            this.closeSubCatalogMenu()
            Vue.set(this.subInnerCatalogMenuState, index, true)
        },
        closeSubCatalogMenu() {
            for (const n in this.subInnerCatalogMenuState) {
                Vue.set(this.subInnerCatalogMenuState, n, false)
            }
        },
        openCatalogMenu() {
            Vue.set(this, 'catalogMenu', !this.catalogMenu)
            this.closeSubCatalogMenu()
        }
    }
}
</script>

<style scoped>
header {
    height: 120px;
    padding: 15px 0;
}

.logo {
    width: 150px;
    height: 100px;
}

header .container {
    display: grid;
    grid-template-columns: max-content 1fr;
    align-items: center;
    gap: 36px;
}

header .menu .top {
    display: grid;
    grid-template-columns: max-content 1fr;
    margin-bottom: 24px;
    align-items: center;
    gap: 60px;
}

header .menu {
    position: relative;
    z-index: 10;
}

header .menu .bottom {
    display: flex;
    gap: 12px;
    grid-template-columns: auto;
}

header .right {
    display: flex;
    align-items: center;
    gap: 24px;
    position: relative;
}

header .left ul {
    display: grid;
    grid-template-columns: repeat(4, max-content);
    gap: 24px;
}

.buttons {
    display: flex;
    gap: 12px;
}

.button-item {
    padding: 8px;
    font-size: 18px;
    font-weight: 400;
    transition: all .3s ease-out;
}

.catalog-menu {
    position: absolute;
    top: 100px;
    left: 0;
    padding: 24px;
    background: var(--white);
    box-shadow: 0 4px 20px rgba(55, 57, 64, 0.2);
    border-radius: 12px 0 12px 12px;
    opacity: 0;
    transition: all .3s ease-out;
}

.catalog-menu.is-active {
    opacity: 1;
}

.catalog-menu ul li {
    margin-bottom: 16px;
}

.catalog-menu ul li:last-child {
    margin-bottom: 0;
}

.inner-catalog-menu {
    position: absolute;
    right: -150px;
    top: 0;
    transform: translateX(50%);
    background: var(--white);
    box-shadow: 0 4px 20px rgba(55, 57, 64, 0.2);
    border-radius: 0 12px 12px 0;
    padding: 24px;
    z-index: -1;
}

.inner-catalog-menu a {
    max-width: 280px;
    display: inline-block;
}

.button-item.more-menu {
    display: grid;
    grid-template-columns: max-content 1fr;
    align-items: center;
    gap: 8px;
}

.search {
    display: grid;
    grid-template-columns: max-content 1fr;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    width: 120px;
    background-color: var(--gray-2);
    padding: 8px;
    position: absolute;
    right: 0;
    transition: all .3s ease-out;
}

.search-content {
    position: absolute;
    top: 50px;
    background: var(--white);
    z-index: 10;
    width: 100%;
    padding: 20px;
    border-radius: 12px;
    opacity: 1;
    transition: all .3s ease-out;
}

.search-content.is-searched {
    opacity: 1;
}

.search-content .item {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    gap: 40px;
    place-items: center;
}

.search-content .info {
    display: grid;
    grid-template-columns: 50px 450px;
    gap: 16px;
}

.search.is-focus {
    width: 100%;
}

.search input {
    min-width: 70px;
    height: 100%;
    background-color: transparent;
    outline: none;
    font-size: 18px;
    font-weight: 400;
}

.search input::placeholder {
    color: var(--gray-4);
    font-size: 18px;
    font-weight: 400;
    vertical-align: center;
}

select {
    background-color: transparent;
    cursor: pointer;
    font-size: 18px;
    color: var(--black);
}
</style>
