<template>
    <header :class="{mobile: isMobile}">
        <div class="container">
            <NuxtLink to="/" class="logo" v-if="!isMobile || !isFocused">
                <img :src="require('@/assets/ycta-logo.png')" alt="">
            </NuxtLink>
            <div class="menu" v-if="!isMobile">
                <div class="top">
                    <div class="left">
                        <ul>
                            <li>
                                <NuxtLink to="/about">О Компании</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/guarantee">Доставка</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/payment">Оплата</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/contacts">Контакты</NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div class="right">
                        <a class="phone" href="#">8 (918) 040 02-00</a>
                        <a class="email" href="#">sd-usta@mail.ru</a>
                        <!--                        <select>-->
                        <!--                            <option>Краснодарский край</option>-->
                        <!--                            <option>Краснодарский край</option>-->
                        <!--                        </select>-->
                        <div class="search" :class="{'is-focus': isFocused}">
                            <span class="material-icons">search</span>
                            <input v-model="search" type="text" @keypress="setSearched()" placeholder="Поиск"
                                   @focus="isFocused = true"
                                   @blur="isFocused = false"
                                   @keyup.enter="$router.push({name: 'Поиск', params: {name: search}})"
                            >
                            <div class="search-content" v-show="isSearched && isFocused">
                                <div class="item" v-for="(product, i) in Object.values(searchedProducts).slice(0, 5)"
                                     :key="i">
                                    <div class="info">
                                        <img
                                            :src="product.images[0] ? `https://api.kirpichkrasnodar.ru/file/download/${product.images[0]}` : require('@/assets/no-image.png')"
                                            alt="">
                                        <NuxtLink
                                            :to="`/catalog/${product.name?.replace(' ', '-').toLowerCase()}`">
                                            {{ product.name }}
                                        </NuxtLink>
                                    </div>
                                    <p>{{ product.price }} ₽</p>
                                </div>
                                <NuxtLink v-if="Object.values(searchedProducts).length > 5" :to="`/search/${search}`"
                                          class="more">Все результаты
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="menu-box">
                    <div class="buttons" >
                        <button class="button black button-item more-menu" @click="$router.push({name: 'Товары'})" @mouseover="openCatalogMenu()">
                            <span class="material-icons">{{ catalogMenu ? 'close' : 'menu' }}</span>
                            Каталог
                        </button>
                        <NuxtLink v-for="(item,i) in Object.values(pageData.categories).slice(0, 3)" :key="i"
                                  class="button gray-2 button-item"
                                  :to="{ name: 'Каталог товаров', params: {name: item.name?.replace(' ', '-').toLowerCase(), id: item._id }}">
                            {{ item.name }}
                        </NuxtLink>
                        <NuxtLink to="/catalog" class="button gray-2 button-item" v-if="totalCategories > 3">
                            Еще +{{ totalCategories - 3 }}
                        </NuxtLink>
                    </div>
                    <div class="catalog-menu" :class="{'is-active': catalogMenu}" @mouseleave="catalogMenu = false" @mouseleave.stop>
                        <ul>
                            <li v-for="(n, index) in pageData['categories']" :key="index">
                                                        <span class="link" @click="$router.push({name: 'Каталог товаров', params: {name: n.name?.replace(' ', '-').toLowerCase(), id: n._id }})"
                                                              @mouseover="openSubCatalogMenu(index)">
                                                            {{ n.name }}
                                                        </span>
                                <ul class="inner-catalog-menu" v-show="subInnerCatalogMenuState[index]"
                                    @mouseleave="closeSubCatalogMenu(index)"
                                    v-if="Object.keys(n.sub_categories).length">
                                    <li v-for="(sub, index) in n.sub_categories" :key="index">
                                        <NuxtLink
                                            :to="{ name: 'Каталог подтоваров', params: {category_name: n.name?.replace(' ', '-').toLowerCase(), subcategory_name: sub.name.replace(' ', '-').toLowerCase(), id: sub._id }}">
                                            {{ sub.name }}
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="mob-menu" v-if="isMobile">
                <div class="search" :class="{'is-focus': isFocused}">
                    <span class="material-icons">search</span>
                    <input v-model="search" type="text" @keypress="setSearched()" placeholder="Поиск"
                           @focus="isFocused = true"
                           @keyup.enter="$router.push({name: 'Поиск', params: {name: search}})"
                    >
                    <div class="search-content" v-show="isSearched && isFocused">
                        <div class="item" v-for="(product, i) in Object.values(searchedProducts).slice(0, 5)"
                             :key="i">
                            <div class="info">
                                <img
                                    :src="product.images[0] ? `https://api.kirpichkrasnodar.ru/file/download/${product.images[0]}` : require('@/assets/no-image.png')"
                                    alt="">
                                <NuxtLink
                                    :to="`/catalog/${product.name?.replace(' ', '-').toLowerCase()}`">
                                    {{ product.name }}
                                </NuxtLink>
                            </div>
                            <p>{{ product.price }} ₽</p>
                        </div>
                        <NuxtLink v-if="Object.values(searchedProducts).length > 5" :to="`/search/${search}`"
                                  class="more">Все результаты
                        </NuxtLink>
                    </div>
                </div>
                <button class="button black button-item more-menu" @click="menu = !menu" v-if="isMobile && !isFocused">
                    <span class="material-icons">{{ menu ? 'close' : 'menu' }}</span>
                    Меню
                </button>
                <div class="menu" v-if="menu">
                    <div class="buttons">
                       <span class="link" @mouseleave="openCatalogMenu()" :class="{'is-open': catalogMenu}">
                             Каталог
                        <img :src="require('@/assets/arrow.png')" alt="">
                        </span>
                        <template v-if="catalogMenu">
                            <div class="inner-mob-menu" :class="{'is-active': catalogMenu}">
                                <ul>
                                    <li v-for="(n, index) in pageData['categories']" :key="index">
                                        <span class="link" @click="openSubCatalogMenu(index)"
                                              :class="{'is-open': subInnerCatalogMenuState[index]}">
                                            {{ n.name }}
                                            <img :src="require('@/assets/arrow.png')" alt="">
                                        </span>
                                        <ul class="inner-catalog-mob-menu" v-show="subInnerCatalogMenuState[index]"
                                            v-if="Object.keys(n.sub_categories).length">
                                            <li v-for="(sub, index) in n.sub_categories" :key="index">
                                                <NuxtLink
                                                    :to="{ name: 'Каталог подтоваров', params: {category_name: n.name?.replace(' ', '-').toLowerCase(), subcategory_name: sub.name.replace(' ', '-').toLowerCase(), id: sub._id }}">
                                                    {{ sub.name }}
                                                </NuxtLink>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </template>
                    </div>
                    <ul class="other-menu">
                        <li>
                            <NuxtLink to="/about">О Компании</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/guarantee">Доставка</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/payment">Оплата</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/contacts">Контакты</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import Vue from "vue"
