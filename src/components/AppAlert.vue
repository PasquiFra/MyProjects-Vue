<script>

export default {
    name: 'Boolfolio | Alert',
    props: { hasAlert: Boolean },
    emits: ['close', 'retry']

}
</script>

<template>
    <div v-if="hasAlert" class="alert alert-danger alert-dismissible fade show m-4" role="alert">
        <h4>Si è verificato un errore!</h4>
        <p>Che ne dici di fare un altro tentativo?
            <strong class="text-decoration-underline" role="button" @click="$emit('retry')">Riprova</strong>
        </p>
        <hr>
        <button class="btn btn-light" type="button" @click="$emit('close')">Chiudi</button>
    </div>
</template>

<style lang="scss" scoped></style>
