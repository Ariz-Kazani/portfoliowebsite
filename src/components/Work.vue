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
import java from '../assets/technologies/java.svg';

const work = ref([
  {
    company: 'Carleton University',
    position: 'Teaching Assistant',
    type: 'TA for COMP 1406:',
    date: 'January 2025 - Present',
    technologies: [java],
    description: `Incoming TA for COMP 1406, Introduction to Computer Science II`,
    id: 'carleton-university-winter-2025',
    isShown: false,
  },
  {
    company: 'Carleton University',
    position: 'Teaching Assistant',
    type: 'TA for COMP 2401:',
    date: 'September 2024 - December 2024',
    technologies: [c, bash, linux],
    description: `In the fall term of 2024, I was working as a Teaching Assistant at Carleton University for COMP 2401 - Introduction to Systems Programming, where I am responsible for helping over 100 students learn the ins and outs of the C programming language. This is done through weekly labs and office hours, where I help students with their assignments, and provide guidance on how to approach and solve problems. The most comon questions I get are about pointers, memory management, and how to use the Linux command line.`,
    id: 'carleton-university-fall-2024',
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
      <div id="work-child">
        <div id="timeline-main">
          <div :class=" index == 0? 'timeline-main-inner-first' : index == work.length - 1 ? 'timeline-main-inner-last' :'timeline-main-inner'"></div>
        </div>
        <div id="timeline-connecting-line" :class="index % 2 == 0 ? 'timeline-connecting-line-right' : 'timeline-connecting-line-left'"></div>
        <div id="work-place-child" :class="{ 'work-place-child-right': index % 2 == 0, 'work-place-child-left': index % 2 != 0}">
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
  color: var(--secondary-variant);
}

img {
  margin: 2px;
  margin-top: 8px;
  width: 20px;
  height: 20px;
}

#work-child {
  display: grid;
  grid-template-columns: 1fr 5% 4px 5% 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
}

#timeline-main {
  width: 100%;
  height: 100%;
  grid-column: 3;
  grid-row: 1;
  display: flex;
}

#timeline-main .timeline-main-inner {
  width: 100%;
  height: 100%;
  background-color: var(--primary);
}

#timeline-main .timeline-main-inner-first {
  width: 100%;
  background-color: var(--primary);
  height: calc(50% + 2px);
  align-self: end;
}

#timeline-main .timeline-main-inner-last {
  width: 100%;
  background-color: var(--primary);
  height: calc(50% + 2px);
  align-self: start;
}

#work-place-child {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 32px 0 32px 0;
}

.work-place-child-right {
  grid-column: 5;
  padding-right: 10%;
}

.work-place-child-left {
  grid-column: 1;
  padding-left: 10%;
}

#work-child #timeline-connecting-line {
  background-color: var(--primary);
  height: 4px;
  width: 100%;
  align-self: center;
  grid-row: 1;
}

#work-child .timeline-connecting-line-left {
  grid-column: 2;
}

#work-child .timeline-connecting-line-right {
  grid-column: 4;
}

#work-con {
  min-height: 20vh;
  width: 100%;
  padding: 32px 0 32px 0;
  display: grid;
}

#work-con #work-item {
  padding: 24px;
  border-radius: 32px;
  width: 100%;
  background-color: var(--foreground-2);
  box-shadow: 0px 0px 4px 1px var(--surface);
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
    width: 80%;
    margin: 0 0 128px 0;
  }

  #work-child {
    grid-template-columns: 1fr;
    width: 100%;
    align-items: center;
  }

  #timeline-main {
    display: none;
  }

  #work-place-child {
    width: 100%;
  }

  .work-place-child-right {
    grid-column: 1;
    padding: 0;
  }

  .work-place-child-left {
    grid-column: 1;
    padding: 0;
  }
}
</style>