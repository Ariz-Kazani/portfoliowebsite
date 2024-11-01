<script setup>
import { ref, onMounted } from 'vue'
import Projects from './Projects.vue';
import Work from './Work.vue';

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
      <h1 id="about-title">About Me</h1>
      <div id="about-test">
        <div id="about-test-two">
          <span>C          </span>
          <span>Java       </span>
          <span>Python     </span>
          <span>R          </span>
          <span>JavaScript </span>
          <span>TypeScript </span>
          <span>PHP        </span>
          <span>HTML5      </span>
          <span>CSS3       </span>
          <span>SASS       </span>
          <span>TailwindCSS</span>
          <span>Next.js    </span>
          <span>Vue.js     </span>
          <span>React.js   </span>
          <span>Laravel    </span>
          <span>Node.js    </span>
          <span>Deno.js    </span>
          <span>AWS        </span>
          <span>DynamoDB   </span>
          <span>Firebase   </span>
          <span>Firestore  </span>
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
      <h1 id="work-title">My Work Experience</h1>
      <Work />
    </div>
    <div id="projects">
      <h1 id="projects-title">Some Of My Projects</h1>
      <Projects />
    </div>
  </div>
</template>

<style scoped>
#about-test {
  display: flex;
  padding: 32px;
  justify-content: center;
  align-items: center;
  gap: 32px;
}

#about-test-two {
  width: 100%;
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
  text-shadow: 0 0 10px var(--primary-dark-mode), 0 0 20px var(--primary-dark-mode), 0 0 30px #1F2366, 0 0 40px #1F2366, 0 0 50px #1F2366, 0 0 60px #1F2366, 0 0 70px #1F2366;
}

.tMedS {
  font-weight: 800;
  font-size: 56px;
  text-shadow: 0 0 10px var(--primary-dark-mode), 0 0 20px var(--primary-dark-mode), 0 0 30px #1F2366, 0 0 40px #1F2366, 0 0 50px #1F2366, 0 0 60px #1F2366, 0 0 70px #1F2366;
}

.tSmallS {
  font-weight: 700;
  font-size: 52px;
  text-shadow: 0 0 10px var(--primary-dark-mode), 0 0 20px var(--primary-dark-mode), 0 0 30px #1F2366, 0 0 40px #1F2366, 0 0 50px #1F2366, 0 0 60px #1F2366, 0 0 70px #1F2366;
}

.tDefaultS {
  font-weight: 600;
  font-size: 48px;
  text-shadow: 0px 1px 4px black;
}

#body-con #landing-con #landingMCon {
  display: flex;
  margin: auto;
  height: 100px;
}



#body-con #landing-con #landingMCon #landing-message {
  margin: auto;
  color: white;

  /* TODO: update the color here */
  /* -webkit-text-stroke: 0.01px rgb(116, 116, 150); */
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
  min-height: 120vh;
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
  width: 90%;
  border-radius: 32px;
  padding: 24px;
  margin: auto;
  display: grid;
  align-items: center;
}

.abt-me-trans {
  animation: abtMeTrans 1s;
  -webkit-animation: abtMeTrans 1s;
  box-shadow: 0px 0px 30px 4px #1F2366;
  opacity: 100%;
}

.abt-me-trans-b {
  animation: abtMeTransB 1s;
  -webkit-animation: abtMeTransB 1s;
  box-shadow: 0px 0px 30px 4px #1F2366;
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
  margin-top: 50vh;
  min-height: calc(100vh - 100px);
  display: flex;
}

#body-con #work #work-title {
  padding: 0px 0px 0px 55px;
  text-align: center;
  height: calc(100vh - 50px);
  font-size: 3vh;
  background: -webkit-linear-gradient(#000766, #000CB3);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  writing-mode: vertical-lr;
  text-orientation: upright;
  position: sticky;
  top: 55px;
}

#body-con #projects {
  margin-top: 50vh;
  min-height: 93vh;
}

#body-con #projects #projects-title {
  padding: 55px 0 55px 0;
  text-align: center;
  width: 100%;
  font-size: 80px;
  background: -webkit-linear-gradient(var(--primary-dark-mode), #1F2366, #000766);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media only screen and (max-width: 500px) {

  #body-con #projects #projects-title,
  #body-con #about #about-title {
    font-size: 16vw;
  }

  #body-con #work #work-title {
    padding: 0px 0px 0px 20px;
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

  .tLargeS {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #000fe6, 0 0 40px #000fe6, 0 0 50px #000fe6, 0 0 60px #000fe6, 0 0 70px #000fe6;
  }

  .tMedS {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #000fe6, 0 0 40px #000fe6, 0 0 50px #000fe6, 0 0 60px #000fe6, 0 0 70px #000fe6;
  }

  .tSmallS {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #000fe6, 0 0 40px #000fe6, 0 0 50px #000fe6, 0 0 60px #000fe6, 0 0 70px #000fe6;
  }

  .abt-me-trans {
    box-shadow: 0px 0px 30px 4px #8F95EE;
  }

  .abt-me-trans-b {
    box-shadow: 0px 0px 30px 4px #8F95EE;
  }

  #body-con #about #about-me-data #about-me-pic {
    box-shadow: 0px 0px 10px 1px #8F95EE;

  }

  #body-con #about #about-me-data #about-me-pic:hover {
    box-shadow: 0px 0px 20px 2px #8F95EE;
  }

  a {
    color: var(--primary-dark-mode);
  }

  #body-con #projects #projects-title {
    background: -webkit-linear-gradient(#8F95EE, var(--primary-dark-mode), #3740B8);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  #body-con #work #work-title {
    background: -webkit-linear-gradient(#8F95EE, var(--primary-dark-mode), #3740B8);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>style