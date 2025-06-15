<script setup>
import { ref } from 'vue';

const techs = ref([
  'C', 'C#', 'C++', 'Java', 'Python', 'R', 'JavaScript', 'TypeScript', 'PHP', 'HTML5', 'CSS', 'SASS', 'TailwindCSS', 'Next.js', 'Vue.js', 'React.js', 'Laravel', 'Node.js', 'Deno.js', 'AWS', 'DynamoDB', 'Firebase', 'Firestore', 'Unity', 'Git', 'SQL', 'Bitbucket', 'Nuxt.js', 'SQLite', 'Go', 'Android', 'iOS', 'Docker', 'MySQL'
]);

const randomTech = ref(null);

function pickRandomTech() {
  const randomTechItem = Math.floor(Math.random() * techs.value.length);
  const randomIndex = Math.floor(Math.random() * 10) + 2;
  randomTech.value = techs.value[randomTechItem] + randomIndex;
  setTimeout(() => {
    randomTech.value = null;
  }, 10);
}

setInterval(pickRandomTech, 700);

</script>
<template>
  <div id="tech-an-main-con">
    <template v-for="i in 14">
      <span :class="randomTech == 'TailwindCSS' + i ? '' : 'foused-tech'" id="un-focused-tech">TailwindCSS</span>
      <span :class="randomTech == 'C' + i ? '' : 'foused-tech'" id="un-focused-tech">C</span>
      <span :class="randomTech == 'Java' + i ? '' : 'foused-tech'" id="un-focused-tech">Java</span>
      <span :class="randomTech == 'Python' + i ? '' : 'foused-tech'" id="un-focused-tech">Python</span>
      <span :class="randomTech == 'R' + i ? '' : 'foused-tech'" id="un-focused-tech">R</span>
      <span :class="randomTech == 'JavaScript' + i ? '' : 'foused-tech'" id="un-focused-tech">JavaScript</span>
      <span :class="randomTech == 'C#' + i ? '' : 'foused-tech'" id="un-focused-tech">C#</span>
      <span :class="randomTech == 'TypeScript' + i ? '' : 'foused-tech'" id="un-focused-tech">TypeScript</span>
      <span :class="randomTech == 'PHP' + i ? '' : 'foused-tech'" id="un-focused-tech">PHP</span>
      <span :class="randomTech == 'HTML5' + i ? '' : 'foused-tech'" id="un-focused-tech">HTML5</span>
      <span :class="randomTech == 'CSS' + i ? '' : 'foused-tech'" id="un-focused-tech">CSS</span>
      <span :class="randomTech == 'Unity' + i ? '' : 'foused-tech'" id="un-focused-tech">Unity</span>
      <span :class="randomTech == 'Git' + i ? '' : 'foused-tech'" id="un-focused-tech">Git</span>
      <span :class="randomTech == 'SASS' + i ? '' : 'foused-tech'" id="un-focused-tech">SASS</span>
      <span :class="randomTech == 'SQL' + i ? '' : 'foused-tech'" id="un-focused-tech">SQL</span>
      <span :class="randomTech == 'C++' + i ? '' : 'foused-tech'" id="un-focused-tech">C++</span>
      <span :class="randomTech == 'Next.js' + i ? '' : 'foused-tech'" id="un-focused-tech">Next.js</span>
      <span :class="randomTech == 'Vue.js' + i ? '' : 'foused-tech'" id="un-focused-tech">Vue.js</span>
      <span :class="randomTech == 'React.js' + i ? '' : 'foused-tech'" id="un-focused-tech">React.js</span>
      <span :class="randomTech == 'Laravel' + i ? '' : 'foused-tech'" id="un-focused-tech">Laravel</span>
      <span :class="randomTech == 'Node.js' + i ? '' : 'foused-tech'" id="un-focused-tech">Node.js</span>
      <span :class="randomTech == 'Deno.js' + i ? '' : 'foused-tech'" id="un-focused-tech">Deno.js</span>
      <span :class="randomTech == 'AWS' + i ? '' : 'foused-tech'" id="un-focused-tech">AWS</span>
      <span :class="randomTech == 'DynamoDB' + i ? '' : 'foused-tech'" id="un-focused-tech">DynamoDB</span>
      <span :class="randomTech == 'Firebase' + i ? '' : 'foused-tech'" id="un-focused-tech">Firebase</span>
      <span :class="randomTech == 'MySQL' + i ? '' : 'foused-tech'" id="un-focused-tech">MySQL</span>
      <span :class="randomTech == 'Firestore' + i ? '' : 'foused-tech'" id="un-focused-tech">Firestore</span>
      <span :class="randomTech == 'Nuxt.js' + i ? '' : 'foused-tech'" id="un-focused-tech">Nuxt.js</span>
      <span :class="randomTech == 'SQLite' + i ? '' : 'foused-tech'" id="un-focused-tech">SQLite</span>
      <span :class="randomTech == 'Go' + i ? '' : 'foused-tech'" id="un-focused-tech">Go</span>
      <span :class="randomTech == 'Android' + i ? '' : 'foused-tech'" id="un-focused-tech">Android</span>
      <span :class="randomTech == 'iOS' + i ? '' : 'foused-tech'" id="un-focused-tech">iOS</span>
      <span :class="randomTech == 'Docker' + i ? '' : 'foused-tech'" id="un-focused-tech">Docker</span>
    </template>
  </div>
</template>

<style scoped>
span {
  font-family: "Azeret Mono", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

#tech-an-main-con {
  white-space: initial;
  word-break: break-all !important; 
  overflow-wrap: break-word !important;
  position: relative;
}

#tech-an-main-con::before {
  content: "";
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: linear-gradient(to top, rgba(255, 255, 255, 0), var(--background) 90%);
  width: 100%;
  height: 12em;
}

#tech-an-main-con::after {
  content: "";
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  pointer-events: none;
  background-image: linear-gradient(to bottom, transparent, var(--background) 90%);
  width: 100%;
  height: 12em;
}

#un-focused-tech {
  white-space: normal;
  overflow-wrap: break-word;
  color: var(--foreground-1);
  transition: color 1s ease;
}

#un-focused-tech:hover {
  color: var(--primary);
  transition: none;
}

#tech-an-main-con .foused-tech {
  animation: tech-animation 3s;
}

@keyframes tech-animation {
  0% {
    color: var(--primary);
  }

  50% {
    color: var(--primary);
  }

  100% {
    color: var(--foreground-1);
  }

}
</style>