<template>
    <div class="social-bar">
        <div class="social-content">
            <a v-tooltip="'Напишите нам в Telegram!'" href="#"><img :src="require('@/assets/ycta-icons/telegram-colored.png')" alt=""></a>
            <a v-tooltip="'Напишите нам в WhatsApp!'" href="#"><img :src="require('@/assets/ycta-icons/wa-colored.png')" alt=""></a>
        </div>
    </div>
</template>

<script>

export default {
    name: "socialBar"
}
</script>

<style scoped>
    .social-bar {
        position: fixed;
        bottom: 30px;
        right: 30px;
    }

    .social-content {
        display: flex;
        gap: 12px;
    }

    .social-content img {
        width: 60px;
    }
</style>
