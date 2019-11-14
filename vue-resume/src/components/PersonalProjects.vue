<template>
    <section id="personalProjects" class="project-wrapper">
        <h1>Personal Projects</h1>
        <ul class="project" v-for="project in projects" :key="project.id">
            <li>
                <section>
                    <ul>
                        <li>
                            <div class="label">Name:</div>
                            <div class="content">{{project.title}}</div>
                        </li>
                        <li v-if="project.link">
                            <div class="label">URL:</div>
                            <div class="content"><a :href="project.link">{{project.link}}</a></div>
                        </li>
                        <li>
                            <div class="label">Description:</div>
                            <div class="content">{{project.description}}</div>
                        </li>
                    </ul>
                </section>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'PersonalProjects',
    props: {
        projects: []
    }
}
</script>

<style scoped>
li {
  display: flex;
}
.content {
  margin-left: 5px;
}
</style>


