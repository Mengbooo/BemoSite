<template>
    <div class="loading"></div>
</template>

<script setup name="loading">

</script>

<style scoped>
.loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    perspective: 200px;
}

.loading:before,
.loading:after {
    position: absolute;
    width: 20px;
    height: 20px;
    content: "";
    animation: jumping 0.5s infinite alternate;
    background: rgba(255, 255, 255, 0);
}

.loading:before {
    left: 0;
}

.loading:after {
    right: 0;
    animation-delay: 0.15s;
}

@keyframes jumping {
    0% {
        transform: scale(1) translateY(0px) rotateX(0deg);
        box-shadow: 0 0 0 rgba(235, 0, 0, 0);
    }

    100% {
        transform: scale(1.2) translateY(-25px) rotateX(45deg);
        background: #03c192;
        box-shadow: 0 25px 40px #03c192d2;
    }
}
</style>
