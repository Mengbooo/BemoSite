<template>
    <div class="logoContainer">
        <a href="https://github.com/Mengbooo"><img src="../assets/logo.jpg" alt="Bolaxious'demosite" class="logo"></a>
    </div>
    <div class="cardGroup">
        <cardGroup />
    </div>
    <div class="footer">
        <p><strong>intro</strong></p>
        <p @click="controlScreen"><strong>{{ screenController }}</strong></p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import screenfull from "screenfull";
import cardGroup from '../components/cardGroup.vue'

let screenController = ref('full screen');
function controlScreen() {
    if (!screenfull.isFullscreen) {
        screenfull.request();
        screenController.value = 'exit full screen';
    } else {
        screenfull.exit();
        screenController.value = 'full screen';
    }
}
</script>

<style scoped>
@keyframes fade {
  from {opacity: 0} 
  to {opacity: 1}
}
.logoContainer {
    user-select: none;
    padding-top: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fade 1.5s ease-in-out;
}

.logo {
    width: 6vh;
    border-radius: 10%;
    filter: drop-shadow(0 0 0 #0030e4);
    transition: filter 0.5s ease-in-out;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #0030e4);
}

.footer {
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    animation: fade 1.5s ease-in-out;
}

.footer p {
    margin: 1vw 0.5vw;
    color: #ffffff;
    font-size: 1.3vh;
    border: none;
    background-color: #141414;
    transition: color 0.5s ease-in-out;

}

.footer p:hover {
    color: #03c192;
}
</style>