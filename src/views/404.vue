<template>
    <div class="box">
        <div class="box-pikachu">
            <img src="@img/404.png" alt />
        </div>
        <div class="box-description">
            <div class="box-description-container">
                <div class="box-description-title">Uh-oh!</div>
                <div class="box-description-text">You look lost on your journey.</div>
            </div>

            <router-link class="clean-link box-button" to="/">
                <strong>← Go back home</strong>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scooped>
* {
    box-sizing: border-box;
}
.box {
    color: black;
    width: 630px;
    max-height: 600px;
    min-height: 450px;
    background: #f9f9f9;
    border-radius: 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.box .box-pikachu {
    padding: 15px 25px 25px;
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -30%);
}

.box .box-pikachu img {
    display: block;
    border: 0;
    width: 200px;
    height: auto;
}
.box .box-pikachu .symbol:nth-child(1) {
    opacity: 0.2;
    animation: shine 4s ease-in-out 3s infinite;
}
.box .box-description {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
}
.box .box-description .box-description-container {
    color: #fff;
    text-align: center;
    width: 200px;
    font-size: 16px;
    margin: 0 auto;
}
.box .box-description .box-description-container .box-description-title {
    font-size: 24px;
    color: black;
    letter-spacing: 0.5px;
}
.box .box-description .box-description-container .box-description-text {
    color: #8c8aa7;
    line-height: 20px;
    margin-top: 20px;
}
.box .box-description .box-button {
    display: block;
    position: relative;
    background: #8589ac;
    border: 1px solid transparent;
    border-radius: 50px;
    height: 50px;
    text-align: center;
    text-decoration: none;
    color: #fff;
    line-height: 50px;
    font-size: 18px;
    padding: 0 70px;
    white-space: nowrap;
    margin-top: 25px;
}

.box .box-description .box-button:hover {
    border-color: #fff;
}

@media (max-width: 645px) {
    .box {
        width: 430px;
    }
}

@media (max-width: 360px) {
    .box {
        width: 330px;
    }
}
</style>