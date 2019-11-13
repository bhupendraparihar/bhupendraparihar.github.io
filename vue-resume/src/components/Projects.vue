<template>
  <section class="project-wrapper">
    <section class="project" v-for="project in projects" :key="project.id">
      <div>{{ project.name }}</div>
      <div>{{ project.technologies }}</div>
      <div>{{ project.url }}</div>
      <div>{{ project.description }}</div>
      <div>{{ project.role }}</div>
    </section>
  </section>
</template>

<script>
export default {
    name: 'Projects',
    props: {
        projects: []
    }
}
</script>

<style scoped>
.project-wrapper {
    display: flex;
    flex-direction: row;
}
.project {
    border: 1px solid GREY;
    width: 300px;
    height: 300px;
}
</style>


