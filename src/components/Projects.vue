<template>
  <section id="projects" class="project-wrapper">
      <h1>Projects</h1>
      <ul class="project" v-for="project in projects" :key="project.id">
          <li>
              <section>
                  <ul>
                      <li>
                          <div class="label">Name:</div>
                          <div class="content">{{project.name}}</div>
                      </li>
                      <li v-if="project.url">
                          <div class="label">URL:</div>
                          <div class="content"><a href="">{{project.url}}</a></div>
                      </li>
                      <li>
                          <div class="label">Technologies:</div>
                          <div class="content">{{project.technologies}}</div>
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
    name: 'Projects',
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


