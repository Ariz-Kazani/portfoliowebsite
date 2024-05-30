<script setup>
import { ref } from 'vue';
import Card from './Card.vue';

const work = ref([
  {
    company: 'ConfiDens Analytics',
    position: 'Full Stack Developer',
    type: 'Intern',
    date: 'May 2024 - Present',
    description: `I am currently interning at ConfiDens Analytics as a Full Stack Software Developer, 
    I've had the opportunity to work on diverse and impactful projects that have significantly enhanced my 
    technical skills and practical knowledge. One of my primary responsibilities has been improving various UI elements, 
    which has involved refining the user interface to ensure a seamless and intuitive user experience. 
    This has required a keen eye for design and a strong understanding of front-end technologies such as SASS, and Vue.js. 
    Additionally, I've been instrumental in developing a competitor analysis feature, which has entailed both back-end and front-end development.`,
    id: 'confidens',
  },
])

</script>

<template>
  <div id="work-con">
    <div id="spacer">
    </div>
    <template v-for="(position, index) in work" :key="position.id">
      <div id="work-item">
        <h1 id="work-item-comp">{{ position.company }}</h1>
        <h2 id="work-item-pos">{{ position.position }}</h2>
        <h4 id="work-item-aux-info">{{ position.type }} &#x2022; {{ position.date }}</h4>
        <p>{{ position.description }}</p>
      </div>
    </template>
    <div id="spacer"></div>
  </div>
</template>

<style scoped>
#work-con {
  min-height: 230vh;
  width: 100%;
}

#work-con #spacer {
  height: 95vh;
}

#work-con #work-item {
  margin: 0 auto;
  max-width: 90%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 4px #1F2366;
  background: white;
  margin-bottom: 20px;
  width: 100%;
}

#work-con #work-item #work-item-comp {
  color: #1F2366;
  font-size: 30px;
}

#work-con #work-item #work-item-pos {
  color: #303470;
  font-size: 20px;
}

#work-con #work-item #work-item-aux-info {
  color: #3c4074;
  font-size: 15px;
}

#work-con #work-item p {
  font-size: 18px;
  margin-top: 10px;
  line-height: 1.5;
}

@media (prefers-color-scheme: dark) {
  #work-con #work-item {
    background-color: rgb(52, 52, 52);
    box-shadow: 0px 0px 20px 4px #8F95EE;
  }

  #work-con #work-item #work-item-comp {
    color: #4651EA;
  }

  #work-con #work-item #work-item-pos {
    color: #515bdb;
  }

  #work-con #work-item #work-item-aux-info {
    color: #656de0;
  }
}
</style>