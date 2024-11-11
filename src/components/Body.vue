<script setup>
import { ref, onMounted } from 'vue'
import Projects from './Projects.vue';
import Work from './Work.vue';
import TechAnimation from './TechAnimation.vue';

// analytics stuff
import { analytics } from '../firebase';
import { getAnalytics, logEvent } from "firebase/analytics";

let an = null;

if (import.meta.env.VITE_MODE == 'prod') {
  an = getAnalytics();
}

// landing page hover effect 
const openingMessage = ref('');
const openingMessageData = ref('PushingTheLimitsOfCode! ');
const oMessageStext = ref([]);
const oMessageLtext = ref(null);
const oMessageMtext = ref([]);
const showAMe = ref(false);
const opiningAnimationFinish = ref(false);

// landing page opacity
const landingOpacity = ref(100);


window.addEventListener("scroll", () => {
  landingOpacity.value = Math.min(100, 100 - window.scrollY / window.innerHeight * 25);
});

onMounted(() => {
  const abtMeData = document.querySelector("#about");
  landingInitialAnimation();

  const optionsEnter = {
    root: null,
    threshold: 0,
    rootMargin: "-50% 0px -50% 0px",
  };

  const optionsExit = {
    root: null,
    threshold: 0,
    rootMargin: "15% 0px 15% 0px",
  }

  const observerEnter = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.target.id == 'about') {
        showAMe.value = true;
      }
    })
  }, optionsEnter);

  const observerExit = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting && entry.target.id == 'about') {
        showAMe.value = false;
      }
    })
  }, optionsExit);

  observerEnter.observe(abtMeData);
  observerExit.observe(abtMeData);
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

async function landingInitialAnimation() {
  openingMessage.value = openingMessageData.value;
  await new Promise(resolve => setTimeout(resolve, 350))
  let i = 0;
  let interval = setInterval(() => {
    // openingMessage.value += openingMessageData.value[i];
    landingMEffect(-1);
    if (i < openingMessageData.value.length - 1) {
      landingMEffect(i);
      i++;
    } else {
      opiningAnimationFinish.value = true;
      clearInterval(interval);
    }
  }, 60);
}


</script>

<template>
  <div id="body-con">
    <div id="landing-con-outer">
      <div class="spacer1a" :style="{ 'opacity': landingOpacity + '%' }"></div>
      <div id="landing-con" :style="{ 'opacity': landingOpacity + '%' }">
        <div id="img-con">
          <div id="img-style-con">
            <img src="../assets/earth.jpg" alt="" id="earth-img">
          </div>
        </div>
        <div id="landingMCon">
          <span v-for="(char, index) in openingMessage" id="landing-message"
            :class="{ 'tLargeS': oMessageLtext == index, 'tMedS': oMessageMtext.includes(index), 'tSmallS': oMessageStext.includes(index), 'tDefaultS': !oMessageMtext.includes(index) && oMessageLtext != index && !oMessageStext.includes(index) }"
            @mouseover="opiningAnimationFinish ? landingMEffect(index) : null"
            @mouseleave="opiningAnimationFinish ? landingMEffect(-1) : null" :key="index">
            {{ char }} </span>
          <h2 id="alt-landing-message"> {{ openingMessage }}</h2>
        </div>
      </div>
    </div>
    <div id="about">
      <h1 id="title">About</h1>
      <div id="about-test">
        <div id="about-test-two">
          <TechAnimation />
        </div>
        <div id="about-me-data" :class="{ 'abt-me-trans': showAMe, 'abt-me-trans-b': !showAMe }">
          <p id="about-me-info">
            Hi, I'm Ariz Kazani, a passionate Full Stack Developer currently honing my skills at Carleton University,
            where I'm pursuing a Bachelor of Science in Computer Science, and a Minor in Statistics and a Minor in
            Economics. Last summer (summer 2024), I interned as a Software Developer at ConfiDense Analytics, where I
            was responsible for developing and maintaining the company's web application, and implementing new features
            using Vue.js and Laravel. I really enjoyed leading development on the company's new feature, which allowed
            dental offices to analyze what their competitors were up to. I'm currently working as a Teaching Assistant
            for
            the introduction to Systems Programming course (COMP 2401), where I help students learn the ins and outs of
            the C programming language.
            <br />
            <br />
            In addition to my work experiences, I've worked on several projects that highlight my technical versatility.
            I've created a productivity app with Next.js and AWS, a dynamic movie streaming website using Vue.js and
            Firebase, and even developed a search engine with Java. These projects have not only improved my technical
            skills but also fueled my passion.
            <br />
            <br />
            I love tackling challenging problems and continuously learning new technologies. My technical arsenal
            includes
            a variety of languages like C++, Java, and PHP, and frameworks such as Next.js, Vue.js, and Laravel. When
            I'm
            not coding, you can find me exploring the latest in tech, experimenting with new programming languages, or
            sharing my knowledge with fellow developers.
            <br />
            <br />
            <!-- When I'm not exploring tech, I love getting a pump at the gym, playing squash, or going for hanging with the
          boys. Recently I've 
          <br />
          <br /> -->
            Feel free to get in touch on my
            <a @click="logEvent(an, 'Clicked A Social Link', { linkName: 'LinkedIn' });"
              href="https://www.linkedin.com/in/arizkazani/" target="_blank">LinkedIn</a>, if you'd like to work with
            me,
            or just want to have a chat!
            <!-- ! Have to remove this trolling 🤣🤣🤣🤣
          If you want to learn more about my experiences, here is my
           <a @click="logEvent(an, 'Clicked A Social Link', { linkName: 'resume' });"
            href="https://drive.google.com/file/d/1W0A2GtongtZBmP2k6pdfskR4ntfJXGWu/view" target="_blank">resume</a>. -->
          </p>
        </div>
      </div>
    </div>
    <div id="work">
      <h1 id="title">Career</h1>
      <Work />
    </div>
    <div id="projects">
      <h1 id="title">Projects</h1>
      <Projects />
    </div>
  </div>
