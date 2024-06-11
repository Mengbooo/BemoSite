<template>
    <div class="animation-container">
        <div class="wrapper">
            <div class="itemLeft item1">Bolaxious</div>
            <div class="itemLeft item2">Bemosite</div>
            <div class="itemLeft item3">Bolaxious</div>
            <div class="itemLeft item4">Bemosite</div>
            <div class="itemLeft item5">Bolaxious</div>
            <div class="itemLeft item6">Bemosite</div>
            <div class="itemLeft item7">Bolaxious</div>
            <div class="itemLeft item8">Bemosite</div>
        </div>
        <div class="wrapper">
            <div class="itemRight item1">Bolaxious</div>
            <div class="itemRight item2">Bemosite</div>
            <div class="itemRight item3">Bolaxious</div>
            <div class="itemRight item4">Bemosite</div>
            <div class="itemRight item5">Bolaxious</div>
            <div class="itemRight item6">Bemosite</div>
            <div class="itemRight item7">Bolaxious</div>
            <div class="itemRight item8">Bemosite</div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    user-select: none;
    margin-top: 0.5vh;
    width: 90%;
    max-width: 80vw;
    margin-inline: auto;
    height: 60px;
    position: relative;
    overflow: hidden;
    mask-image: linear-gradient(to right,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 1) 20%,
            rgba(0, 0, 0, 1) 80%,
            rgba(0, 0, 0, 0));
}
.wrapper div{
    font-family: 'Hana';
    font-size: 2.5vh;
    color:rgb(46, 46, 46) ;
}
@keyframes scrollLeft {
    to {
        left: -100px;
    }
}

@keyframes scrollRight {
    to {
        right: -100px;
    }
}

.itemLeft,
.itemRight {
    width: 100px;
    height: 50px;
    background-color: #f5a1b300;
    border-radius: 6px;
    position: absolute;
    animation-timing-function: linear;
    animation-duration: 30s;
    animation-iteration-count: infinite;
}

.itemLeft {
    left: max(calc(100px * 8), 100%);
    animation-name: scrollLeft;
}

.itemRight {
    right: max(calc(100px * 8), calc(100% + 100px));
    animation-name: scrollRight;
}

.item1 {
    animation-delay: calc(30s / 8 * (8 - 1) * -1);
}

.item2 {
    animation-delay: calc(30s / 8 * (8 - 2) * -1);
}

.item3 {
    animation-delay: calc(30s / 8 * (8 - 3) * -1);
}

.item4 {
    animation-delay: calc(30s / 8 * (8 - 4) * -1);
}

.item5 {
    animation-delay: calc(30s / 8 * (8 - 5) * -1);
}

.item6 {
    animation-delay: calc(30s / 8 * (8 - 6) * -1);
}

.item7 {
    animation-delay: calc(30s / 8 * (8 - 7) * -1);
}

.item8 {
    animation-delay: calc(30s / 8 * (8 - 8) * -1);
}
</style>