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
    <div class="container">
        <Ucards />
    </div>
    <hr />
    <div class="footer">
        <div class="footerItem">
            <p>friends</p>
        </div>
        <div class="friendsList">
            <!-- 后续这里需要改为响应式，需要有对应的工具来访问 -->
            <div class="friend">
                <div class="info">
                    <div class="icon">💡</div>
                    <div class="name">ray</div>
                </div>
                <div class="status">
                     github
                </div>
            </div>
            <div class="friend">
                <div class="info">
                    <div class="icon">🍟</div>
                    <div class="name">bolaxious</div>
                </div>
                <div class="status">
                    it's me
                </div>
            </div>
            <div class="friend">
                <div class="info">
                    <div class="icon">✝️</div>
                    <div class="name">bishop</div>
                </div>
                <div class="status">
                     github
                </div>
            </div>
            <div class="friend">
                <div class="info">
                    <div class="icon">🦫</div>
                    <div class="name">capybara</div>
                </div>
                <div class="status">
                    blog developing
                </div>
            </div>
            <div class="friend">
                <div class="info">
                    <div class="icon">🌋</div>
                    <div class="name">volcano</div>
                </div>
                <div class="status">
                    blog not working
                </div>
            </div>
            <div class="friend">
                <div class="info">
                    <div class="icon">🍊</div>
                    <div class="name">orange juice</div>
                </div>
                <div class="status">
                     github
                </div>
            </div>
            <div class="friend">
                <div class="info">
                    <div class="icon">🥣</div>
                    <div class="name">bowl</div>
                </div>
                <div class="status">
                     github
                </div>
            </div>
            <div class="friend">
                <div class="info">
                    <div class="icon">🥤</div>
                    <div class="name">Coke</div>
                </div>
                <div class="status">
                    https://blog.raxskle.fun
                </div>
            </div>
            <div class="friend">
                <div class="info">
                    <div class="icon">🍚</div>
                    <div class="name">rice</div>
                </div>
                <div class="status">
                    ?
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Ucards from "../components/Ucards.vue"
</script>

<style lang="less" scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
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

hr {
    margin: 5vh;
}

.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .footerItem {
        font-family: Monoton;
        font-size: 1.5vw;
        color: #414af9;
        margin-right: 5vw;
    }

    .friendsList {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 1vw;
        height: 50vh;
        width: 100%;
        background: linear-gradient(37deg, #2ed878, #234da7, #dc1a8e, #f38406);
        background-size: 400% 400%;
        animation: gradientAnimation 15s ease infinite;
        border-radius: 1vw;
        padding: 3vw;
        box-shadow: 0px 0px 10px #000000;

        @keyframes gradientAnimation {
            0% {
                background-position: 0% 50%;
            }

            50% {
                background-position: 100% 50%;
            }

            100% {
                background-position: 0% 50%;
            }
        }

        .friend {
            width: 90%;
            border-radius: 15px;
            padding: 1vw;
            background-color: rgba(0, 0, 0, 0.315);

            .info {
                background-color: rgba(0, 0, 0, 0);
                display: flex;
                justify-content: baseline;
                align-items: center;

                .icon {
                    background-color: rgba(0, 0, 0, 0);
                    font-size: 2.5vw;
                }

                .name {
                    background-color: rgba(0, 0, 0, 0);
                    font-size: 1vw;
                    font-family: Monoton;
                    color: #ffffff;
                }
            }

            .status {
                margin-left: 10%;
                margin-top: 2vh;
                background-color: rgba(0, 0, 0, 0);
                font-size: 1vw;
                font-family: Jose;
                color: #2bff00;
            }
        }
    }

}
</style>