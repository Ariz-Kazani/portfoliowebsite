<script setup>


</script>

<template>
  <div id="header-con">
    <div id="header-button-con">
      <a href="#about" class="but">
        <p>About</p>
      </a>
      <a href="#work" class="but">
        <p>Career</p>
      </a>
      <a href="#projects" class="but">
        <p>Projects</p>
      </a>
    </div>
  </div>
</template>

<style scoped>
#header-con {
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0px;
  border-style: none none solid none;
  border-width: 2px;
  border-color: var(--primary);
  text-shadow: 0px 0px 5px black;
  display: grid;
  overflow: hidden;
  place-items: center;
  place-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 10;
}

#header-con #header-button-con {
  grid-column: 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 16px;
}

#header-con .but {
  text-decoration: none;
  height: 30px;
  color: var(--primary);
  border-bottom: 2px solid transparent;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

#header-con .but>p {
  font-size: larger;
}

#header-con .but:hover {
  border-color: var(--primary);
}

@media only screen and (max-width: 340px) {
  #header-con .but>p {
    font-size: medium;
  }
}
</style>