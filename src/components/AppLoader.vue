<script>
export default {
    name: 'AppLoader',
}
</script>
<template>
    <div class="overlay">
        <div class="spinner-border text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.overlay {
    z-index: 1;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.5);

    .spinner-border {
        width: 100px;
        height: 100px;
    }
}
</style>