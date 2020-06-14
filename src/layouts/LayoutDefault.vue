<template>
    <div class="LayoutDefault">
        <NavBar />
        <main class="LayoutDefault-main">
            <keep-alive include="home">
                <slot />
            </keep-alive>
        </main>
        <br />
        <br />
        <footer class="LayoutDefault-footer">
            Pokedex! &copy;
            <a class="clean-link" href="https://rogerioaraujo.me">Rogério Araújo</a>
        </footer>
    </div>
</template>
<script>
import NavBar from "@/components/NavBar";
export default {
    name: `LayoutDefault`,
    components: {
        NavBar
    }
};
</script>
<style>
.LayoutDefault-nav {
    color: white;
    padding-top: 1em;
    padding-bottom: 1em;
    border-bottom: 1px solid #c0c0c0;
}
.LayoutDefault-nav router-link {
    color: whitesmoke;
}
.LayoutDefault-footer {
    color: white;
    padding-top: 1em;
    padding-bottom: 1em;
    font-weight: bold;
    text-align: center;
    border-top: 1px solid #c0c0c0;
}

.LayoutDefault-footer a:hover {
    color: #444868;
}
</style>