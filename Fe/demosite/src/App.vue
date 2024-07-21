<template>
  <router-view></router-view>
</template>

<script setup name="App">

</script>

<style lang="less">
* {
  background-color: rgb(0, 0, 0);
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

html::-webkit-scrollbar {
  width: 1vw;
  color:#40ff00;
}

html::-webkit-scrollbar-track {
  background-color: rgb(0, 0, 0);
}

html::-webkit-scrollbar-thumb {
  background: #40ff00;
  border-radius: 1vw;
}
</style>