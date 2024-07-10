<template>
    <div class="introBody">
        <div class="nav">
            <div class="logo">
                <img src="../assets/2D/logo.jpg" alt="">
            </div>
            <div class="menu">

            </div>
        </div>
        <div class="introBox">
            <p>HI&nbsp;&nbsp; THERE.</p>
            <p>WELC🤩ME&nbsp;&nbsp;T😘 my</p>
            <p class="siteName">BEM🍟SITE.</p>
            <p class="shortIntro one">this is 🅰️ website</p>
            <p class="shortIntro two">of <a href="https://github.com/Mengbooo" target="_blank"
                    class="name">bolaxious</a></p>
            <p class="shortIntro three">it ©️olle©️ts part of demos</p>
            <p class="shortIntro four">to show the fe path🔱.</p>
        </div>
    </div>
    <div class="emojiScroller">
        <emojiScroller />
    </div>
    <div class="infoBox">
        <div class="demoInfo">
            <div class="demoImg">
                <img src="../assets/3D/Instagram post - 1.png" alt="">
            </div>
            <div class="demoText">
                "&nbsp;&nbsp;only bemo can do it&nbsp;&nbsp;"<br>
                about demo
            </div>

        </div>
        <div class="demoRoad">
            <img src="../assets/3D/7.png" alt="">
            <div class="demoIntro">
                <div class="intro1">
                    when we talk about 'demo'
                </div>
                <div class="intro2">
                    For me, the front-end gives me a creative opportunity, and the demos show my imagination that is
                    still alive 😶‍🌫️
                </div>
                <div class="demoBtn">
                    <router-link to="/demos" class="intro3">
                        <span style="color: yellow;">o</span>&nbsp;&nbsp;&nbsp;&nbsp; l🤪😄k at dem😴 ↗️
                    </router-link>
                </div>
            </div>
        </div>
        <div class="designInfo">
            <div class="logo">
                <img src="../assets/2D/logo.jpg" alt="">
            </div>
            <div class="designSlogan">
                design.
            </div>
        </div>
        <div class="designRoad">
            <textScoller />
        </div>
        <div class="designIntro">
            <div class="intro">
                <div class="designContent">
                    🍔I think that as a good front-end engineer, you must have certain design skills.
                    <br>🍟I'm constantly
                    learning and trying to create my own design collection while I'm in college
                </div>
                <div class="designImg">
                    <img src="../assets/3D/rc.gif" alt="">
                </div>
            </div>
        </div>
        <div class="designRoad">
            <textScoller />
        </div>
        <div class="ULinkSection">
            <div class="ULinkBackImg">
                <img src="../assets/3D/SPACE Text transition@1-1707x948.png" alt="">
            </div>
            <div class="ULinkText">
                云深山坞，烟冷江皋，人生未易相逢
            </div>
        </div>
        <div class="Ucards">
            <Ucards />
        </div>
    </div>
    <div class="summaryBox">
        <div class="summaryImg">
            <img src="../assets/3D/Instagram post - 3.png" alt="">
        </div>
        <div class="summaryText">
            why I write this site?<br>
            I want to have my own blog site in my sophomore year.
            So this 'bemosite' is my little world and practice projects,
            and I want this site to record some of my demos and record my growth
        </div>
    </div>
    <div class="emojiScroller">
        <emojiScroller />
    </div>
    <div class="byeBox">
        <div class="byeInfo">
            <span>ByeBye!</span><br>
            if you want to contact me, you can send email to me at <br>
            <span>bo156431362@outlook.com</span>
        </div>
    </div>
    <div class="emojiScroller">
        <emojiScroller />
    </div>
</template>

<script setup>
import emojiScroller from '../components/emojiScroller.vue'
import textScoller from '../components/textScroller.vue'
import Ucards from '../components/Ucards.vue'
</script>


<style scoped lang="less">
a {
    text-decoration: none;
}

.introBody {
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

            &.one {
                color: rgb(234, 255, 0);
            }

            &.two {
                color: rgb(184, 185, 184);
            }

            &.three {
                color: rgb(0, 94, 255);
            }

            &.four {
                color: rgb(255, 0, 217);
            }
        }

    }

    .emojiScroller {
        width: 95vw;
        overflow: hidden;
        position: relative;
        height: 20vh;
    }
}

