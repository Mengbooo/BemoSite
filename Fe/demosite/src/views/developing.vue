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
    <div class="textContainer">
        <div class="text-magic" data-word="DEVELOPINGMORE">DEVELOPINGMORE</div>
        <div class="white"></div>
    </div>

</template>

<script setup>

</script>

<style scoped>
.text-magic {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    font-size: 36px;
    font-family: Monoton;
    color: #fff;
}

.white {
    position: absolute;
    left: -10px;
    width: 100%;
    height: 3px;
    background: #000;
    z-index: 4;
    animation: whiteMove 3s ease-out infinite;
}

.text-magic::before {
    content: attr(data-word);
    position: absolute;
    top: 0;
    left: 0.5px;
    height: 0px;
    color: rgba(255, 255, 255, 0.9);
    overflow: hidden;
    z-index: 2;
    animation: redShadow 1s ease-in infinite;
    filter: contrast(200%);
    text-shadow: 1px 0 0 red;
}

.text-magic::after {
    content: attr(data-word);
    position: absolute;
    top: 0;
    left: -3px;
    height: 36px;
    color: rgba(255, 255, 255, 0.8);
    overflow: hidden;
    z-index: 3;
    background: rgba(0, 0, 0, 0.9);
    animation: redHeight 1.5s ease-out infinite;
    filter: contrast(200%);
    text-shadow: -1px 0 0 cyan;
    mix-blend-mode: darken;
}

@keyframes redShadow {
    20% {
        height: 32px;
    }

    60% {
        height: 6px;
    }

    100% {
        height: 42px;
    }
}

@keyframes redHeight {
    20% {
        height: 42px;
    }

    35% {
        height: 12px;
    }

    50% {
        height: 40px;
    }

    60% {
        height: 20px;
    }

    70% {
        height: 34px;
    }

    80% {
        height: 22px;
    }

    100% {
        height: 0px;
    }
}

@keyframes whiteMove {
    8% {
        top: 38px;
    }

    14% {
        top: 8px;
    }

    20% {
        top: 42px;
    }

    32% {
        top: 2px;
    }

    99% {
        top: 30px;
    }
}

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
</style>