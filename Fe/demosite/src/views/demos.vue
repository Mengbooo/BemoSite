<template>
    <router-link to="/" class="link">
        <div class="backBtn">
            <svg t="1721525762879" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="10257">
                <path
                    d="M675.328 117.717333A425.429333 425.429333 0 0 0 512 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667c0-56.746667-11.093333-112-32.384-163.328a21.333333 21.333333 0 0 0-39.402667 16.341333A382.762667 382.762667 0 0 1 896 512c0 212.074667-171.925333 384-384 384S128 724.074667 128 512 299.925333 128 512 128c51.114667 0 100.8 9.984 146.986667 29.12a21.333333 21.333333 0 0 0 16.341333-39.402667z m-324.693333 373.013334l174.464-174.485334a21.141333 21.141333 0 0 0-0.192-29.973333 21.141333 21.141333 0 0 0-29.973334-0.192l-208.256 208.256a20.821333 20.821333 0 0 0-6.122666 14.976c0.042667 5.418667 2.133333 10.837333 6.314666 14.997333l211.178667 211.2a21.141333 21.141333 0 0 0 29.973333 0.213334 21.141333 21.141333 0 0 0-0.213333-29.973334l-172.629333-172.629333 374.997333 2.602667a20.693333 20.693333 0 0 0 21.034667-21.034667 21.482667 21.482667 0 0 0-21.333334-21.333333l-379.242666-2.624z"
                    fill="#ffffff" p-id="10258" width="5vw"></path>
            </svg>
            <div class="backText">
                <p>back to home</p>
            </div>
        </div>
    </router-link>
    <div class="masonry-grid">
        <div class="item" v-for="(item, index) in blocks" :key="index">
            <img :src="item" alt="design image">
        </div>
    </div>
    <div class="intro">
        <p>Welcome to the Bolaxious Design Gallery</p>
        <p>Here you can find the latest designs and inspirations from Bolaxious.</p>
        <p>Enjoy your stay!</p>
    </div>
    <div class="cat">
        <img src="../assets/2D/Photo_Cat.png" alt="">
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { createApp } from 'vue';
//可以用express改写一下
const imageCount = 2;
const blocks = ref([]);

for (let i = 1; i <= imageCount; i++) {
    blocks.value.push(new URL(`../assets/demos/${i}.png`, import.meta.url).href);
}
</script>
<style lang="less" scoped>
.link {
    text-decoration: none;
}

.backBtn {
    display: flex;
    justify-content: baseline;
    align-items: center;
    padding: 1vw 1vw;

    svg {
        width: 4vh;
    }

    .backText {
        font-family: Monoton;
        font-size: 1.3vw;
        color: #ffffff;
        line-height: 0;
        margin-left: 1vw;
    }
}

.items {
    width: 100%;
    border-radius: 15px;
    transition: all 0.5s ease-in-out;
}

.items:hover {
    scale: 1.04;
    transition: all 0.5s ease-in-out;
}

.masonry-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16vw, 1fr));
    gap: 1vw;
}

.item {
    width: 100%;
    break-inside: avoid;
}

.item img {
    width: 100%;
    border-radius: 15px;
    transition: all 0.5s ease-in-out;

    &:hover {
        scale: 1.04;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
    }
}

.intro {
    margin-top: 4vh;
    font-family: Monoton;
    font-size: 2vw;
    color: #454545;
    transition: all 0.5s ease-in-out;
    text-align: center;
}

.intro:hover {
    color: #24b500;
    transition: all 0.5s ease-in-out;
}

.cat {
    right: 0;
    position: absolute;
    margin-top: 5vh;
    img {
        width: 20vw;
    }
}
</style>