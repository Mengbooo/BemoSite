<!-- //这个算是一个废案 -->

<template>
    <div class="loader">
        <div class="loader_item"></div>
        <div class="loader_item"></div>
        <div class="loader_item"></div>
        <div class="loader_item"></div>
        <div class="loader_item"></div>
        <div class="loader_item"></div>
        <div class="loader_item"></div>
        <div class="loader_item"></div>
    </div>
</template>

<script setup name="loading">

</script>

<style scoped>
.loader {
    user-select: none;
    position: absolute;
    border: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: blur(10px) contrast(18);
}

.loader_item {
    position: relative;
    border: 100%;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    background-color: #000000;
    border-color: #0011ff;
    border-width: 15px;
    border-style: solid;
}

.loader_item:nth-child(1) {
    animation: spinLesf 3.5s 0.2s linear infinite;
}
.loader_item:nth-child(3) {
    animation: spinLesf 3.5s 0.2s linear infinite;
}
.loader_item:nth-child(5) {
    animation: spinLesf 3.5s 0.2s linear infinite;
}
.loader_item:nth-child(7) {
    animation: spinLesf 3.5s 0.2s linear infinite;
}
.loader_item:nth-child(2) {
    animation: spinLesf 3.5s 0.2s linear infinite;
    animation-direction: reverse;
}
.loader_item:nth-child(4) {
    animation: spinLesf 3.5s 0.2s linear infinite;
    animation-direction: reverse;

}
.loader_item:nth-child(6) {
    animation: spinLesf 3.5s 0.2s linear infinite;
    animation-direction: reverse;

}
.loader_item:nth-child(8) {
    animation: spinLesf 3.5s 0.2s linear infinite;
    animation-direction: reverse;
}

@keyframes spinLesf {
    100% {
        transform: rotate(360deg) translate(95px);
    }   
    0% {
        transform: rotate(0deg) translate(95px);
    }   
}


</style>