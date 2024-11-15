<script setup>
import { ref } from 'vue';
import theMovieIMG from '../assets/themovie.jpg';
import sortingAlgoIMG from '../assets/sortingalgo.jpg';
import timecopilotIMG from '../assets/time-copilot3.jpg';
import searchEngineIMG from '../assets/searchengine.jpg';
import stocksIMG from '../assets/stocks.jpg';
import Card from './Card.vue';

 
// Add projects here in the format below 
const projects = ref([
  {
    name: 'Time-CoPilot',
    hostingLink: 'https://time-copilot.com',
    codeLink: null,
    technologies: ["nextjs", "reactjs", "typescript", "tailwindcss", "aws", "git"],
    photo: timecopilotIMG,
    description: `Time-CoPilot is a productivity app that will take your productivity to the next level. Uses AWS, React (with Next.js), Typescript, TailwindCSS and Shadcn. Time-CoPilot allows users to plan their day, and track their progress. Users can also create, notes, todo's and much much more!`,
    id: 'time-copilot',
  },
  {
    name: 'Mobile Game',
    hostingLink: null,
    codeLink: null,
    technologies: ["unity", "csharp"],
    photo: 'https://media.sketchfab.com/models/2afd04b26ca64c6b8392f75e217ffdb9/thumbnails/b8b7fd406e624b27bcf5d22af1857ac0/6fc6917029464e18aef80d4f82f479a4.jpeg',
    description: `A game for iOS and android I'm currently working on. The game is a 2D indi game, with a unique art style. The game is built using Unity, and C#. The game is currently in development, stay tuned for more updates!`,
    id: 'coming-soon',
  },
  {
    name: 'The Movie',
    hostingLink: 'https://the-movie-arizkazani.firebaseapp.com/',
    codeLink: 'https://github.com/Ariz-Kazani/THE-MOVIE-PUBLIC',
    technologies: ["nuxtjs", "vuejs", "html", "css", "javascript", "firebase", "git"],
    photo: theMovieIMG,
    description: `Disclaimer: The Movie 2.0 is currently being built, stay tuned ;). Feel free to visit the current version of The Movie. The Movie is a web app that allows users to search for movies, and view their details. The Movie uses the TMDb API, Vue.js, Firebase.`,
    id: 'the-movie',
  },
  {
    name: 'Search Engine',
    hostingLink: null,
    codeLink: 'https://github.com/Ariz-Kazani/Spider-Search-Engine',
    technologies: ["java", "python", "git"],
    photo: searchEngineIMG,
    description: 'This project implements a spider and search engine in Java (and one in Python without a GUI).The crawler collects data from web pages, and stores it for search and ranking.The search engine processes user queries, delivering relevant results using PageRank algorithms.',
    id: 'search-engine',
  },
  {
    name: 'Algorithms',
    hostingLink: null,
    codeLink: 'https://github.com/Ariz-Kazani/python-sorting-algorithm-visualizer',
    technologies: ["python", "git"],
    photo: sortingAlgoIMG,
    description: 'I created a sorting algorithm visualizer in python for people who are just starting to learn how to code, and don\'t quite understand how they work. Visualise algorithms like merge-sort, quick-sort and even bogo-sort. Find the source code on my GitHub!',
    id: 'algorithm-visualizer',
  },
  {
    name: 'Coming Soon',
    hostingLink: null,
    codeLink: null,
    technologies: ["cpp"],
    photo: stocksIMG,
    description: 'This one is a secret 🤫. Coming Soon, stay tuned ;)',
    id: 'coming-soon',
  }
])

const size = ref(projects.value.length);

</script>

<template>
  <div class="project-con">
    <template v-for="(site, index) in projects">
      <Card :name="site.name" :description="site.description" :hostingLink="site.hostingLink" :codeLink="site.codeLink" :technologies="site.technologies"
        :photo="site.photo" :id="site.id" :index="index" />
    </template>
  </div>
</template>


<style scoped>
.project-con {
  /* Adjust the number of projects  1 more after this*/
  /*adjust         !                !     */
  min-height: calc(6*300px + 30px + 6*40vh);
  padding: 32px 0;
}

@media only screen and (max-width: 420px) {
  .project-con {
    /* Adjust the number of projects */
    /*adjust         !                !     */
    min-height: calc(6*430px + 30px + 6*40vh);
  }
}
</style>