<template>
    <div>
        <header>
            <a class="logo" href="/">
                <img src="@img/pokedex.png" alt="logo" />
            </a>
            <nav>
                <ul class="nav-links">
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>

                    <li>
                        <router-link to="/generations">Generations</router-link>
                    </li>
                </ul>
            </nav>
            <router-link class="cta" to="/github">Github</router-link>
            <p class="menu cta">Menu</p>
        </header>
        <div class="overlay">
            <a class="close">&times;</a>
            <div class="overlay-content">
                <router-link to="/">Home</router-link>
                <router-link to="/generations">Generations</router-link>
                <router-link to="/github">Github</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    mounted() {
        this.toggleMenu();
    },
    methods: {
        toggleMenu() {
            const doc = document;
            const menuOpen = doc.querySelector(".menu");
            const menuClose = doc.querySelector(".close");
            const overlay = doc.querySelector(".overlay");

            menuOpen.addEventListener("click", () => {
                overlay.classList.add("overlay--active");
            });

            menuClose.addEventListener("click", () => {
                overlay.classList.remove("overlay--active");
            });
        }
    }
};
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10%;
    border-radius: 5px;
    background-color: #444868;
}

.logo {
    width: 145px;
    cursor: pointer;
}

.nav-links a,
.cta,
.overlay-content a {
    font-weight: bold;
    font-weight: 500;
    color: #edf0f1;
    text-decoration: none;
}

.nav-links {
    list-style: none;
    display: flex;
}

.nav-links li {
    padding: 0px 20px;
}

.nav-links li a {
    transition: color 0.3s ease 0s;
}

.nav-links li a:hover {
    color: #7c84be;
}

.cta {
    padding: 9px 25px;
    background-color: rgba(0, 136, 169, 1);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: background-color 0.3s ease 0s;
}

.cta:hover {
    background-color: rgba(0, 136, 169, 0.8);
}

/* mobile Nav */

.menu {
    display: none;
}

.overlay {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    background-color: #24252a;
    /* background-image: url(../assets/images/poke-bg.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 0 -10%; */
    overflow-x: hidden;
    transition: width 0.5s ease 0s;
}

.overlay--active {
    width: 100%;
}

.overlay-content {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.overlay a {
    padding: 15px;
    font-size: 36px;
    display: block;
    transition: color 0.3s ease 0s;
}

.overlay a:hover,
.overlay a:focus {
    color: #4f5479;
}
.overlay .close {
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 60px;
    color: #edf0f1;
}

@media screen and (max-height: 450px) {
    .overlay a {
        font-size: 20px;
    }
    .overlay .close {
        font-size: 40px;
        top: 15px;
        right: 35px;
    }
}

@media only screen and (max-width: 800px) {
    .nav-links,
    .cta {
        display: none;
    }
    .menu {
        display: initial;
    }
}
</style>