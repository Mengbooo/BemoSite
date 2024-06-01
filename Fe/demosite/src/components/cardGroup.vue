<template>
    <div class="levels">
        <div class="level one">
            <div class="content">POKEMENG!</div>
            <div class="title">2024/5/12</div>
        </div>
        <div class="level two">
            <div class="content">3D card</div>
            <div class="title">2024/4/25</div>
        </div>
        <div class="level three">
            <div class="content">Disco!!!</div>
            <div class="title">developing···</div>
        </div>
        <div class="level four">
            <div class="content">3D elements</div>
            <div class="title">developing···</div>
        </div>

    </div>

</template>

<script setup name="cardGroup">

</script>

<style scoped>
/* 卡片长宽比为2:1，以后可以尝试塞入一些网页图片作为背景 */
.levels {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-style: preserve-3d;
    user-select: none;
}

.levels .level {
    width: 24vh;
    height: 12vh;
    border-radius: 12px;
    color: var(--fontColor);
    cursor: pointer;
    transition: all 0.4s ease;
    transform: rotateX(45deg) rotateY(-15deg) rotate(45deg);
    opacity: 0.9;
    margin-top: -5vh;
}

.levels .level.one {
    z-index: 4;
    color: rgb(42, 250, 0);
    background-color: rgb(255, 187, 98);
}

.levels .level.two {
    z-index: 3;
    color: rgb(255, 102, 0);
    background-color: rgb(82, 85, 245);
}

.levels .level.three {
    z-index: 2;
    color: rgb(255, 126, 249);
    background-color: rgb(123, 216, 135);
}

.levels .level.four {
    z-index: 1;
    color: rgb(118, 117, 228);
    background-color: rgb(235, 15, 8);
}

.levels .level .title {
    position: absolute;
    top: 1.5vh;
    left: 2vh;
    font-size: 1vh;
    font-weight: bold;
}

.levels .level .content {
    position: absolute;
    font-weight: 700;
    bottom: 1.5vh;
    left: 2vh;
    font-size: 2.3vh;
}

.levels .level:hover {
    transform: rotateX(30deg) rotateY(-15deg) rotate(30deg) translate(-3vh, 6vh);
    opacity: 1;
}
</style>