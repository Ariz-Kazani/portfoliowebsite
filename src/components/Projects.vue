<script setup>
import { ref } from 'vue';
import theMovieIMG from '../assets/themovie.png';
import sortingAlgoIMG from '../assets/sortingalgo.png';


const projects = ref({
  TheMovie: {
    name: 'The Movie',
    link: 'https://the-movie-arizkazani.web.app/',
    photo: theMovieIMG,
    description: 'The Movie is a portfolio project I created. It requires users to get authenticated, then  gives access to "purchase" the movies they like. Users can search for movies, or can look at movies that are currently trending. By clicking on the movie posters, users are presented with information about the movie, such as rating and release date.',
    id: 'the-movie',
    index: 0,
  },

  SortingAlgoVisualizer: {
    name: 'Algorithm Visualizer',
    link: 'https://github.com/Ariz-Kazani/python-sorting-algorithm-visualizer',
    photo: sortingAlgoIMG,
    description: 'I created a sorting algorithm visualizer in python for people who are just starting to learn how to code, and don\'t quite understand how they work. Visualise algorithms like merge-sort, quick-sort and even bogo-sort. Find the source code on my GitHub!',
    id: 'algorithm-visualizer',
    index: 1,
  },

  JavaSearchEngin: {
    name: 'Search Engine',
    link: 'https://github.com/Ariz-Kazani',
    photo: null,
    description: 'A java search engine & web crawler. Coming soon!',
    id: 'algorithm-visualizer',
    index: 2,
  },

  ComingSoon: {
    name: 'Coming Soon',
    link: null,
    photo: null,
    description: 'Coming Soon',
    id: 'coming-soon',
    index: 3,
  }

})


</script>

<template>
  <div class="project-con">
    <div id="projects" v-for="site of projects" :class="site.id" :href="site.link" :style="{'top': 100+site.index*10+'px'}" >
      <a :href="site.link" target=”_blank”>
        <h1 id="title-con">{{ site.name }}</h1>
      </a>
      <p id="description"> {{ site.description }}</p>
      <img id="project-img" :src="site.photo" alt="Coming Soon">
    </div>
  </div>
</template>


<style scoped>
.project-con {
  min-height: calc(4*300px + 30px + 4*40vh);
}

#projects {
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
  /* top: 100px; */
  overflow: hidden;
}

/* #projects:hover {
  transform: scale(1.01);
  box-shadow: 0px 0px 30px 6px #1F2366;
} */

#projects #project-img {
  height: 100%;
  width: 420px;
  grid-column: 1;
  grid-row: 1 / span 2;
  border-radius: 5px;
}

#projects #description {
  grid-row: 2;
  grid-column: 2;
}

#projects a {
  grid-row: 1;
  grid-column: 2;
  color: #000766;
  text-decoration: none;
}


@media only screen and (max-width: 890px) {
  #projects {
    grid-template-columns: 338px 1fr;
  }

  #projects #project-img {
    grid-row: 2;
    width: 331px;
  }

  #projects #description {
    grid-row: 1 / span 2;
  }

  #projects a {
    grid-column: 1;
  }
}

@media only screen and (max-width: 720px) {

  #projects {
    grid-template-columns: 89px 1fr;
  }

  #projects #project-img {
    grid-row: 1;
    width: 82px;
  }

  #projects a {
    grid-column: 2;
    font-size: 2.8vw;
  }

  #projects #description {
    grid-row: 2;
    grid-column: 1 / span 2;
  }
}

@media only screen and (max-width: 420px) {
  .project-con {
    min-height: calc(4*430px + 30px + 4*40vh);
  }

  #projects {
    height: 430px;
  }

  #projects a {
    font-size: 2.5vw;
  }
}

@media (prefers-color-scheme: dark) {
  #projects {
    background-color: rgb(52, 52, 52);
    box-shadow: 0px 0px 20px 4px #8F95EE;
  }

  #projects:hover {
    box-shadow: 0px 0px 30px 6px #8F95EE;
  }

  #projects a {
    color: #4651EA;
  }
}
</style>