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
                        <select name="" id="">
                            <option>Краснодарский край</option>
                            <option>Краснодарский край</option>
                        </select>
                        <div class="search">
                            <span class="material-icons">search</span>
                            <input v-model="search" type="text" placeholder="Поиск">
                        </div>
                    </div>
                </div>
                <div class="buttons">
                    <button class="button black button-item more-menu">
                        <span class="material-icons">menu</span>
                        Каталог
                    </button>
                    <button class="button gray-2 button-item">
                        Тротуарная плитка
                    </button>
                    <button class="button gray-2 button-item">
                        Облицовочный кирпич керамический
                    </button>
                    <button class="button gray-2 button-item">
                        Керамические поризованные блоки
                    </button>
                    <button class="button gray-2 button-item">
                        Еще +7
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "TopBar",
    data() {
        return {
            search: '',
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

ul li a {
    transition: all .3s ease-out;
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

@media (min-width: 1100px) {

    ul li a:hover {
        color: var(--gray-4);
    }

    .button-item:hover {
        background-color: var(--white);
    }

    .button-item.more-menu:hover {
        color: var(--black);
    }
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
    overflow: hidden;
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

