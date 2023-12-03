<script setup>
import { ref, onMounted } from 'vue'
import Projects from './Projects.vue';

const openingMessage = ref('PushingTheLimitsOfCode!');
const oMessageStext = ref([]);
const oMessageLtext = ref(null);
const oMessageMtext = ref([]);
const showAMe = ref(false);

const rotateX = ref(0);
const rotateY = ref(0);

const test = ref(100);

window.addEventListener("scroll", () => {
  test.value = Math.min(100, 100 - window.scrollY / window.innerHeight * 65);
});

onMounted(() => {
  const abtMeData = document.querySelector("#about-me-data");

  const options = {
    root: null,
    threshold: 0.1,
    rootMargin: "",
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.target.id == 'about-me-data') {
        showAMe.value = true;
      } else if (entry.target.id == 'about-me-data') {
        showAMe.value = false;
      }
    })
  }, options);
  observer.observe(abtMeData);
});

function landingMEffect(id) {
  if (id == -1) {
    oMessageStext.value = [];
    oMessageMtext.value = [];
    oMessageLtext.value = null;
  } else {
    oMessageLtext.value = id;
    if (id > 0) {
      oMessageMtext.value.push(id - 1);
      if (id - 1 > 0) {
        oMessageStext.value.push(id - 2);
      }
    }

    if (id < openingMessage.value.length - 1) {
      oMessageMtext.value.push(id + 1);
      if (id < openingMessage.value.length - 2) {
        oMessageStext.value.push(id + 2);
      }
    }
  }
}

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
  <div id="body-con">
    <div id="landing-con-outer">
      <div class="spacer1a" :style="{ 'opacity': test + '%' }"></div>
      <div id="landing-con" :style="{ 'opacity': test + '%' }">
        <div id="img-con">
          <div id="img-style-con">
            <img
              src="https://images.ctfassets.net/cnu0m8re1exe/5rbmLp9h6Xk7WBETUO2Vui/bc9da4fdecc5ded795fa252b47d310b7/earth.jpg"
              alt="" id="earth-img">
          </div>
        </div>
        <div id="landingMCon">
          <span v-for="(char, index) in openingMessage" id="landing-message"
            :class="{ 'tLargeS': oMessageLtext == index, 'tMedS': oMessageMtext.includes(index), 'tSmallS': oMessageStext.includes(index), 'tDefaultS': !oMessageMtext.includes(index) && oMessageLtext != index && !oMessageStext.includes(index) }"
            @mouseover="landingMEffect(index)" @mouseleave="landingMEffect(-1)" :key="index">
            {{ char }} </span>
          <h2 id="alt-landing-message"> {{ openingMessage }}</h2>
        </div>
      </div>
    </div>
    <div id="about">
      <h1 id="about-title">About Me</h1>
      <div id="about-me-data" :class="{ 'abt-me-trans': showAMe, 'abt-me-trans-b': !showAMe }">
        <p id="about-me-info">
          Hi, my name is Ariz! I am an aspiring software engineer from Toronto, who is currently studying computer science
          at University. For as long as I can I've been taking things apart to see how they work (sorry mom and dad), and
          create new things. This passion for curiosity led me to the field of computer science. An immeasurable focus has
          allowed me to learn a lot in not a lot of time.
          <br><br>
          Recently I’ve been dabbling in web development. My grade 12 computer science teacher introduced me to Vue.js, a
          javascript framework, consequently most of my experience is with Vue.
          <br><br>
          Below you can see some of the projects I’ve worked on. If you have any questions, please feel free to reach out
          on my <a href="https://www.linkedin.com/in/arizkazani/" target="_blank">LinkedIn!</a>
        </p>
        <div id="about-me-pic" @mousemove="abtMPEffect" @mouseleave="abtMPREffect()"
          :style="{ 'transform': 'perspective(2000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)' }">
          <img src="../assets/Ariz.jpg" alt="">
        </div>
      </div>
    </div>
    <div id="work">
      <h1 id="work-title">Some Of My Projects</h1>
      <Projects></Projects>
    </div>
  </div>
</template>

<style scoped>
.test {
  background-color: pink;
  color: aquamarine;
}

#body-con {
  width: 100%;
  min-height: 90vh;
  /* background-color: aqua; */
}

.spacer1a {
  width: 100%;
  height: 50px;
  position: sticky;
  top: 0;
  background-color: rgb(5, 5, 5);
}

#body-con #landing-con-outer {
  height: 250vh;
}

