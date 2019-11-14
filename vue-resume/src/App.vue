<template>
  <div id="app">
    <Header :name="myResumeData.name" 
        :title="myResumeData.title" 
        :phoneNumber="myResumeData.phoneNumber"
        :email="myResumeData.email"
        :website="myResumeData.website"
        :github="myResumeData.github"
        :linkedin="myResumeData.linkedin" />
    <Objective title="Objective" :text="myResumeData.objective"/>
    <Objective title="Executive Summary" :text="myResumeData.aboutme"/>
    <Skills name="Skills" :skills="myResumeData.skills"/>
    <Skills name="Frameworks/ Libraries/ DataFormat" :skills="myResumeData.frameworks"/>
    <Projects :projects="myResumeData.projects" />
    <PersonalProjects :projects="myResumeData.personalProjects" />
    <Experience title="Experiencesss" :experience="myResumeData.experience" />
  </div>
</template>

<script>
import Header  from './components/Header.vue'
import Objective from './components/Objective.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Experience from './components/Experience.vue'
import PersonalProjects from './components/PersonalProjects'
import myResumeData from './assets/resume.json'

export default {
  name: 'app',
  components: {
    Header,
    Objective,
    Skills,
    Projects,
    Experience,
    PersonalProjects
  },
  created() {
    this.myResumeData = myResumeData;
  }
}
</script>

<style>
body {
    font-family: 'Open Sans', sans-serif;
}

#content {
    margin: 0 auto;
    width: 800px;
}

.first {
    float: right;
}

li {
    list-style: none;
}

section h1 {
    margin-bottom: 0px;
    padding-bottom: 5px;
    margin-right: 10px;
    margin-top: .8em;
    border-bottom: 1px solid #e3e3e3;
}

.seperator {
    margin: 0 .5rem 0 .5rem;
}

.name {
    font-size: 2rem;
}

section .label {
    font-weight: bold;
    width: 150px;
    text-align: right;
    padding-right: .5em;
    display: inline-block;
}

section .content {
    vertical-align: top;
    width: 600px;
    display: inline-block;
}

section section {
    margin-bottom: 2rem;
}

section ul {
    width: 800px;
    overflow: hidden;
    padding-left: 0;
}

section .double li {
    float: left;
    width: 30%;
}

#contact {
    font-size: 13px;
}

#contact a {
    text-decoration: none;
}
</style>
