<script setup>
import { ref } from 'vue';

// analytics stuff
import { analytics } from '../firebase';
import { getAnalytics, logEvent } from "firebase/analytics";

import vuejs from '../assets/technologies/vuejs.svg';
import sass from '../assets/technologies/sass.svg';
import css from '../assets/technologies/css.svg';
import laravel from '../assets/technologies/laravel.svg';
import mysql from '../assets/technologies/mysql.svg';
import git from '../assets/technologies/git.svg';
import c from '../assets/technologies/c.svg';
import bash from '../assets/technologies/bash.svg';
import linux from '../assets/technologies/linux.svg';
import nextjs from '../assets/technologies/nextjs.svg';
import reactjs from '../assets/technologies/reactjs.svg';
import typescript from '../assets/technologies/typescript.svg';
import tailwindcss from '../assets/technologies/tailwindcss.svg';
import awssvg from '../assets/technologies/awssvg.svg';
import csharp from '../assets/technologies/csharp.svg';
import unity from '../assets/technologies/unity.svg';
import html from '../assets/technologies/html.svg';
import javascript from '../assets/technologies/javascript.svg';
import firebasesvg from '../assets/technologies/firebasesvg.svg';
import java from '../assets/technologies/java.svg';
import python from '../assets/technologies/python.svg';
import nuxtjs from '../assets/technologies/nuxtjs.svg';
import cplusplus from '../assets/technologies/cplusplus.svg';
import sqlite from '../assets/technologies/sqlite.svg';
import go from '../assets/technologies/go.svg';

const techList = {
  "vuejs": vuejs,
  "sass": sass,
  "css": css,
  "laravel": laravel,
  "mysql": mysql,
  "git": git,
  "c": c,
  "bash": bash,
  "linux": linux,
  "nextjs": nextjs,
  "reactjs": reactjs,
  "typescript": typescript,
  "tailwindcss": tailwindcss,
  "aws": awssvg,
  "csharp": csharp,
  "unity": unity,
  "html": html,
  "javascript": javascript,
  "firebase": firebasesvg,
  "java": java,
  "python": python,
  "nuxtjs": nuxtjs,
  "cpp": cplusplus,
  "sqlite": sqlite,
  "go": go,
}

let an = null;

if (import.meta.env.VITE_MODE == 'prod') {
  an = getAnalytics();
}

const rotateX = ref(0);
const rotateY = ref(0);

defineProps({
  name: String,
  description: String,
  hostingLink: String,
  codeLink: String,
  photo: String,
  id: String,
  technologies: Array,
  index: Number,
});

function abtMPEffect(e) {
  rotateY.value = 20 * ((e.layerX - e.target.clientWidth / 2) / e.target.clientWidth);
  rotateX.value = -20 * ((e.layerY - e.target.clientHeight / 2) / e.target.clientHeight);
}

function abtMPREffect() {
  rotateX.value = 0;
  rotateY.value = 0;
}


</script>

<template>
  <div id="project-con" :class="id" :href="link" :style="{ 'top': 100 + index * 8 + 'px' }">
    <div id="links">
      <h1 id="title-con">{{ name }}</h1>
      <a v-if="hostingLink" @click="logEvent(an, 'Clicked A Project Link', { linkName: id });" :href="hostingLink"
        target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--secondary-variant)" class="bi bi-globe2"
          viewBox="0 0 16 16">
          <path
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
        </svg>
      </a>
      <a v-if="codeLink" @click="logEvent(an, 'Clicked A Social Link', { linkName: 'GitHub ' + id });" :href="codeLink"
        target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--secondary-variant)" class="bi bi-code-square"
          viewBox="0 0 16 16">
          <path
            d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
          <path
            d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0m2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0" />
        </svg>
      </a>
    </div>
    <p id="description">
      <template v-for="tech of technologies" :key="tech">
        <img id="tech-item" :src="techList[tech]" alt="" />
      </template>
      <br>
      {{ description }}
    </p>

    <div id="project-img" @mousemove="abtMPEffect" @mouseleave="abtMPREffect()">
      <img id="project-img-data" :src="photo" alt="Coming Soon"
        :style="{ 'transform': 'perspective(2000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)' }">
    </div>
  </div>
</template>

<style scoped>
#tech-item {
  width: 20px;
  height: 20px;
  margin: 1px 2px 1px 2px;
}

#project-con {
  margin: 0px 5% 40vh 5%;
  height: 300px;
  padding: 24px;
  display: grid;
  grid-template-columns: 420px 1fr;
  grid-template-rows: 50px 202px;
  border-radius: 32px;
  background-color: var(--foreground-2);
  box-shadow: 0px 0px 4px 1px var(--surface);
  position: sticky;
  overflow: hidden;
  gap: 0px 24px;
}

#project-con:hover {
  background-color: var(--foreground-3);
  box-shadow: 0px 0px 8px 2px var(--surface);
}

#project-con #project-img {
  height: 100%;
  width: 420px;
  grid-column: 1;
  grid-row: 1 / span 2;
  border-radius: 8px;

}

#project-con #project-img #project-img-data {
  height: 100%;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0px 0px 4px 1px var(--surface);

}

#project-con #description {
  grid-row: 2;
  grid-column: 2;
}

#project-con #links {
  display: flex;
  gap: 8px;
}

#project-con #links a {
  text-decoration: none;
  color: var(--secondary-variant);
  height: full;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 3 / 5;
}

#project-con #links #title-con {
  color: var(--secondary-variant);
}


#project-con #links a svg {
  height: 100%;
  width: 100%;
}

#project-con #links a:hover {
  transition-timing-function: ease-in;
  transition: 0.2s;
  transform: scale(1.1);
}

@media only screen and (max-width: 935px) {
  #project-con {
    grid-template-columns: 338px 1fr;
  }

  #project-con #project-img {
    grid-row: 2;
    width: 331px;
  }

  #project-con #description {
    grid-row: 1 / span 2;
  }

  #project-con #links {
    grid-column: 1;
  }
}

@media only screen and (max-width: 760px) {

  #project-con {
    grid-template-columns: 89px 1fr;
    gap: 16px 0px;
  }

  #project-con #project-img {
    grid-row: 1;
    width: 82px;
  }

  #project-con #links {
    grid-column: 2;
    font-size: 2.8vw;
  }

  #project-con #description {
    grid-row: 2;
    grid-column: 1 / span 2;
  }
}

@media only screen and (max-width: 420px) {
  #project-con {
    height: 430px;
  }

  #project-con #links {
    font-size: 2.5vw;
  }
}
</style>