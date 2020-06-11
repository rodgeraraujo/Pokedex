<template>
    <div class="LayoutDefault">
        <NavBar />
        <main class="LayoutDefault__main">
            <slot />
        </main>
        <footer class="LayoutDefault__footer">&copy; Awesome Company</footer>
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
/* .LayoutDefault {
    max-width: 42em;
    margin-right: auto;
    margin-left: auto;
    padding-right: 1em;
    padding-left: 1em;
} */
.LayoutDefault__nav {
    color: white;
    padding-top: 1em;
    padding-bottom: 1em;
    border-bottom: 1px solid #c0c0c0;
}
.LayoutDefault__nav router-link {
    color: whitesmoke;
}
/* .LayoutDefault__main {
    padding-top: 1.5em;
    padding-bottom: 2em;
} */
.LayoutDefault__footer {
    color: white;
    padding-top: 1em;
    padding-bottom: 1em;
    border-top: 1px solid #c0c0c0;
}
</style>