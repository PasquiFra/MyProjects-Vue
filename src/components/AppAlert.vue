<script>

export default {
    name: 'Boolfolio | Alert',
    props: { show: Boolean },
    emits: ['close', 'retry']
}
</script>

<template>
    <div v-if="show" class="alert alert-danger alert-dismissible fade show" role="alert">
        <h4>Si è verificato un errore!</h4>
        <p>Che ne dici di fare un altro tentativo?
            <strong class="text-decoration-underline" role="button" :click="$emit('retry')">Riprova</strong>
        </p>
        <hr>
        <button class="btn btn-light" type="button" :click="$emit('close')">Chiudi</button>
    </div>
</template>

<style lang="scss" scoped></style>
