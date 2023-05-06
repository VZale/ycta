<template>
    <div class="gallery">
        <img
            :src="images.length ? 'https://api.enternaloptimist.com/file/download/' + images[0] : require('assets/no-image.png')">
    </div>
</template>

<script>
export default {
    props: ['images'],
    name: "ProductGallery",
}
</script>

<style scoped>
.gallery {
    margin-left: 120px;
}

img {
    width: 100%;
    height: 420px;
    object-fit: contain;
    border-radius: 12px;
}
</style>
