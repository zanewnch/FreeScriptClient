<script setup lang="ts">
</script>

<template>
  <!-- google font: palyfair serif -->
  <link
    rel="preconnect"
    href="https://fonts.googleapis.com"
  >
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
  >
  <link
    href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
    rel="stylesheet"
  >

  <div class='w-full h-full'>
    <router-view />
  </div>
</template>

<style scoped lang="scss">
:deep(*) {
  // border: solid 1px black;
  margin: 0;
  padding: 0;
  font-family: 'Playfair Display', serif;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
  overflow: hidden;
  font-size: 16px;
}
</style>