#body-con #landing-con {
  /* background-color: rgba(0, 9, 9, 0.5); */
  top: 50px;
  aspect-ratio: 16 / 9;
  display: grid;
  justify-content: center;
  -webkit-justify-content: center;
  position: sticky;
}

#body-con #landing-con #img-con #earth-img {
  height: 100%;
  filter: brightness(70%);
  aspect-ratio: 16 / 9;
}


#body-con #landing-con #img-con {
  position: absolute;
  z-index: -1;
}

#body-con #landing-con #img-con #img-style-con {
  width: 100%;
  z-index: -1;
  overflow: hidden;
}


@media only screen and (orientation: landscape) {
  #body-con #landing-con {
    width: 100%;
  }

  #body-con #landing-con #img-con {
    width: 100%;
  }

  #body-con #landing-con #img-con #img-style-con {
    aspect-ratio: 16 / 9;
  }
}

@media only screen and (orientation: portrait) {
  #body-con #landing-con {
    height: 100vh;
    width: 100%;
  }

  #body-con #landing-con #img-con {
    height: 100vh;
    display: grid;
    -webkit-display: grid;
    justify-content: center;
    -webkit-justify-content: center;
  }

  #body-con #landing-con #img-con #img-style-con {
    width: 100%;
    overflow: hidden;
    -webkit-overflow: hidden;
    display: grid;
    -webkit-display: grid;
    justify-content: center;
    -webkit-justify-content: center;
  }

  #body-con #landing-con #img-con #img-style-con #earth-img {
    height: 100vh;
  }
}

.tLargeS {
  font-weight: 900;
  font-size: 55px;
  color: white;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #000fe6, 0 0 40px #000fe6, 0 0 50px #000fe6, 0 0 60px #000fe6, 0 0 70px #000fe6;
}

.tMedS {
  font-weight: 800;
  font-size: 45px;
  color: white;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #000fe6, 0 0 40px #000fe6, 0 0 50px #000fe6, 0 0 60px #000fe6, 0 0 70px #000fe6;
}

.tSmallS {
  font-weight: 700;
  font-size: 40px;
  color: white;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #000fe6, 0 0 40px #000fe6, 0 0 50px #000fe6, 0 0 60px #000fe6, 0 0 70px #000fe6;
}

.tDefaultS {
  font-weight: 600;
  font-size: 35px;
  color: white;
}

#body-con #landing-con #landingMCon {
  display: flex;
  margin: auto;
  height: 100px;
}



#body-con #landing-con #landingMCon #landing-message {
  margin: auto;
}

#body-con #landing-con #landingMCon #alt-landing-message {
  display: none;
}

@media only screen and (max-width: 500px) {
  #body-con #landing-con #landingMCon #landing-message {
    display: none;
  }

  #body-con #landing-con #landingMCon #alt-landing-message {
    display: revert;
    font-weight: 600;
    font-size: 7vmin;
    color: white;
  }
}


#body-con #about {
  padding: 20px 0 20px 0;
  min-height: 400px;
  display: grid;
}

#body-con #about #about-title {
  margin: 55px 0 55px 0;
  text-align: center;
  width: 100%;
  font-size: 80px;
  background: -webkit-linear-gradient(#000000, #000CB3);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#body-con #about #about-me-data {
  min-height: 400px;
  width: 80%;
  border-radius: 20px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 35vw;
  align-items: center;
}



.abt-me-trans {
  animation: abtMeTrans 1s;
  -webkit-animation: abtMeTrans 1s;
  box-shadow: 0px 0px 30px 4px #1F2366;
  opacity: 100%;
}

.abt-me-trans-b {
  opacity: 0%;
}

@keyframes abtMeTrans {
  0% {
    box-shadow: 0px 0px 0px 0px #1F2366;
    opacity: 0%;
  }

  20% {
    box-shadow: 0px 0px 0px 0px #1F2366;
    opacity: 100%;
  }

  50% {
    box-shadow: 0px 0px 50px 6px #1F2366;
  }

  60% {
    box-shadow: 0px 0px 30px 4px #1F2366;
  }

  70% {
    box-shadow: 0px 0px 20px 3px #1F2366;
  }

  80% {
    box-shadow: 0px 0px 30px 4px #1F2366;
  }

  90% {
    box-shadow: 0px 0px 40px 5px #1F2366;
  }

  100% {
    box-shadow: 0px 0px 30px 4px #1F2366;
  }
}

