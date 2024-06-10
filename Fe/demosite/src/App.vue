<template>
  <loading v-if="isLoading"/>
  <router-view v-if="!isLoading && isPCShow"></router-view>
</template>
 
<script setup name="App">
import { ref } from 'vue'

import loading from '../src/views/loading.vue'
import mainBody from '../src/views/mainBody.vue'
import {RouterView} from 'vue-router'

let isLoading = ref(true);
let isPCShow = ref(false);
setTimeout(() => {
  isLoading.value = false;
  isPCShow.value = true;
}, 2000)


</script>

<style>
  html,body {
    cursor: url('../src/assets/cursor.png');
  }
</style>