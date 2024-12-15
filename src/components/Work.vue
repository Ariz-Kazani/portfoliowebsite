<script setup>
import { ref } from 'vue';
import vuejs from '../assets/technologies/vuejs.svg';
import sass from '../assets/technologies/sass.svg';
import css from '../assets/technologies/css.svg';
import laravel from '../assets/technologies/laravel.svg';
import mysql from '../assets/technologies/mysql.svg';
import git from '../assets/technologies/git.svg';
import c from '../assets/technologies/c.svg';
import bash from '../assets/technologies/bash.svg';
import linux from '../assets/technologies/linux.svg';
import javascript from '../assets/technologies/javascript.svg';
import html from '../assets/technologies/html.svg';
import php from '../assets/technologies/php.svg';

const work = ref([
  {
    company: 'Carleton University',
    position: 'Teaching Assistant',
    type: '',
    date: 'September 2024 - Present',
    technologies: [c, bash, linux],
    description: `I am currently working as a Teaching Assistant at Carleton University for COMP 2401 - Introduction to Systems Programming, where I am responsible for helping students learn the ins and outs of the C programming language. This is done through weekly labs and office hours, where I help students with their assignments, and provide guidance on how to approach and solve problems. The most comon questions I get are about pointers, memory management, and how to use the Linux command line.`,
    id: 'carleton-university',
    isShown: false,
  },
  {
    company: 'ConfiDens Analytics',
    position: 'Software Developer Intern',
    type: '',
    date: 'May 2024 - August 2024',
    technologies: [laravel, php, vuejs, javascript, html, sass, css, mysql, git],
    description: `In the summer of 2024 I interned at ConfiDens Analytics as a Software Developer, I've had the opportunity to work on diverse and impactful projects that have significantly enhanced my technical skills and practical knowledge. One of my primary responsibilities was to create the competitor analysis feature. This has required a keen eye for design and a strong understanding of front-end technologies such as SASS, and Vue.js. Additionally, I lead research and development of the competitor analysis feature which has exposed me to both back-end and front-end development.`,
    id: 'confidens',
    isShown: false,
  },
])

</script>

<template>
  <div id="work-con" class="work-con">
    <template v-for="(position, index) in work" :key="position.id">
      <div id="test">
        <div id="test-child" :class="{ 'test-child-right': index % 2 == 0, 'test-child-left': index % 2 != 0}">
          <div id="work-item">
            <h1 id="work-item-comp">{{ position.company }}</h1>
            <h2 id="work-item-pos">{{ position.position }}</h2>
            <h4 id="work-item-aux-info">{{ position.type }} {{ position.date }}</h4>
            <template v-for="tech in position.technologies" :key="tech">
              <img :src="tech" alt="" />
            </template>
            <p>{{ position.description }}</p>
          </div>
        </div>
      </div>

    </template>
  </div>
</template>

<style scoped>
h1 {
  color: var(--secondary);
}

img {
  margin: 2px;
  margin-top: 8px;
  width: 20px;
  height: 20px;
}

#test {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  /* background-color: aqua; */
}

#test-child {
  width: 100%;
  display: flex;
  justify-content: center;
}

.test-child-right {
  grid-column: 2;
  border-left: 1px solid pink;
}

.test-child-left {
  grid-column: 1;
  border-right: 1px solid pink;
}

#work-con {
  min-height: 20vh;
  width: 100%;
  padding: 32px 0 32px 0;
  display: grid;
  /* gap: 32px; */
  /* justify-content: space-evenly; */
}

#work-con #work-item {
  padding: 24px;
  border-radius: 32px;
  width: 40vw;
  background-color: var(--foreground-2);
  box-shadow: 0px 0px 4px 1px var(--surface);
  /* background-color: pink; */

}

#work-con #work-item:hover {
  background-color: var(--foreground-3);
  box-shadow: 0px 0px 8px 2px var(--surface);
}



@media screen and (max-width: 850px) {
  #work-con {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  #work-con #work-item {
    width: 80vw;
    margin: 0 0 128px 0;
  }

}
</style>