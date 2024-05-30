<script setup>


</script>

<template>
  <div id="header-con">
    <a href="/" id="home-but">
      <h2 id="home-but-l">Ariz Kazani</h2>
      <h2 id="home-but-s">AK</h2>
    </a>
    <a href="#about" class="but" id="about-but">
      <p>About</p>
    </a>
    <a href="#work" class="but" id="work-but">
      <p>Work</p>
    </a>
    <a href="#projects" class="but" id="project-but">
      <p>Projects</p>
    </a>
  </div>
</template>

<style scoped>
#header-con {
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0px;
  border-style: none none solid none;
  padding-bottom: 0px;
  border-width: 2px;
  border-color: #1F2366;
  display: grid;
  grid-template-columns: 30px 200px 1fr 80px 10px 80px 10px 80px 1fr 230px;
  backdrop-filter: blur(1000px);
  -webkit-backdrop-filter: blur(1000px);
}

#header-con #home-but {
  color: #1F2366;
  text-decoration: none;
  width: fit-content;
  margin: 7px;
  grid-column: 2;
  width: 200px;
  text-align: center;
}

#header-con #home-but #home-but-s {
  display: none;
  width: 35px;
  text-align: center;
}


#header-con .but {
  text-decoration: none;
  height: 40px;
  width: 100%;
  color: #1F2366;
  margin-top: 4px;
  border-radius: 5px;
  text-align: center;
}

#header-con .but>p {
  margin-top: 7px;
  font-size: larger;
}

#header-con .but:hover {
  color: white;
  margin-top: 4px;
  background-color: #1F2366;
}

#header-con #about-but {
  grid-column: 4;
}

#header-con #work-but {
  grid-column: 6;
}

#header-con #project-but {
  grid-column: 8;
}

@media only screen and (max-width: 750px) {
  #header-con {
    grid-template-columns: 30px 200px 1fr 80px 10px 80px 10px 80px 1fr 30px;
  }
}

@media only screen and (max-width: 540px) {
  #header-con #home-but #home-but-l {
    display: none;
  }

  #header-con #home-but #home-but-s {
    display: revert;
  }

  #header-con {
    grid-template-columns: 1fr 45px 1fr 80px 10px 80px 10px 80px 1fr;
  }
}

@media only screen and (max-width: 340px) {
  #header-con .but>p {
    margin-top: 9px;
    font-size: medium;
  }

  #header-con {
    grid-template-columns: 1fr 45px 1fr 70px 5px 70px 5px 70px 1fr;
  }
}

@media (prefers-color-scheme: dark) {
  #header-con {
    border-color: #4651EA;
    color: #4651EA;
  }

  #header-con .but {
    color: #4651EA;
  }

  #header-con .but:hover {
    background-color: #4651EA;
  }

  #header-con #home-but {
    color: #4651EA;
  }
}
</style>