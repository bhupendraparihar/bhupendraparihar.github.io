<template>
    <section>
    <div class="header">{{name}}</div>
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
.header{
    font-family: 'Barlow', sans-serif;
    text-transform: uppercase;
    font-size: 30px;
}
li {
    list-style: none;
}
</style>

