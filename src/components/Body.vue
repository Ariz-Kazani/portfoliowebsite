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
  landingOpacity.value = Math.min(100, 100 - window.scrollY / window.innerHeight * 50);
});

onMounted(() => {
  const abtMeData = document.querySelector("#about");
  landingInitialAnimation();

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.target.id == 'about') {
        showAMe.value = entry.isIntersecting;
      }
    });
  };

  const observerEnter = new IntersectionObserver(observerCallback, {
    root: null,
    threshold: 0,
    rootMargin: "-50% 0px -50% 0px",
  });

  const observerExit = new IntersectionObserver(observerCallback, {
    root: null,
    threshold: 0,
    rootMargin: "15% 0px 15% 0px",
  });

  observerEnter.observe(abtMeData);
  observerExit.observe(abtMeData);
});

function landingMEffect(id) {
  oMessageStext.value = [];
  oMessageMtext.value = [];
  oMessageLtext.value = null;

  if (id !== -1) {
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
  await new Promise(resolve => setTimeout(resolve, 350));
  let i = 0;
  const interval = setInterval(() => {
    landingMEffect(-1);
    if (i < openingMessageData.value.length) {
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

        <div id="about-me-data">
          Hi, I'm Ariz Kazani, a dedicated Full Stack Developer studying Computer Science at Carleton University. I have
          hands-on experience building scalable web applications, currently working at ReInvestWealth on their
          AI-powered accounting platform. My technical toolkit includes Vue.js, React, NestJS, and AWS, and I enjoy
          tackling complex problems and learning new technologies.

          At ReInvestWealth, I've contributed to developing features across the stack, from designing robust backend
          APIs to creating intuitive user interfaces. One of my proudest achievements was leading the implementation of
          a real-time collaboration feature, which allowed multiple users to work together seamlessly on financial
          documents. This experience taught me a lot about teamwork, system architecture, and delivering value in a
          fast-paced startup environment.

          Beyond my professional work, I've built several personal projects, including a productivity app with Next.js
          and AWS, a dynamic movie streaming website using Vue.js and Firebase, and even a custom search engine in Java.
          These projects have helped me strengthen my problem-solving skills and deepen my passion for software
          development.

          Outside of coding, I love exploring new tech trends, experimenting with programming languages, and sharing
          knowledge with fellow developers. I'm always eager to connect with others in the tech community, so feel free
          to reach out on
          LinkedInF
          to chat or collaborate!
        </div>

        <!-- <div id="about-me-data" :class="{ 'abt-me-trans': showAMe, 'abt-me-trans-b': !showAMe }">
          <p id="about-me-info">
            Hi, I'm Ariz Kazani, a passionate Full Stack Developer currently honing my skills at Carleton University,
            where I'm pursuing a Bachelor of Science in Computer Science, and a Minor in Statistics and a Minor in
            Economics. At ReInvestWealth, I'm working as a Full-Stack Developer on their AI-powered accounting platform
            for small business owners. I'm building features across the stack using React, NestJS, and even dabbling in
            AI/ML. Since I'm one of the first engineers outside the founding team, I've had a lot of freedom to take
            ownership and help shape parts of the product. It's been a great way to learn more about fintech,
            automation, and what it's like working in a fast-moving startup.
            <br />
            <br />
            One of my proudest achievements at ReInvestWealth was spearheading the development of our real-time
            collaboration feature. I led the design and implementation, enabling multiple users to work together
            seamlessly on financial documents and reports. This involved architecting a robust backend with NestJS and
            integrating real-time updates on the frontend with React, ensuring data consistency and a smooth user
            experience. The feature has significantly improved team productivity for our users and was a key milestone
            for the product.
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

            Feel free to get in touch on my
            <a @click="logEvent(an, 'Clicked A Social Link', { linkName: 'LinkedIn' });"
              href="https://www.linkedin.com/in/arizkazani/" target="_blank">LinkedIn</a>, if you'd like to work with
            me,
            or just want to have a chat!
          </p>
        </div> -->
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
  color: var(--secondary-variant);
  text-decoration: none;
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
  height: 400vh;
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
  color: var(--on-surface-dark-mode);
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
    display: block;
    font-weight: 600;
    color: white;
    font-size: 7vmin;
    text-shadow: 0px 1px 4px black;
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
  position: absolute;
  min-height: 400px;
  width: 40%;
  border-radius: 32px;
  padding: 24px;
  /* margin: auto; */
  right: 10%;
  left: auto;
  display: flex;
  align-items: center;
  color: var(--on-surface);
  background-color: --foreground-4;
  box-shadow: var(--shadow-lg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

#body-con #about #about-me-data:hover {
  background-color: var(--foreground-5);
  box-shadow: var(--shadow-xl);
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