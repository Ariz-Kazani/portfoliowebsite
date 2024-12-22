<script setup>
// analytics stuff
import { analytics } from '../firebase';
import { getAnalytics, logEvent } from "firebase/analytics";

let an = null;

if (import.meta.env.VITE_MODE == 'prod') {
  an = getAnalytics();
}


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
    <div id="socials">
      <a @click="logEvent(an, 'Clicked A Social Link', { linkName: 'LinkedIn' });"
        href="https://www.linkedin.com/in/arizkazani/" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="var(--secondary-variant)" class="bi bi-linkedin"
          viewBox="0 0 16 16">
          <path
            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
        </svg>
      </a>
      <a @click="logEvent(an, 'Clicked A Social Link', { linkName: 'GitHub' });" href="https://github.com/Ariz-Kazani"
        target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="var(--secondary-variant)" class="bi bi-github"
          viewBox="0 0 16 16">
          <path
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
        </svg>
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

#socials {
  width: 100%;
  padding-right: 16px;
  display: flex;
  gap: 16px;
  justify-content: flex-end;
}

#socials a {
  display: grid;
  place-content: center;
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
  color: var(--primary);
  text-align: center;
  display: grid;
  place-items: center;
}

#header-con .but>p {
  border-bottom: 2px solid transparent;
  font-size: larger;
}

#header-con .but>p:hover {
  transition: border-color 0.2s ease-in;
  border-color: var(--primary);
}

#socials a:hover {
  transform: scale(1.1);
  transition: 0.2s ease-in;
}

@media only screen and (max-width: 500px) {
  #header-con {
    grid-template-columns: 1fr 1fr;
  }

  #header-con #header-button-con {
    grid-column: 1;
    padding-left: 16px;
  }

  #header-con #socials {
    grid-column: 2;
  }
}

@media only screen and (max-width: 340px) {
  #header-con .but>p {
    font-size: medium;
  }
}
</style>