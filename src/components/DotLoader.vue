<template>
    <div id="page-loading">
        <div class="three-balls">
            <div class="ball ball1"></div>
            <div class="ball ball2"></div>
            <div class="ball ball3"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DotLoader"
};
</script>

<style>
#page-loading {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
    background-color: #f5f5f5;
}

.three-balls {
    margin: 0 auto;
    width: 70px;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 45%;
}

.three-balls .ball {
    position: relative;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    display: inline-block;
    -webkit-animation: bouncedelay 2s infinite
        cubic-bezier(0.62, 0.28, 0.23, 0.99) both;
    animation: bouncedelay 2s infinite cubic-bezier(0.62, 0.28, 0.23, 0.99) both;
}

.three-balls .ball1 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
}

.three-balls .ball2 {
    -webkit-animation-delay: -0.08s;
    animation-delay: -0.08s;
}

@keyframes bouncedelay {
    0% {
        bottom: 0;
        background-color: #03a9f4;
    }
    16.66% {
        bottom: 40px;
        background-color: #fb6542;
    }
    33.33% {
        bottom: 0px;
        background-color: #fb6542;
    }
    50% {
        bottom: 40px;
        background-color: #ffbb00;
    }
    66.66% {
        bottom: 0px;
        background-color: #ffbb00;
    }
    83.33% {
        bottom: 40px;
        background-color: #03a9f4;
    }
    100% {
        bottom: 0;
        background-color: #03a9f4;
    }
}

@-webkit-keyframes bouncedelay {
    0% {
        bottom: 0;
        background-color: #03a9f4;
    }
    16.66% {
        bottom: 40px;
        background-color: #fb6542;
    }
    33.33% {
        bottom: 0px;
        background-color: #fb6542;
    }
    50% {
        bottom: 40px;
        background-color: #ffbb00;
    }
    66.66% {
        bottom: 0px;
        background-color: #ffbb00;
    }
    83.33% {
        bottom: 40px;
        background-color: #03a9f4;
    }
    100% {
        bottom: 0;
        background-color: #03a9f4;
    }
}
</style>