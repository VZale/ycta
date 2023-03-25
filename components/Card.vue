<template>
    <div>
        <div class="card" :class="{main: main}" v-if="main">
            <div class="top-content">
                <h3>{{ title }}</h3>
                <p>{{ description }}</p>
            </div>
            <button class="button" :class="[...buttonClasses]">{{ buttonText }}</button>
        </div>
        <div class="card" v-if="infoProduct">
            <div class="top-content">
                <h3>{{ title }}</h3>
            </div>
            <img :src="require(`@/assets/${image}.png`)" :alt="image">
            <button class="button" :class="[...buttonClasses]">{{ buttonText }}</button>
        </div>
        <div class="card" :class="{discount: discount}" v-if="discount">
            <div class="top-content">
                <h3>{{ title }}</h3>
                <p>{{ description }}</p>
            </div>
            <img :src="require(`@/assets/${image}.png`)" :alt="image">
            <button class="button" :class="[...buttonClasses]">{{ buttonText }}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        main: {
            type: Boolean,
            default: false
        },
        infoProduct: {
            type: Boolean,
            default: false
        },
        discount: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
        },
        description: {
            type: String
        },
        image: {
            type: String,
            default: 'no-image'
        },
        buttonClasses: {
            type: Array
        },
        buttonText: {
            type: String
        }
    }
}
</script>

<style scoped>
.card {
    position: relative;
    height: 420px;
    display: flex;
    flex-direction: column;
    color: #32343B;
    justify-content: space-between;
    background-color: var(--white);
    border-radius: 12px;
    padding: 24px;
    overflow: hidden;
    cursor: pointer;
}
.card.main {
    background: var(--red-1);
}
.card.discount,
.card.main {
    position: relative;
    color: var(--white);
}
.card.discount h3,
.card.main h3 {
    font-size: 40px;
    line-height: 110%;
    margin-bottom: 15px;
    font-weight: 500;
}
.card.discount img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 2;
}
.card.discount .top-content,
.card.discount button {
    position: relative;
    z-index: 3;
    border: none;
}
.card h3 {
    font-size: 24px;
    line-height: 120%;
    font-weight: 500;
}
.card.main p {
    font-weight: 400;
}
.card.main::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    background-image: url("/assets/ycta-decor/lines.png");
    background-repeat: no-repeat;
    background-position: bottom right;
}
.card .button {
    border: 2px solid #EDEFF4;
    font-size: 18px;
    width: fit-content;
}
</style>
