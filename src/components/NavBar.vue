<template>
    <div>
        <div class="nav">
            <input type="checkbox" id="nav-check" />
            <div class="nav-header">
                <div class="nav-title">
                    <img
                        style="width:100px; margin-left: -500px"
                        src="https://cdn.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png"
                        alt="Pokedex"
                    />
                </div>
            </div>
            <div class="nav-btn">
                <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div class="nav-links">
                <router-link to="/">Home</router-link>
                <router-link to="github">Github</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavBar"
};
</script>

<style scoped>
.nav {
    border-radius: 10px;
    height: 50px;
    width: 100%;
    background-color: #6c739b;
    position: relative;
}

.nav > .nav-header {
    display: inline;
}

.nav > .nav-header > .nav-title {
    display: inline-block;
    font-size: 22px;
    color: #fff;
    padding: 10px 10px 10px 10px;
}

.nav > .nav-btn {
    display: none;
}

.nav > .nav-links {
    display: inline;
    float: right;
    font-size: 18px;
}

.nav > .nav-links > a {
    display: inline-block;
    padding: 13px 10px 13px 10px;
    text-decoration: none;
    color: #efefef;
}

.nav > .nav-links > a:hover {
    position: relative;
    padding: 10px;
    padding: 10px;
    border-radius: 10px;

    background-color: #5e679b;
}

.nav > #nav-check {
    display: none;
}

@media (max-width: 600px) {
    .nav > .nav-btn {
        display: inline-block;
        position: absolute;
        right: 0px;
        top: 0px;
    }
    .nav > .nav-btn > label {
        display: inline-block;
        width: 50px;
        height: 50px;
        padding: 13px;
    }
    .nav > .nav-btn > label:hover,
    .nav #nav-check:checked ~ .nav-btn > label {
        border-radius: 10px;
        height: 24px;
        background-color: #5e679b;
    }
    .nav > .nav-btn > label > span {
        display: block;
        width: 25px;
        height: 10px;
        border-top: 2px solid #eee;
    }
    .nav > .nav-links {
        border-radius: 10px;
        position: absolute;
        display: block;
        width: 100%;
        height: 50px;
        background-color: #5e679b;
        height: 0px;
        transition: all 0.3s ease-in;
        overflow-y: hidden;
        top: 50px;
        left: 0px;
        z-index: 1;
    }
    .nav > .nav-links > a {
        display: block;
        width: 100%;
    }
    .nav > #nav-check:not(:checked) ~ .nav-links {
        height: 0px;
    }
    .nav > #nav-check:checked ~ .nav-links {
        height: calc(100vh - 50px);
        overflow-y: auto;
    }
}
</style>