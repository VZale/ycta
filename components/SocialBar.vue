<template>
    <div class="social-bar">
        <div class="social-content">
            <a v-tooltip="'Напишите нам в Telegram!'" :href="`https://t.me/${telegram}.`"><img :src="require('@/assets/ycta-icons/telegram-colored.png')" alt=""></a>
            <a v-tooltip="'Напишите нам в WhatsApp!'" :href="`https://wa.me/${whatsapp}.`"><img :src="require('@/assets/ycta-icons/wa-colored.png')" alt=""></a>
        </div>
    </div>
</template>

<script>

import {TELEGRAM, WHATSAPP} from "@/common/config";

export default {
    name: "socialBar",
    data() {
        return {
            whatsapp: WHATSAPP,
            telegram: TELEGRAM
        }
    }
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