@-webkit-keyframes abtMeTrans {
  0% {
    box-shadow: 0px 0px 0px 0px #1F2366;
  }

  16.66% {
    box-shadow: 0px 0px 50px 6px #1F2366;
  }

  33.33% {
    box-shadow: 0px 0px 30px 4px #1F2366;
  }

  50% {
    box-shadow: 0px 0px 20px 3px #1F2366;
  }

  66.66% {
    box-shadow: 0px 0px 30px 4px #1F2366;
  }

  83.33% {
    box-shadow: 0px 0px 40px 5px #1F2366;
  }

  100% {
    box-shadow: 0px 0px 30px 4px #1F2366;
  }
}

#body-con #about #about-me-data #about-me-info {
  font-size: large;
  width: 80%;
  margin: 10%;
}

#body-con #about #about-me-data #about-me-pic {
  width: 80%;
  /* height: 400px; */
  aspect-ratio: 1 / 1;
  margin: 10%;
  border-radius: 20px;
  background-color: grey;
  overflow: hidden;
  justify-self: center;
  position: relative;
  box-shadow: 0px 0px 10px 1px #1F2366;

}

#body-con #about #about-me-data #about-me-pic:hover {
  box-shadow: 0px 0px 20px 2px #1F2366;
}

#body-con #about #about-me-data #about-me-pic img {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
}


@media only screen and (max-width: 1100px) {
  #body-con #about #about-me-data {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 400px;
  }

  #body-con #about #about-me-data #about-me-pic {
    grid-row: 2;
    margin: 0 0 10% 0;
    width: 400px;
  }
}

@media only screen and (max-width: 600px) {
  #body-con #about #about-me-data {
    grid-template-rows: 1fr 60vw;

  }

  #body-con #about #about-me-data #about-me-pic {
    width: 80%;
    height: 60vw;
  }
}

#body-con #work {
  min-height: 93vh;
}

#body-con #work #work-title {
  padding: 55px 0 55px 0;
  text-align: center;
  width: 100%;
  font-size: 80px;
  background: -webkit-linear-gradient(#4651EA, #1F2366, #000766);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media only screen and (max-width: 500px) {

  #body-con #work #work-title,
  #body-con #about #about-title {
    font-size: 16vw;
  }

}

@media (prefers-color-scheme: dark) {
  #body-con #about #about-me-data {
    color: white;
    background-color: rgba(255, 255, 255, 0.14);
  }

  #body-con #about #about-title {
    background: -webkit-linear-gradient(#20256B, #3740B8);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .abt-me-trans {
    box-shadow: 0px 0px 30px 4px #8F95EE;
  }

  @keyframes abtMeTrans {
    0% {
      box-shadow: 0px 0px 0px 0px #8F95EE;
      opacity: 0%;
    }

    20% {
      box-shadow: 0px 0px 0px 0px #8F95EE;
      opacity: 100%;
    }

    50% {
      box-shadow: 0px 0px 50px 6px #8F95EE;
    }

    60% {
      box-shadow: 0px 0px 30px 4px #8F95EE;
    }

    70% {
      box-shadow: 0px 0px 20px 3px #8F95EE;
    }

    80% {
      box-shadow: 0px 0px 30px 4px #8F95EE;
    }

    90% {
      box-shadow: 0px 0px 40px 5px #8F95EE;
    }

    100% {
      box-shadow: 0px 0px 30px 4px #8F95EE;
    }
  }

  @-webkit-keyframes abtMeTrans {
    0% {
      box-shadow: 0px 0px 0px 0px #8F95EE;
    }

    16.66% {
      box-shadow: 0px 0px 50px 6px #8F95EE;
    }

    33.33% {
      box-shadow: 0px 0px 30px 4px #8F95EE;
    }

    50% {
      box-shadow: 0px 0px 20px 3px #8F95EE;
    }

    66.66% {
      box-shadow: 0px 0px 30px 4px #8F95EE;
    }

    83.33% {
      box-shadow: 0px 0px 40px 5px #8F95EE;
    }

    100% {
      box-shadow: 0px 0px 30px 4px #8F95EE;
    }
  }

  #body-con #about #about-me-data #about-me-pic {
    box-shadow: 0px 0px 10px 1px #8F95EE;

  }

  #body-con #about #about-me-data #about-me-pic:hover {
    box-shadow: 0px 0px 20px 2px #8F95EE;
  }

  a {
    color: #4651EA;
  }

  #body-con #work #work-title {
    background: -webkit-linear-gradient(#8F95EE, #4651EA, #3740B8);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>