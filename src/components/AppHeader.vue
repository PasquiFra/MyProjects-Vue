<script>

export default {
    name: "Header",
    data: () => ({

    })
}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <a class="navbar-brand" href="#">Boolfolio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink to="/" class="nav-link" aria-current="page">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/projects" class="nav-link" aria-current="page">Progetti</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/profile" class="nav-link">Profilo</RouterLink>
                    </li>
                </ul>
            </div>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Cerca progetto...">
                <button class="btn btn-outline-success" type="submit">Cerca</button>
            </form>
        </div>
    </nav>
</template>

<style lang="scss" scoped></style>