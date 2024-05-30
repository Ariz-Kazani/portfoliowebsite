<script setup>
import { ref } from 'vue';
import { analytics } from '../firebase';
import { getAnalytics, logEvent } from "firebase/analytics";
const an = getAnalytics();

const rotateX = ref(0);
const rotateY = ref(0);

defineProps({
  name: String,
  description: String,
  link: String,
  photo: String,
  id: String,
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
    <a @click="logEvent(an, 'Clicked A Project Link', { linkName: id });" :href="link" target="_blank">
      <h1 id="title-con">{{ name }}</h1>
    </a>
    <p id="description"> {{ description }}</p>

    <div id="project-img" @mousemove="abtMPEffect" @mouseleave="abtMPREffect()">
      <img id="project-img-data" :src="photo" alt="Coming Soon"
        :style="{ 'transform': 'perspective(2000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)' }">
    </div>
  </div>
</template>

<style scoped>
#project-con {
  margin: 0px 5% 40vh 5%;
  height: 300px;
  padding: 30px;
  display: grid;
  grid-template-columns: 427px 1fr;
  grid-template-rows: 50px 190px;
  border-radius: 30px;
  box-shadow: 0px 0px 20px 4px #1F2366;
  background-color: white;
  position: sticky;
  overflow: hidden;
}

#project-con #project-img {
  height: 100%;
  width: 420px;
  grid-column: 1;
  grid-row: 1 / span 2;
  border-radius: 5px;
}

#project-con #project-img:hover {
  #project-img-data {
    box-shadow: 0px 0px 10px 1px #8F95EE;
  }
}

#project-con #project-img #project-img-data {
  height: 100%;
  width: 100%;
  border-radius: 5px;
}

#project-con #description {
  grid-row: 2;
  grid-column: 2;
}

#project-con a {
  grid-row: 1;
  grid-column: 2;
  color: #000766;
  text-decoration: none;
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

  #project-con a {
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

  #project-con a {
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

  #project-con a {
    font-size: 2.5vw;
  }
}

@media (prefers-color-scheme: dark) {
  #project-con {
    background-color: rgb(52, 52, 52);
    box-shadow: 0px 0px 20px 4px #8F95EE;
  }

  #project-con a {
    color: #4651EA;
  }
}
</style>