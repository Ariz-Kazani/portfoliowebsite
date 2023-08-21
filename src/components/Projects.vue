<script setup>
import { ref } from 'vue';
import theMovieIMG from '../assets/themovie.png'

const projects = ref({
  TheMovie: {
    name: 'The Movie',
    link: 'https://the-movie-arizkazani.web.app/',
    photo: theMovieIMG,
    description: 'The Movie is a portfolio project I created. It requires users to get authenticated, then  gives access to "purchase" the movies they like. Users can search for movies, or can look at movies that are currently trending. By clicking on the movie posters, users are presented with information about the movie, such as rating and release date.',
    id: 'the-movie',
  },

  ComingSoon: {
    name: 'Coming Soon',
    link: null,
    photo: null,
    description: 'Coming Soon',
    id: 'coming-soon',
  }

})


</script>

<template>
  <div id="projects" v-for="site of projects" :class="site.id" :href="site.link" target=”_blank”>
    <a :href="site.link" target=”_blank”>
      <h1 id="title-con">{{ site.name }}</h1>
    </a>
    <p id="description"> {{ site.description }}</p>
    <img id="project-img" :src="site.photo" alt="">
  </div>
</template>


<style scoped>
#projects {
  margin: 0px 5% 50px 5%;
  height: 300px;
  padding: 30px;
  display: grid;
  grid-template-columns: 427px 1fr;
  grid-template-rows: 50px 190px;
  border-radius: 30px;
  box-shadow: 0px 0px 20px 4px #1F2366;
}

#projects:hover {
  transform: scale(1.01);
  box-shadow: 0px 0px 30px 6px #1F2366;
}

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

/* .the-movie {
  position: sticky;
  top: 80px
}

.coming-soon {
  position: sticky;
  top: 100px;
} */

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

@media only screen and (max-width: 720px){
  
  #projects {
    grid-template-columns: 89px 1fr;
  }

  #projects #project-img {
    grid-row: 1;
    width: 82px;
  }

  #projects a {
    grid-column: 2;
  }

  #projects #description {
    grid-row: 2;
    grid-column: 1 / span 2;
  }
} 

@media only screen and (max-width: 420px) {
  #projects {
    height: 430px;
  }
  #projects a {
    font-size: 3vw;
  }
}

</style>