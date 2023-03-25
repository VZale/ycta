<template>
    <div class="content">
        <h2>Заявка отправлена</h2>
        <p>Благодарим за обращение! Наш менеджер свяжется с вами в ближайшее время.</p>
        <button class="button red large" @click="$emit('close-modal')">Понятно</button>
    </div>
</template>

<script>
export default {
    name: "ApplicationModal"
}
</script>

<style scoped>
.content {
    padding: 40px;
    background: #FFFFFF;
    border-radius: 12px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 500px;
}
h2 {
    font-weight: 500;
    font-size: 40px;
    line-height: 110%;
    color: #32343B;
}
p {
    font-size: 18px;
    margin: 32px 0;
}
button {
    width: 100%;
}
</style>