</template>

<style scoped>
a {
  color: var(--primary);
}

#about-test {
  display: flex;
  padding: 32px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  overflow: hidden;
}

#about-test-two {
  width: 100%;
  overflow: hidden;
}

@media screen and (max-width: 800px) {
  #about-test-two {
    display: none;
  }
}

#body-con {
  width: 100%;
  min-height: 90vh;
}

.spacer1a {
  width: 100%;
  height: 50px;
  position: sticky;
  top: 0;
  /**
  * ! This is the only color that can/is not a variable
  */
  background-color: rgb(5, 5, 5);
}

#body-con #landing-con-outer {
  height: 600vh;
}

#body-con #landing-con {
  top: 50px;
  aspect-ratio: 16 / 9;
  display: grid;
  justify-content: center;
  -webkit-justify-content: center;
  position: sticky;
  transition: 0.25s ease;
}

#body-con #landing-con #img-con #earth-img {
  height: 100%;
  filter: brightness(65%);
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


@media only screen and (min-aspect-ratio: 29/18) {
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

@media only screen and (max-aspect-ratio: 29/18) {
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
  font-size: 60px;
  text-shadow: 0 0 10px var(--primary-dark-mode), 0 2px 20px var(--primary-dark-mode);
}

.tMedS {
  font-weight: 800;
  font-size: 56px;
  text-shadow: 0 0 10px var(--primary-dark-mode), 0 1px 20px var(--primary-dark-mode);
}

.tSmallS {
  font-weight: 700;
  font-size: 52px;
  text-shadow: 0 0 10px var(--primary-dark-mode), 0 0 20px var(--primary-dark-mode);
}

.tDefaultS {
  font-weight: 600;
  font-size: 48px;
  text-shadow: 0px 2px 4px black;
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
  text-shadow: 0px 1px 4px black;
}

@media only screen and (max-width: 650px) {
  #body-con #landing-con #landingMCon #landing-message {
    display: none;
  }

  #body-con #landing-con #landingMCon #alt-landing-message {
    display: revert;
    font-weight: 600;
    font-size: 7vmin;
  }
}


#body-con #about {
  padding: 20px 0 20px 0;
  min-height: 120vh;
  display: grid;
}

#title {
  text-align: center;
  width: 100%;
  font-size: 80px;
  color: var(--primary);
  font-weight: 600;
}

#body-con #about #about-me-data {
  min-height: 400px;
  width: 90%;
  border-radius: 32px;
  padding: 24px;
  margin: auto;
  display: grid;
  align-items: center;
  color: var(--on-surface);
  background-color: var(--foreground-2);
  box-shadow: 0px 0px 4px 1px var(--surface);
}

#body-con #about #about-me-data:hover {
  background-color: var(--foreground-3);
  box-shadow: 0px 0px 8px 2px var(--surface);
}

.abt-me-trans {
  animation: abtMeTrans 1s;
  -webkit-animation: abtMeTrans 1s;
  opacity: 100%;
}

.abt-me-trans-b {
  animation: abtMeTransB 1s;
  -webkit-animation: abtMeTransB 1s;
  opacity: 0%;
}

@keyframes abtMeTrans {
  0% {
    opacity: 0;
    transform: scale(.3);
  }

  50% {
    opacity: 1;
    transform: scale(1.05);
  }

  70% {
    transform: scale(.9);
  }

  100% {
    transform: scale(1);
  }
}

@-webkit-keyframes abtMeTrans {
  0% {
    opacity: 0;
    transform: scale(.3);
  }

  50% {
    opacity: 1;
    transform: scale(1.05);
  }

  70% {
    transform: scale(.9);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes abtMeTransB {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(.9);
  }

  70% {
    opacity: 1;
    transform: scale(1.05);
  }

  100% {
    opacity: 0;
    transform: scale(.3);
  }

}

@-webkit-keyframes abtMeTransB {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(.9);
  }

  70% {
    opacity: 1;
    transform: scale(1.05);
  }

  100% {
    opacity: 0;
    transform: scale(.3);
  }
}

#body-con #about #about-me-data #about-me-info {
  font-size: large;
}

#body-con #work {
  margin-top: 40vh;
  min-height: calc(100vh - 100px);
}

#body-con #projects {
  margin-top: 40vh;
  min-height: 93vh;
}

@media only screen and (max-width: 500px) {

  #title {
    font-size: 16vw;
  }
}
</style>style