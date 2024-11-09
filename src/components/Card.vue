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
  <div id="project-con" :class="id" :href="link" :style="{ 'top': 100 + index * 10 + 'px' }">
    <div id="links">
      <a @click="() => {if (hostingLink) logEvent(an, 'Clicked A Project Link', { linkName: id });}" 
        :style="{ 'cursor': hostingLink ? 'pointer' : 'default' }" 
        :href="hostingLink" target="_blank">
        <h1 id="title-con">{{ name }}
        </h1>
      </a>
      <a v-if="codeLink" @click="logEvent(an, 'Clicked A Social Link', { linkName: 'GitHub ' + id });" :href="codeLink" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-square"
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
  margin: 1px 1px 1px 1px;
}

#project-con {
  margin: 0px 5% 40vh 5%;
  height: 300px;
  padding: 24px; 
  display: grid;
  grid-template-columns: 427px 1fr;
  grid-template-rows: 50px 202px;
  border-radius: 32px;
  box-shadow: 0px 0px 4px 1px var(--surface);
  background-color: var(--foreground);
  position: sticky;
  overflow: hidden;
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
  grid-row: 1;
  grid-column: 2;
  display: flex;
}

#project-con #links a {
  text-decoration: none;
  color: var(--primary);
  padding: 0 0px 0 0px;
  height: full;
}

#project-con #links a svg{
  margin: 0 5px 0 5px;
  height: 90%;
  width: 50%;
  font-size: 1em;


}

@media only screen and (max-width: 890px) {
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

@media only screen and (max-width: 720px) {

  #project-con {
    grid-template-columns: 89px 1fr;
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