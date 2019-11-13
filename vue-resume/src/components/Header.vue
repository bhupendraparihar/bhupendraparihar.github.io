<template>
    <div class="header">
        <div class="name">{{ name }}</div>
        <div class="title">{{ title }} </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        name: String,
        title: String
    }
}
</script>

<style scoped>
    .name, .title {
        font-family: 'Barlow', sans-serif;
    }
    .name {
        font-size: 40px;
    }
    .title{
        font-size: 30px;
    }

</style>

