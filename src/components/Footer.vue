<script setup>



</script>

<template>
  <div id="footer-con">
    <p>
      &copy 2023 Ariz Kazani
    </p>
  </div>
</template>

<style scoped>
#footer-con {
  display: flex;
  width: 100%;
  height: 100px;
  border-style: solid none none none;
  border-width: 2px;
  border-color: #4651EA;
  color: #4651EA;
  justify-content: center;
  align-items: flex-end;
}

p {
  margin: 10px;
}

@media (prefers-color-scheme: dark) {
  #footer-con {
    background-color: rgba(255, 255, 255, 0.07);
  }
}
</style>