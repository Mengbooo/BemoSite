<template>
    <div class="mask">
        <div class="introBox">
            <div class="mailContent">
                <svg t="1716822844652" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="8404">
                    <path
                        d="M884.363636 139.636364a116.363636 116.363636 0 0 1 116.363637 116.363636v535.272727a116.363636 116.363636 0 0 1-116.363637 116.363637H139.636364a116.363636 116.363636 0 0 1-116.363637-116.363637V256a116.363636 116.363636 0 0 1 116.363637-116.363636zM116.363636 269.661091V791.272727a23.272727 23.272727 0 0 0 23.272728 23.272728h744.727272a23.272727 23.272727 0 0 0 23.272728-23.272728V270.801455L581.282909 551.330909a93.090909 93.090909 0 0 1-115.618909 4.561455l-4.096-3.165091L116.363636 269.661091zM809.122909 232.727273H218.158545l302.429091 248.017454L809.122909 232.727273z"
                        p-id="8405"></path>
                </svg>
                <a href="https://github.com/Mengbooo" target="_blank"><svg t="1716901624476" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="2561"> 
                    <path
                        d="M64 512c0 195.2 124.8 361.6 300.8 422.4 22.4 6.4 19.2-9.6 19.2-22.4v-76.8c-134.4 16-140.8-73.6-150.4-89.6-19.2-32-60.8-38.4-48-54.4 32-16 64 3.2 99.2 57.6 25.6 38.4 76.8 32 105.6 25.6 6.4-22.4 19.2-44.8 35.2-60.8-144-22.4-201.6-108.8-201.6-211.2 0-48 16-96 48-131.2-22.4-60.8 0-115.2 3.2-121.6 57.6-6.4 118.4 41.6 124.8 44.8 32-9.6 70.4-12.8 112-12.8 41.6 0 80 6.4 112 12.8 12.8-9.6 67.2-48 121.6-44.8 3.2 6.4 25.6 57.6 6.4 118.4 32 38.4 48 83.2 48 131.2 0 102.4-57.6 188.8-201.6 214.4 22.4 22.4 38.4 54.4 38.4 92.8v112c0 9.6 0 19.2 16 19.2C832 876.8 960 710.4 960 512c0-246.4-201.6-448-448-448S64 265.6 64 512z"
                        p-id="2562"></path>
                </svg></a>
                <svg t="1716823012734" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="11101">
                    <path
                        d="M853.333333 533.333333a32 32 0 0 1 64 0v266.666667c0 64.8-52.533333 117.333333-117.333333 117.333333H224c-64.8 0-117.333333-52.533333-117.333333-117.333333V256c0-64.8 52.533333-117.333333 117.333333-117.333333h277.333333a32 32 0 0 1 0 64H224a53.333333 53.333333 0 0 0-53.333333 53.333333v544a53.333333 53.333333 0 0 0 53.333333 53.333333h576a53.333333 53.333333 0 0 0 53.333333-53.333333V533.333333z m-42.058666-277.333333l-89.792-95.402667a32 32 0 0 1 46.613333-43.861333l140.544 149.333333C927.861333 286.485333 913.376 320 885.333333 320H724.704C643.029333 320 576 391.210667 576 480v192a32 32 0 1 1-64 0V480c0-123.296 94.784-224 212.704-224h86.570667z"
                        p-id="11102"></path>
                </svg>
            </div>
            <div class="introContent">
                <p class="introLine_1">Intro of demosite</p><br>
                <p class="introLine_2">This is my front-end demo collection site, thanks to the inspiration from CMISCM,
                    which gave me the motivation to create this web page. I'm going to be putting some of my demos on
                    this site gradually, um, well, it should be, right? If you like this site,please share it!</p>
                <br>
                <p class="introLine_3">Thanks for your Visiting!</p>
            </div>
            <div class="closeBtn" @click="closeintro">
                <svg t="1716823158878" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="12988">
                    <path
                        d="M512 58.181818C260.654545 58.181818 58.181818 260.654545 58.181818 512S260.654545 965.818182 512 965.818182 965.818182 763.345455 965.818182 512 763.345455 58.181818 512 58.181818z m0 837.818182c-211.781818 0-384-172.218182-384-384S300.218182 128 512 128 896 300.218182 896 512 723.781818 896 512 896z m204.8-539.927273L560.872727 512l155.927273 155.927273c13.963636 13.963636 13.963636 34.909091 0 48.872727-6.981818 6.981818-16.290909 9.309091-25.6 9.309091s-18.618182-2.327273-25.6-9.309091L512 560.872727l-155.927273 155.927273c-6.981818 6.981818-16.290909 9.309091-25.6 9.309091s-18.618182-2.327273-25.6-9.309091c-13.963636-13.963636-13.963636-34.909091 0-48.872727l155.927273-155.927273-155.927273-155.927273c-13.963636-13.963636-13.963636-34.909091 0-48.872727 13.963636-13.963636 34.909091-13.963636 48.872728 0l155.927272 155.927273 155.927273-155.927273c13.963636-13.963636 34.909091-13.963636 48.872727 0 16.290909 11.636364 16.290909 34.909091 2.327273 48.872727z"
                        p-id="12989"></path>
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup name="intro">
import tableStore from '../stores/table'

const closeintro = () => {
    tableStore().controlIntro();
}

</script>

<style scoped>
@keyframes changeColor_in {
    from {
        background-color: #141414;
    }

    to {
        background-color: rgba(3, 193, 146, 0.5);
    }
}

@keyframes fade {
    from {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

.mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(3, 193, 146, 0.5);
    animation: changeColor_in 1s ease-in-out;
    z-index: 1;
    display: flex;
    align-items: center;
}

svg {
    user-select: none;
    width: 3vh;
    height: 7vh;
    fill: #141414;
    animation: fade 1s ease-in-out;
}

svg:hover {
    fill: #ffffff;
    cursor: pointer;
}


.introBox {
    user-select: none;
    width: 100vw;
    display: flex;
    justify-content: space-between;
}

.mailContent {
    margin-left: 3vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.closeBtn {
    margin-right: 3vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.introContent {
    width: 25vw;
    height: 35vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.introContent p{
    color: #141414;
}

.introLine_1 {
    font-family: 'ChannelSlanted2';
    font-size: 2.5vh;
    font-weight: bold;
    margin: 0;
}

.introLine_2 {
    font-family: 'Arial, Helvetica, sans-serif';
    font-size: 1vh;
    font-weight: bold;
    margin: 0;
}

.introLine_3 {
    margin: 0;
    font-family: 'ChannelSlanted2';
    font-size: 2vh;
    font-weight: bold;
}
</style>