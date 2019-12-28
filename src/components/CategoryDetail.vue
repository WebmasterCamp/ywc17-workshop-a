<template>
    <b-row class="content py-4">
        <b-col cols="5" class="icon">Icon</b-col>
        <b-col>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptas, nobis, ratione deleniti sed ipsum, repellendus eaque quia molestiae sapiente officiis omnis perspiciatis error quo quos earum qui. Nulla, libero?</b-col>
    </b-row>
</template>
<style lang="scss" scoped>
.content:nth-child(2n) {
    flex-direction: row-reverse;
}
.content:nth-child(2n) > .icon {
     display: flex;
        justify-content: flex-end;
}
</style>