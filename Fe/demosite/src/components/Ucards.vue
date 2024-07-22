<template>
    <div class="container">
        <div class="card" style="--i: -4;">
            <a href="https://github.com/realRayyy" target="_blank">
                <div class="name">
                    💡
                </div>
            </a>
        </div>
        <div class="card" style="--i: -3;">
            <a href="https://github.com/Mengbooo" target="_blank">
                <div class="name">
                    🍟
                </div>
            </a>
        </div>
        <div class="card" style="--i: -2;">
            <a href="https://github.com/HomeArchbishop" target="_blank">
                <div class="name">
                    ✞
                </div>
            </a>
        </div>
        <div class="card" style="--i: -1;">
            <a href="https://github.com/wangyinyuan" target="_blank">
                <div class="name">
                    🦫
                </div>
            </a>
        </div>
        <div class="card" style="--i: -0;">
            <a href="https://github.com/jingyuhhh" target="_blank">
                <div class="name">
                    🌋
                </div>
            </a>
        </div>
        <div class="card" style="--i: 1;">
            <a href="https://github.com/yqcjq" target="_blank">
                <div class="name">
                    🍊
                </div>
            </a>
        </div>
        <div class="card" style="--i: 2;">
            <a href="https://github.com/bowl23" target="_blank">
                <div class="name">
                    🥣
                </div>
            </a>
        </div>
        <div class="card" style="--i: 3;">
            <a href="https://github.com/raxskle" target="_blank">
                <div class="name">
                    🥤
                </div>
            </a>
        </div>
        <div class="card" style="--i: 4;">
            <a href="#" target="_blank">
                <div class="name">
                    🍚
                </div>
            </a>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.container {
    width: 90vw;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container .card {
    position: absolute;
    width: 20vw;
    height: 20vw;
    background-color: #5e5cfc;
    color: rgba(0, 0, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(0, 0, 0, 0);
    border: 10px solid rgba(0, 0, 0, .1);
    border-radius: 20px;
    cursor: pointer;
    transition: 0.5s;
    transform-origin: 50% 100%;
    filter: hue-rotate(calc(var(--i) * 30deg));
    opacity: 0.95;
     box-shadow: 0 15px 50px rgba(0, 0, 0, .1);
    user-select: none;
}

.container:hover .card {
    transform: rotate(calc(var(--i) *10deg)) translate(calc(var(--i) * 5vw), -7vw);
    color: rgba(0, 0, 0, .25);
    box-shadow: 0 15px 50px rgba(0, 0, 0, .25);
}



.container:hover .card {
    background-color: #333;
}

.container .card:hover {
    translate: calc(var(--i) * 2vw) -4vw;
    z-index: 1;
    background-color: #5e5cfc;
}

a {
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;
}

.name {
    font-family: Monoton;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15vw;
    height: 15vw;
    font-size: 10vw;
    background-color: rgba(0, 0, 0, 0);
    transition: all 0.5s ease-in-out;

}

.name:hover {
    font-size: 12vw;
    transition: all 0.5s ease-in-out;
}
</style>