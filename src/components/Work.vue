<script setup>
import { onMounted, ref } from 'vue';

const work = ref([
  {
    company: 'ConfiDens Analytics',
    position: 'Full Stack Developer',
    type: 'Intern',
    date: 'May 2024 - August 2024',
    description: `In the summer of 2024 I interned at ConfiDens Analytics as a Software Developer, 
    I've had the opportunity to work on diverse and impactful projects that have significantly enhanced my 
    technical skills and practical knowledge. One of my primary responsibilities has been improving various UI elements, 
    which has involved refining the user interface to ensure a seamless and intuitive user experience. 
    This has required a keen eye for design and a strong understanding of front-end technologies such as SASS, and Vue.js. 
    Additionally, I lead research and development of the competitor analysis feature, which has 
    entailed both back-end and front-end development.`,
    id: 'confidens',
    isShown: false,
  },
  {
    company: 'Carleton University',
    position: 'Teaching Assistant',
    type: 'Contract - Part Time',
    date: 'September 2024 - Present',
    description: `I am currently working as a Teaching Assistant at Carleton University for COMP 2401 - Introduction to Systems Programming, 
    where I am responsible for helping students learn the ins and outs of of the C programming language. This is done through weekly labs and office hours, 
    where I help students with their assignments, and provide guidance on how to approach and solve problems.`,
    id: 'carleton-university',
    isShown: false,
  },
])


const optionsEnter = {
  root: null,
  threshold: 0,
  rootMargin: "0% 0px -40% 0px",
};

onMounted(() => {
  for (let i = 0; i < work.value.length; i++) {
    const item = document.getElementById(work.value[i].id);
    if (item) {
      const observerEnter = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target.id == work.value[i].id) {
            work.value[i].isShown = true;
            observer.unobserve(entry.target);
          }
        });
      }, optionsEnter);
      observerEnter.observe(item);
    }
  }

  window.addEventListener('scroll', function () {
    let parallaxSection = document.querySelector('.work-con');
    let sectionTop = parallaxSection.offsetTop;

    let scrollPosition = window.scrollY;
    if (scrollPosition > sectionTop) {
      let relativeScrollPosition = scrollPosition - sectionTop;
      let content = [];
      for (let item of work.value) {
        content.push(document.querySelector(`#${item.id}`));
      }
      for (let item of content) {
        item.style.transform = 'translateY(' + relativeScrollPosition * 0.6 + 'px)';
      }
    }
  });
});

</script>

<template>
  <div id="work-con" class="work-con">
    <template v-for="(position, index) in work" :key="position.id">
      <div id="spacer">
      </div>
      <div :id="position.id" :class="position.id">
        <div id="work-item" :class="{ 'abt-me-trans': position.isShown, 'abt-me-trans-b': !position.isShown }">
          <h1 id="work-item-comp">{{ position.company }}</h1>
          <h2 id="work-item-pos">{{ position.position }}</h2>
          <h4 id="work-item-aux-info">{{ position.type }} &#x2022; {{ position.date }}</h4>
          <p>{{ position.description }}</p>
        </div>
      </div>
    </template>
    <div id="spacer"></div>
  </div>
</template>

<style scoped>
#work-con {
  min-height: 830vh;
  width: 100%;
  overflow: hidden;
  /* background-color: aqua; */
}

#work-con #spacer {
  height: 95vh;
}

#work-con #work-item {
  margin: 0 auto;
  max-width: 90%;
  padding: 24px;
  border-radius: 32px;
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
  from {
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }

  60% {
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    transform: skewX(-5deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

@-webkit-keyframes abtMeTrans {
  from {
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }

  60% {
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    transform: skewX(-5deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

@media (prefers-color-scheme: dark) {
  #work-con #work-item {
    background-color: var(--dark-mode-foreground);
    box-shadow: 0px 0px 20px 4px #8F95EE;
  }

  #work-con #work-item #work-item-comp {
    color: var(--primary-dark-mode);
  }

  #work-con #work-item #work-item-pos {
    color: #515bdb;
  }

  #work-con #work-item #work-item-aux-info {
    color: #656de0;
  }
}
</style>