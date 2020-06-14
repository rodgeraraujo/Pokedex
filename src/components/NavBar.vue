<template>
    <nav class="navbar">
        <span class="navbar-toggle" id="js-navbar-toggle">
            <div class="nav-btn">
                <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
        </span>
        <a href="#" class="logo">Pokedex!</a>
        <ul class="main-nav" id="js-menu">
            <li>
                <router-link class="nav-links" to="/">Home</router-link>
            </li>
            <li>
                <router-link class="nav-links" to="/github">Github</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
    mounted() {
        this.toggleMeny();
    },
    methods: {
        toggleMeny() {
            let mainNav = document.getElementById("js-menu");
            let navBarToggle = document.getElementById("js-navbar-toggle");

            navBarToggle.addEventListener("click", function() {
                mainNav.classList.toggle("active");
            });
        }
    }
};
</script>

<style scoped>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body {
    font-family: "Josefin Sans", sans-serif;
}

.navbar {
    font-size: 18px;
    background: #4a4d68;
    border-radius: 10px;
    border: 1px solid #3a3f68;
    padding-bottom: 10px;
}

.main-nav {
    list-style-type: none;
    display: none;
}

.nav-links,
.logo {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
}

.main-nav li {
    text-align: center;
    margin: 15px auto;
}

.logo {
    display: inline-block;
    font-size: 22px;
    margin-top: 10px;
    margin-left: 20px;
}

.navbar-toggle {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
    font-size: 24px;
}

.active {
    display: block;
}

.navbar-toggle > .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 16px;
}
.navbar-toggle > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
}

.navbar-toggle > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
}

@media screen and (min-width: 630px) {
    .navbar {
        display: flex;
        justify-content: space-between;
        padding-bottom: 0;
        height: 70px;
        align-items: center;
    }

    .main-nav {
        display: flex;
        margin-right: 30px;
        flex-direction: row;
        justify-content: flex-end;
    }

    .main-nav li {
        margin: 0;
    }

    .nav-links {
        margin-left: 40px;
    }

    .logo {
        margin-top: 0;
    }

    .navbar-toggle {
        display: none;
    }

    .logo:hover,
    .nav-links:hover {
        color: rgba(255, 255, 255, 1);
    }
}
</style>