.infoBox {
    user-select: none;
    margin-top: 5vh;
    display: flex;
    align-items: center;
    flex-direction: column;

    .demoInfo {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        .demoImg {
            height: auto;
            position: relative;
            z-index: 1;

            img {
                filter: blur(5px);
                transition: all 0.5s ease-in-out;
                width: 90vw;
                height: auto;
            }

            img:hover {
                filter: blur(0);
                transition: all 0.5s ease-in-out;
            }
        }

        .demoText {
            background-color: rgba(0, 0, 0, 0);
            color: rgb(255, 255, 255);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;
            text-align: center;
            font-family: Monoton;
            font-size: 2vw;
            opacity: 1;
            transition: all 0.5s ease-in-out;

        }

        .demoText:hover {
            opacity: 0;
            transition: all 0.5s ease-in-out;
        }
    }

    .demoRoad {
        width: 95vw;
        margin-top: 5vh;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 45vw;
            height: auto;
            filter: brightness(30%);
            transition: all 0.5s ease-in-out;
        }

        img:hover {
            filter: brightness(90%);
            transition: all 0.5s ease-in-out;

        }

        .demoIntro {
            display: flex;
            flex-direction: column;
            align-items: baseline;

            .intro1 {
                color: rgb(255, 255, 255);
                font-size: 2vw;
                font-family: Monoton;
                transition: all 0.3s ease-in-out;

            }

            .intro1:hover {
                color: rgb(13, 255, 0);
                font-size: 3vw;
                transition: all 0.3s ease-in-out;
            }

            .intro2 {
                color: rgb(255, 255, 255);
                font-size: 3vw;
                font-family: Libre;
                transition: all 0.3s ease-in-out;

            }

            .intro2:hover {
                color: rgb(10, 88, 214);
                transition: all 0.3s ease-in-out;
            }

            .demoBtn {
                display: block;
                padding: 1vw 0;
                color: rgb(255, 255, 255);
                border-radius: 10px;
                transition: all 0.3s ease-in-out;
            }

            .demoBtn:hover {
                background-color: rgb(255, 255, 255);
                transition: all 0.3s ease-in-out;
            }

            .intro3 {
                color: rgb(255, 255, 255);
                font-family: Monoton;
                font-size: 2vw;
                border-radius: 12%;
                border-color: aliceblue;
                text-decoration: none;
            }
        }
    }

    .designRoad {
        width: 95vw;
        margin-top: 5vh;
        display: flex;
    }

    .designInfo {
        height: 100vh;
        width: 95vw;
        margin-top: 5vh;
        background: linear-gradient(37deg, rgb(138, 105, 224), #2c3fea, #06ab6e, #9dff0b);
        display: flex;
        align-items: center;
        justify-content: center;

        .logo {
            background-color: rgba(0, 0, 0, 0);
            width: 4vw;
            height: 4vw;
            margin-right: 1vw;
        }

        .logo img {
            width: 4vw;
            height: auto;
            border-radius: 20%;
        }

        .designSlogan {
            background-color: rgba(0, 0, 0, 0);
            color: rgb(255, 255, 255);
            font-size: 5vw;
            font-family: Monoton;
        }
    }

    .designIntro {
        display: flex;
        align-items: center;
        justify-content: center;

        .intro {
            width: 90vw;
            display: flex;
            align-items: center;
            justify-content: center;

            .designContent {
                color: rgb(255, 255, 255);
                font-size: 2vw;
                font-family: Monoton;
                transition: all 0.3s ease-in-out;
            }

            .designContent:hover {
                color: rgb(255, 0, 0);
                transition: all 0.3s ease-in-out;
            }

            .designImg {
                img {
                    width: 30vw;
                }
            }
        }
    }

    .ULinkSection {
        margin-top: 5vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        .ULinkBackImg {
            height: auto;
            position: relative;
            z-index: 1;

            img {
                transition: all 0.5s ease-in-out;
                width: 95vw;
                height: auto;
            }
        }

        .ULinkText {
            background-color: rgba(0, 0, 0, 0);
            color: rgb(38, 5, 95);
            position: absolute;
            top: 80%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;
            text-align: center;
            font-family: maocao;
            font-size: 5vw;
            opacity: 1;
            transition: all 0.5s ease-in-out;
        }

        .ULinkText:hover {
            color: rgb(40, 26, 235);
            transition: all 0.5s ease-in-out;
        }
    }

    .Ucards {
        height: 100vh;
    }
}

.summaryBox {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .summaryImg {
        height: auto;
        position: relative;
        z-index: 1;

        img {
            filter: blur(5px);
            transition: all 0.5s ease-in-out;
            width: 90vw;
            height: auto;
        }

        img:hover {
            filter: blur(0);
            transition: all 0.5s ease-in-out;
        }
    }

    .summaryText {
        background-color: rgba(0, 0, 0, 0);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        text-align: center;
        font-family: Bungee;
        color: #9dff0b;
        font-size: 2vw;
        opacity: 1;
        transition: all 0.5s ease-in-out;

    }

    .demoText:hover {
        opacity: 0;
        transition: all 0.5s ease-in-out;
    }
}

.byeBox {
    margin-top: 10vh;
    margin-bottom: 10vh;
    display: flex;
    align-items: center;
    justify-content:baseline;
    span{
        font-size: 5vw;
        color: #9dff0b;
    }
    .byeInfo {
        color: rgb(255, 255, 255);
        font-size: 2vw;
        font-family: Monoton;
    }
}
</style>