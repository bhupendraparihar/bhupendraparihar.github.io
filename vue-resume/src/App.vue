<template>
  <div id="app">
    <Header :name="myResumeData.name" :title="myResumeData.title"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Skills name="Skills" :skills="myResumeData.skills"/>
    <Projects :projects="myResumeData.projects" />
    <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Barlow&display=swap" rel="stylesheet">
  </div>
</template>

<script>
import Header  from './components/Header.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import myResumeData from './assets/resume.json'

export default {
  name: 'app',
  components: {
    Header,
    Skills,
    Projects
  },
  created() {
    this.myResumeData = myResumeData;
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #97D4C8;
}
</style>