import {mapGetters} from "vuex"

export default {
    name: "TopBar",
    data() {
        return {
            search: '',
            catalogMenu: false,
            isFocused: false,
            isSearched: false,
            menu: false,
            subInnerCatalogMenuState: [],
            isMobile: false
        }
    },
    mounted() {
        if (!this.initPages['categories']) {
            this.$store.dispatch('getCategories')
        }
        if (!this.initPages['subcategories']) {
            this.$store.dispatch('getSubcategories')
        }
        for (const item in this.subcategories) {
            this.subInnerCatalogMenuState.push(false)
        }

        this.$set(this, 'isMobile', (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)))
    },
    computed: {
        ...mapGetters(['pageData', 'initPages', 'totalCategories', 'searchedProducts']),
        filteredProducts() {
            this.$store.dispatch('search', this.search)
        }
    },
    methods: {
        goTo(item) {
            this.$router.push({
                name: `Каталог товаров`,
                params: {id: item._id, name: 'sda'}
            })
        },
        setSearched() {
            if (this.isFocused) {
                setTimeout(() => {
                    Vue.set(this, 'isSearched', true)
                    this.$store.dispatch('search', this.search)
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
    },
}
</script>

<style scoped>
header {
    height: 125px;
    padding: 15px 0;
    position: fixed;
    background-color: var(--gray-1);
    top: 0;
    width: 100%;
    z-index: 4;
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
    top: 115px;
    left: 0;
    padding: 24px;
    background: var(--white);
    box-shadow: 0 4px 20px rgba(55, 57, 64, 0.2);
    border-radius: 12px 0 12px 12px;
    opacity: 0;
    visibility: hidden;
    transition: all .3s ease-out;
}

.catalog-menu.is-active {
    opacity: 1;
    visibility: visible;
}

.catalog-menu ul li {
    margin-bottom: 16px;
}

.catalog-menu ul li:last-child {
    margin-bottom: 0;
}

.inner-catalog-menu {
    position: absolute;
    left: 100%;
    width: 100%;
    top: 0;
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
    display: flex;
    justify-content: space-between;
    gap: 40px;
    place-items: center;
}

.search-content .info {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 16px;
}

.search-content img {
    width: 50px;
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
    outline: none;
    color: var(--black);
}

.more {
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: var(--red-1);
    margin-top: 24px;
    display: inline-block;
}

header.mobile {
    height: 74px;
}

header.mobile .container {
    grid-template-columns: 2fr 1fr;
}

header.mobile .logo {
    width: 70px;
    height: auto;
}

.mob-menu .search {
    position: relative;
}

.mob-menu .buttons {
    margin-top: 24px;
}


.mob-menu .search.is-focus {
    position: absolute;
    width: 100%;
    left: 0;
    z-index: 10;
}

.mob-menu {
    display: flex;
    gap: 8px;
    width: 100%;
    /*position: relative;*/
    justify-content: flex-end;
}

.mob-menu .menu {
    position: absolute;
    top: 74px;
    left: 0;
    background-color: var(--white);
    height: 100vh;
    padding: 0 20px;
    width: 100%;
}

.mob-menu {
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;
    font-family: 'Inter';
}

.other-menu {
    margin-top: 12px;
}

.mob-menu li {
    margin-bottom: 16px;
}

.mob-menu li:last-child {
    margin-bottom: 0;
}

.inner-catalog-mob-menu {
    padding-left: 12px;
    margin-top: 16px;
    color: var(--gray-4);
}

.mob-menu .buttons {
    flex-direction: column;
}

.mob-menu .buttons .link,
.mob-menu li .link {
    display: inline-flex;
    width: 100%;
    justify-content: space-between;
}

.mob-menu .buttons .link img,
.mob-menu li img {
    object-fit: contain;
    transition: all .3s ease-in-out;
}

.mob-menu .buttons .link.is-open img,
.mob-menu li .link.is-open img {
    transform: rotate(180deg);
}

@media (max-width: 1200px) {
    .right .email,
    .right .phone {
        display: none;
    }
}
</style>
