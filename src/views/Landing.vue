<template>
    <b-container>
        <section>
            <h1 class="my-4 text-center">คุณคือใคร ?</h1>
            <b-row align-h="center" style="min-height: 50vh;">
                <b-col cols="5">
                    <div class="card text-center d-flex h-100 justify-content-center" @click="onSelectActor('taker')">Taker</div>
                </b-col>
                <b-col cols="5"><div class="card text-center d-flex h-100 justify-content-center" @click="onSelectActor('giver')">Giver</div></b-col>
            </b-row>
        </section>
    </b-container>
</template>

<script>
export default {
    methods: {
        onSelectActor(type) {
            if (type === 'taker') {
                this.$router.push({ path: '/taker'})
            } else {
                // .. todo
            }
        }
    }
}
</script>

<style scoped>
.card-select {
    min-height: 50vh;
}
</style>