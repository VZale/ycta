<template>
    <div class="gallery">
        <img v-if="!images.length" :src="require('@/assets/no-image.png')" alt="">
        <img  v-else-if="images.length === 1" :src="'https://api.kirpichkrasnodar.ru/file/download/' + images[0]"
             alt="">
        <Galleria
            v-else
            :value="images"
            :responsiveOptions="responsiveOptions2"
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
            responsiveOptions2: [
                {
                    breakpoint: '768px',
                    numVisible: 3
                },
                {
                    breakpoint: '560px',
                    numVisible: 1
                }
            ]
        }
    },
    components: {
        Galleria,
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
