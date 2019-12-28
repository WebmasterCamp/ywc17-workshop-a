<template>
    <b-container>
        <div>
            <h1 class="my-4 text-center">คุณคือใคร ?</h1>
            <b-row align-h="center">
                <b-col cols="5">
                    <div class="card text-center" @click="onSelectActor('taker')">Taker</div>
                </b-col>
                <b-col cols="5"><div class="card text-center" @click="onSelectActor('giver')">Giver</div></b-col>
            </b-row>
        </div>
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

<style>
</style>