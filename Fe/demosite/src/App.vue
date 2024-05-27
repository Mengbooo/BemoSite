<template>
  <loading v-if="isLoading"/>
  <mainBody v-if="!isLoading && isPCShow"/>
</template>

<script setup name="App">
import { ref } from 'vue'
import loading from '../src/views/loading.vue'
import mainBody from '../src/views/mainBody.vue'

let isLoading = ref(true);
let isPCShow = ref(false);
setTimeout(() => {
  isLoading.value = false;
  isPCShow.value = true;
}, 2000)


</script>

<style scoped>

</style>