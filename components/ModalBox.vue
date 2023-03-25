<template>
    <div class="modal-box">
        <slot name="modalContent"></slot>
    </div>
</template>

<script>
export default {
    name: "ModalBox"
}
</script>

<style scoped>
.modal-box {
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
}
</style>
