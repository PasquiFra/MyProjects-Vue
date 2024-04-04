<script>

export default {
    name: 'Paginazione',
    data: () => ({

    }),
    emits: ['fetchPage'],
    props: {
        links: Array
    }
}
</script>

<template>
    <nav>
        <ul class="pagination">
            <li v-for="link in links" :key="link.label" class="page-item"
                :class="{ active: link.active, disabled: !link.url }">
                <button class="page-link" v-html="link.label" :disabled="!link.url"
                    @click="$emit('fetchPage', link.url)">
                </button>
            </li>
        </ul>
    </nav>
</template>


<style lang="scss" scoped></style>