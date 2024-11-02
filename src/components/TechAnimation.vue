<script setup></script>
<template>
  <div id="tech-an-main-con">
    <template v-for="i in 23">
      <span>C</span>
      <span>C#</span>
      <span>C++</span>
      <span>Java</span>
      <span>Python</span>
      <span>R</span>
      <span>JavaScript</span>
      <span>TypeScript</span>
      <span>PHP</span>
      <span>HTML5</span>
      <span>CSS</span>
      <span>SASS</span>
      <span>TailwindCSS</span>
      <span>Next.js</span>
      <span>Vue.js</span>
      <span>React.js</span>
      <span>Laravel</span>
      <span>Node.js</span>
      <span>Deno.js</span>
      <span>AWS</span>
      <span>DynamoDB</span>
      <span>Firebase</span>
      <span>Firestore</span>
    </template>
  </div>
</template>

<style scoped>
#tech-an-main-con {
  white-space: initial;
  overflow-wrap: break-word;
  position: relative;
}

#tech-an-main-con::before {
  content: "";
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: linear-gradient(to top, rgba(255,255,255,0), var(--dark-mode-background) 90%);
  width: 100%;
  height: 10em;
}

#tech-an-main-con::after {
  content: "";
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  pointer-events: none;
  background-image: linear-gradient(to bottom, rgba(255,255,255,0), var(--dark-mode-background) 90%);
  width: 100%;
  height: 10em;
}

span {
  white-space: normal;
  overflow-wrap: break-word;
  color: rgb(30, 30, 30);
  transition: cubic-bezier(0.075, 0.82, 0.165, 1);
}

span:hover {
  color: var(--primary-dark-mode);
}
</style>