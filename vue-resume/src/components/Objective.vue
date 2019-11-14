<template>
    <section>
        <h1>{{title}}</h1>
        <p>{{text}}</p>
    </section>
</template>

<script>
export default {
    name: 'Objective',
    props: {
        title: String,
        text: String
    }
}
</script>

<style scoped>

</style>
