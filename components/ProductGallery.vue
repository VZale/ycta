<template>
    <div class="gallery">
        <img v-if="!images.length" :src="require('@/assets/no-image.png')" alt="">
        <img v-else-if="images.length === 1" :src="'https://api.enternaloptimist.com/file/download/' + images[0]"
             alt="">
        <div class="slider" v-if="images.length > 1">
            <hooper group="group1" :infiniteScroll="true">
                <slide v-for="image in images">
                    <img :src="`https://api.eternaloptimist.com/file/download/${image}`" alt=""></slide>
            </hooper>

            <hooper group="group1" :itemsToShow="2" :centerMode="true" :infiniteScroll="true" :vertical="false">
                <slide v-for="image in images">
                    <img :src="`https://api.eternaloptimist.com/file/download/${image}`" alt="">
                </slide>
            </hooper>
        </div>
    </div>
</template>

<script>
import {Hooper, Slide} from 'hooper';
import 'hooper/dist/hooper.css';

export default {
    mounted() {
        console.log(this.$refs.slider1)
    },
    props: ['images'],
    name: "ProductGallery",
    components: {
        Hooper,
        Slide
    }
}
</script>

<style scoped>

img {
    width: 100%;
    height: 420px;
    object-fit: cover;
    background-position: 50% 50%;
    border-radius: 12px;
}
</style>
