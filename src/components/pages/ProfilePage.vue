<script>
export default {
    name: 'Profile',
}
</script>

<template>
    <h1 class="text-center my-3">Contattami</h1>

    <form @submit.prevent="">

        <div class="mb-3">
            <label for="email_send" class="form-label">Indirizzo Email</label>
            <input type="email" class="form-control" id="email_send" placeholder="mario@example.com">
        </div>
        <div class="mb-3">
            <label for="text_send" class="form-label">Invia un messaggio:</label>
            <textarea class="form-control" id="text_send" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary mb-3">Invia richiesta</button>

    </form>

</template>

<style lang="scss" scoped></style>