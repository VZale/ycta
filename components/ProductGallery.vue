<template>
    <div class="gallery">
        <img v-if="!images.length" :src="require('@/assets/no-image.png')" alt="">
        <img v-else-if="images.length === 1" :src="'https://api.kirpichkrasnodar.ru/file/download/' + images[0]"
             alt="">
        <Galleria
            v-else
            :value="images"
            :responsiveOptions="responsiveOptions"
            :numVisible="4"
            thumbnailsPosition="left"
            class="my-galleria"
        >
            <template #item="slotProps">
                <img
                    @error="require('@/assets/no-image.png')"
                    :src="'https://api.kirpichkrasnodar.ru/file/download/' + slotProps.item"
                    :alt="slotProps.item.alt"
                    class="galleria-item-image"
                    @click="imageClick(slotProps.item)"
                />
            </template>
            <template #thumbnail="slotProps">
                <div class="galleria-thumbnail-container">
                    <img
                        :src="'https://api.kirpichkrasnodar.ru/file/download/' + slotProps.item"
                        :alt="slotProps.item.alt"
                        class="galleria-thumbnail-image"
                    />
                </div>
            </template>
        </Galleria>

        <Galleria :value="images" :activeIndex.sync="activeIndex" :responsiveOptions="responsiveOptions" :numVisible="7"
                  containerStyle="max-width: 850px"
                  :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false"
                  :visible.sync="displayCustom">
            <template #item="slotProps">
                <img :src="'https://api.kirpichkrasnodar.ru/file/download/' + slotProps.item" :alt="slotProps.item.alt"
                     style="width: 100%; display: block;"/>
            </template>
            <template #thumbnail="slotProps">
                <img :src="'https://api.kirpichkrasnodar.ru/file/download/' + slotProps.item" :alt="slotProps.item.alt"
                     style="display: block;"/>
            </template>
        </Galleria>

        <!--        <Galleria :value="images" :numVisible="9"-->
        <!--                  :circular="true" :fullScreen="true" :showItemNavigators="true">-->
        <!--            <template #item="slotProps">-->
        <!--                <img-->
        <!--                    @error="require('@/assets/no-image.png')"-->
        <!--                    :src="'https://api.kirpichkrasnodar.ru/file/download/' + slotProps.item"-->
        <!--                    :alt="slotProps.item.alt"-->
        <!--                    class="galleria-item-image"-->
        <!--                />-->
        <!--            </template>-->
        <!--            <template #thumbnail="slotProps">-->
        <!--                <img-->
        <!--                    @error="require('@/assets/no-image.png')"-->
        <!--                    :src="'https://api.kirpichkrasnodar.ru/file/download/' + slotProps.item"-->
        <!--                    :alt="slotProps.item.alt"-->
        <!--                    class="galleria-item-image"-->
        <!--                />-->
        <!--            </template>-->
        <!--        </Galleria>-->
    </div>
</template>

<script>

import Galleria from 'primevue/galleria';

import('primevue/resources/themes/arya-blue/theme.css')
import('primevue/resources/primevue.min.css')
import('primeicons/primeicons.css')
import('@/css/gallery.css')
export default {
    props: ['images'],
    name: "ProductGallery",
    data() {
        return {
            responsiveOptions: [
                {
                    breakpoint: '1024px',
                    numVisible: 5
                },
                {
                    breakpoint: '768px',
                    numVisible: 3
                },
                {
                    breakpoint: '560px',
                    numVisible: 1
                }
            ],
            activeIndex: 0,
            displayCustom: false
        }
    },
    components: {
        Galleria,
    },
    methods: {
        imageClick(image) {
            this.activeIndex = this.images.indexOf(image)
            this.displayCustom = true;
        }
    }
}
</script>

<style scoped>

img {
    width: 100%;
    height: 420px;
    object-fit: contain;
    background-position: 50% 50%;
    border-radius: 12px;
}
</style>
