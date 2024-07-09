<template>
    <div class="wrapper">
        <div class="itemLeft item1">UI</div>
        <div class="itemLeft item2">UI</div>
        <div class="itemLeft item3">FE</div>
        <div class="itemLeft item4">DESIGN</div>
        <div class="itemLeft item5">UI</div>
        <div class="itemLeft item6">UX</div>
        <div class="itemLeft item7">FE</div>
        <div class="itemLeft item8">DESIGN</div>
    </div>
    <div class="wrapper">
        <div class="itemRight item1">DESIGN</div>
        <div class="itemRight item2">FE</div>
        <div class="itemRight item3">UX</div>
        <div class="itemRight item4">UI</div>
        <div class="itemRight item5">DESIGN</div>
        <div class="itemRight item6">FE</div>
        <div class="itemRight item7">UX</div>
        <div class="itemRight item8">UI</div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.wrapper {
    width: 90%;
    max-width: 95vw;
    height: 7vh;
    margin-top: 2vh;
    position: relative;
    overflow: hidden;
    mask-image: linear-gradient(to right,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 1) 20%,
            rgba(0, 0, 0, 1) 80%,
            rgba(0, 0, 0, 0));
}

@keyframes scrollLeft {
    to {
        left: -15vw;
    }
}

@keyframes scrollRight {
    to {
        right: -15vw;
    }
}

.itemLeft,
.itemRight {
    width: 12vw;
    height: 6vh;
    background-color: #000000;
    border-radius: 6px;
    position: absolute;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    display: flex;
    align-items: center;
    justify-content: center;
    animation-duration: 30s;
    color: rgb(255, 255, 255);
    font-family: Monoton;
}

.itemLeft {
    left: max(calc(15vw * 8), 100%);
    animation-name: scrollLeft;

}

.itemRight {
    right: max(calc(15vw * 8), calc(100% + 15vw));
    animation-name: scrollRight;

}

.item1 {
    font-size: 6vh;
    animation-delay: calc(30s / 8 * (8 - 1) * -1);
}

.item2 {
    font-size: 6vh;
    animation-delay: calc(30s / 8 * (8 - 2) * -1);
}

.item3 {
    font-size: 6vh;
    animation-delay: calc(30s / 8 * (8 - 3) * -1);
}

.item4 {
    font-size: 6vh;
    animation-delay: calc(30s / 8 * (8 - 4) * -1);
}

.item5 {
    font-size: 6vh;
    animation-delay: calc(30s / 8 * (8 - 5) * -1);
}

.item6 {
    font-size: 6vh;
    animation-delay: calc(30s / 8 * (8 - 6) * -1);
}

.item7 {
    font-size: 7vh;
    animation-delay: calc(30s / 8 * (8 - 7) * -1);
}

.item8 {
    font-size: 6vh;
    animation-delay: calc(30s / 8 * (8 - 8) * -1);
}
</style>