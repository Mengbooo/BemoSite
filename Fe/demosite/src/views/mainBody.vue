<template>
    <div class="mainBody">
        <div class="nav">
            <div class="logo">
                <img src="../assets/2D/logo.jpg" alt="">
            </div>
            <div class="menu">

            </div>
        </div>
        <div class="introBox">
            <p>HI&nbsp;&nbsp; THERE.</p>
            <p>WELC🤩ME&nbsp;&nbsp;T😘</p>
            <p class="siteName">BEM🍟SITE.</p>
            <p class="shortIntro one">this is 🅰️ website</p>
            <p class="shortIntro two">of <a href="https://github.com/Mengbooo" target="_blank" class="name">bolaxious</a></p>
            <p class="shortIntro three">it ©️olle©️tions part of demos</p>
            <p class="shortIntro four">to show the fe path🔱.</p>
        </div>
        <div class="foot">

        </div>
    </div>
    <div class="emojiScroller">
        <emojiScroller />
    </div>
</template>

<script setup>
import emojiScroller from '../components/emojiScroller.vue'
</script>


<style scoped lang="less">
a{
    text-decoration: none;
}
.mainBody {
    user-select: none;
    background-color: rgb(0, 0, 0);
    display: flex;
    align-items: center;
    flex-direction: column;

    .nav {
        margin-top: 1vw;
        width: 90vw;
        display: flex;

        .logo img {
            width: 4vw;
            height: auto;
            border-radius: 20%;
        }
    }

    .introBox {
        width: 90vw;

        p {
            font-family: Monoton;
            line-height: 0%;
            font-size: 8vw;
            color: rgb(255, 255, 255);
        }

        .name {
            filter: blur(5px);
            font-size: 3vw;
            color: rgb(236, 25, 255);
            transition: all 0.5s ease-in-out;
        }

        .name:hover {
            cursor: pointer;
            filter: blur(0);
            color: rgb(109, 255, 25);
            transition: all 0.5s ease-in-out;
        }

        .siteName {
            color: rgb(10, 244, 166);
            font-size: 11vw;
        }

        .shortIntro {
            color: rgb(255, 255, 255);
            font-size: 5vw;
            &.one {color: rgb(255, 218, 35);}
            &.two {color: rgb(64, 63, 75);}
            &.three {color: rgb(15, 208, 247);}
            &.four {color: rgb(215, 108, 199);}
        }
 
    }

    .emojiScroller {
        width: 100%;
        overflow: hidden;
        position: relative;
        height: 100px;
    }
}
</style>