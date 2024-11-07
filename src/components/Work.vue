<script setup>
import { onMounted, ref } from 'vue';
import searchEngineIMG from '../assets/laravel.svg';

const work = ref([
  {
    company: 'ConfiDens Analytics',
    position: 'Software Developer Intern',
    type: '',
    date: 'May 2024 - August 2024',
    description: `In the summer of 2024 I interned at ConfiDens Analytics as a Software Developer, 
    I've had the opportunity to work on diverse and impactful projects that have significantly enhanced my 
    technical skills and practical knowledge. One of my primary responsibilities has been improving various UI elements, 
    which has involved refining the user interface to ensure a seamless and intuitive user experience. 
    This has required a keen eye for design and a strong understanding of front-end technologies such as SASS, and Vue.js. 
    Additionally, I lead research and development of the competitor analysis feature, which has 
    entailed both back-end and front-end development.`,
    id: 'confidens',
    isShown: false,
  },
  {
    company: 'Carleton University',
    position: 'Teaching Assistant',
    type: '',
    date: 'September 2024 - Present',
    description: `I am currently working as a Teaching Assistant at Carleton University for COMP 2401 - Introduction to Systems Programming, 
    where I am responsible for helping students learn the ins and outs of of the C programming language. This is done through weekly labs and office hours, 
    where I help students with their assignments, and provide guidance on how to approach and solve problems.`,
    id: 'carleton-university',
    isShown: false,
  },
])

</script>

<template>
  <div id="work-con" class="work-con">
    <template v-for="(position, index) in work" :key="position.id">
      <div id="work-item">
        <h1 id="work-item-comp">{{ position.company }}</h1>
        <h2 id="work-item-pos">{{ position.position }}</h2>
        <h4 id="work-item-aux-info">{{ position.type }} {{ position.date }}</h4>
        <!-- <p>{{ position.description }}</p> -->
        <img src="../assets/laravel.svg" alt="Laravel" />
      </div>

    </template>
  </div>
</template>

<style scoped>
#work-con {
  min-height: 20vh;
  width: 100%;
  /* overflow: hidden; */
  padding: 32px 0 32px 0;
  display: flex;
  justify-content: space-evenly;
  color: black;
}

#work-con #work-item {
  padding: 24px;
  border-radius: 32px;
  box-shadow: 0px 0px 20px 4px #1F2366;
  background: white;
  width: 40vw;
}

@media (prefers-color-scheme: dark) {
}

/* TODO: update ui/ux for light mode */
@media (prefers-color-scheme: light) {
}
</style>