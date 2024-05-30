<script setup>
import { ref } from 'vue';
import theMovieIMG from '../assets/themovie.jpg';
import sortingAlgoIMG from '../assets/sortingalgo.jpg';
import timecopilotIMG from '../assets/time-copilot2.jpg';
import searchEngineIMG from '../assets/searchengine.jpg';
import Card from './Card.vue';


// Add projects here in the format below 
const projects = ref([
  {
    name: 'Time-CoPilot',
    link: 'https://time-copilot.com',
    photo: timecopilotIMG,
    description: `Time-CoPilot is a productivity app that will take your productivity to the next level. Uses AWS, React (with Next.js), Typescript, TailwindCSS and Shadcn. Time-CoPilot allows users to plan their day, and track their progress. Users can also create, notes, todo's and much much more!`,
    id: 'time-copilot',
  },
  {
    name: 'The Movie',
    link: 'https://the-movie-arizkazani.firebaseapp.com/',
    photo: theMovieIMG,
    description: 'The Movie is a portfolio project I created. It requires users to get authenticated, then  gives access to "purchase" the movies they like. Users can search for movies, or can look at movies that are currently trending. By clicking on the movie posters, users are presented with information about the movie, such as rating and release date.',
    id: 'the-movie',
  },
  {
    name: 'Search Engine',
    link: 'https://github.com/Ariz-Kazani/Spider-Search-Engine',
    photo: searchEngineIMG,
    description: 'This project implements a web crawler and search engine in Java(and in Python without a GUI).The crawler starts from a seed URL, collects data from web pages, and stores it for search and ranking.The search engine processes user queries, delivering relevant results using PageRank algorithms.',
    id: 'search-engine',
  },
  {
    name: 'Algorithm Visualizer',
    link: 'https://github.com/Ariz-Kazani/python-sorting-algorithm-visualizer',
    photo: sortingAlgoIMG,
    description: 'I created a sorting algorithm visualizer in python for people who are just starting to learn how to code, and don\'t quite understand how they work. Visualise algorithms like merge-sort, quick-sort and even bogo-sort. Find the source code on my GitHub!',
    id: 'algorithm-visualizer',
  },
  {
    name: 'Coming Soon',
    link: null,
    photo: 'https://t4.ftcdn.net/jpg/05/79/68/85/240_F_579688567_hmuT3hnFxTeDBXsyUUsmvB6Kvt0UF8Bd.webp',
    description: 'Coming Soon, stay tuned ;)',
    id: 'coming-soon',
  }
])


</script>

<template>
  <div class="project-con">
    <template v-for="(site, index) in projects">
      <Card :name="site.name" :description="site.description" :link="site.link" :photo="site.photo" :id="site.id"
        :index="index" />
    </template>
  </div>
</template>


<style scoped>
.project-con {
  /* Adjust the number of projects  1 more after this*/
  /*adjust         !                !     */
  min-height: calc(5*300px + 30px + 5*40vh);
}

@media only screen and (max-width: 420px) {
  .project-con {
    /* Adjust the number of projects */
    /*adjust         !                !     */
    min-height: calc(5*430px + 30px + 5*40vh);
  }
}
</style>