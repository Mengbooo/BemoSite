<template>
    <div class="mainBody">
        <nav class="header">
            <div class="headerLogo">
                <img src="../assets/logo.jpg" alt="">
                <p>Bemosite.</p>
            </div>
            <div class="headerContent">
                <div @click="openIntro">intro</div>
                <div><a href="https://github.com/Mengbooo" target="_blank"
                        style="text-decoration: none;color: rgb(255, 255, 255);">
                        <div>github</div>
                    </a></div>
                <div @click="controlScreen">{{ screenController }}</div>
            </div>
        </nav>
        <transition name="fade">
            <div class="cardGroup" v-show="!isIntro">
                <cardGroup />
            </div>
        </transition>
        <div class="footer">
            <scrollAnimation />
        </div>
        <transition name="fade">
            <intro v-if="isIntro" />
        </transition>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import tableStore from '../stores/table'
import intro from './intro.vue'
import scrollAnimation from '../components/scrollAnimation.vue'
import screenfull from "screenfull";
import cardGroup from '../components/cardGroup.vue'

let screenController = ref('fullScreen');
function controlScreen() {
    if (!screenfull.isFullscreen) {
        screenfull.request();
        screenController.value = 'exitFullScreen';
    } else {
        screenfull.exit();
        screenController.value = 'fullScreen';
    }
}

const openIntro = () => {
    tableStore().controlIntro();
}

let isIntro = computed(() => {
    return tableStore().isIntro;
});
</script>

<style scoped>
/* 淡入 */
.fade-enter-from {
    opacity: 0;
}

.fade-enter-to {
    opacity: 1;
}

.fade-enter-active {
    transition: opacity 1s ease-in-out;
}

/* 淡出 */
.fade-leave-from {
    opacity: 1;
}

.fade-leave-to {
    opacity: 0;
}

.fade-leave-active {
    transition: opacity 1s ease-in-out;
}

@keyframes fade {
    from {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

.mainBody {
    display: flex;
    flex-direction: column;
    flex: space-warp;
}

.logoContainer {
    z-index: 2;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    user-select: none;
    padding-top: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fade 1s ease-in-out;
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

.header {
    background-color: rgba(red, green, blue, 0);
    z-index: 1;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    width: 100vw;
    height: 8vh;
    top: 1%;
    left: 50%;
    transform: translateX(-50%);
    animation: fade 1.5s ease-in-out;
}
.headerLogo{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 2vw;
}
.headerLogo img{
    width: 4vh;
    height: auto; 
    border-radius: 15px;
    margin: 0 2vw;
}
.headerLogo p{
    font-family: 'Hana';
    font-size: 2.5vh;
    color: rgb(0, 0, 0);
}

.headerContent {
    display: flex;
    padding: 2vw 1vw;
    font-size: 1.5vh;
    font-weight: 900;
    border-radius: 2.5vw;
    background-color: rgba(0, 0, 0 ,0);
    transition: color 0.5s ease-in-out;
    font-family: 'Holt';
    margin: 0 2vw;
    height: 3vh;
}

.headerContent div {
    font-size: 1.5vh;
    color: #000000;
    margin: auto 1vw;
    transition: 0.5s ease-in-out;
}

.headerContent div:hover {
    color: #03c192;
}

.footer {
    animation: fade 1.5s ease-in-out;
    position: absolute;
    bottom: 2%;
    width: 100vw;
    height: auto;
}
.cardGroup {
    animation: fade 1.5s ease-in-out;
    z-index: 0;
    width: 100%;
    position: fixed;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>