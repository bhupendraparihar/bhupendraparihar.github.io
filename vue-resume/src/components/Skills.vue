<template>
    <section>
        <h1 class="header">{{name}}</h1>
        <ul>
            <li v-for="skill in skills" :key="skill.id">{{ skill }}</li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'Skills',
    props: {
        name: String,
        skills: []
    }
}
</script>

<style scoped>
li {
    list-style: none;
}
</style>

