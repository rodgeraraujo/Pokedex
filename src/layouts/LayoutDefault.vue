<template>
    <div class="LayoutDefault">
        <nav class="LayoutDefault__nav">
            <router-link to="/">Home</router-link>|
            <router-link to="/pokemon">About</router-link>
        </nav>
        <main class="LayoutDefault__main">
            <slot />
        </main>
        <footer class="LayoutDefault__footer">&copy; Awesome Company</footer>
    </div>
</template>
<script>
export default {
    name: `LayoutDefault`
};
</script>
<style>
.LayoutDefault {
    max-width: 42em;
    margin-right: auto;
    margin-left: auto;
    padding-right: 1em;
    padding-left: 1em;
}
.LayoutDefault__nav {
    padding-top: 1em;
    padding-bottom: 1em;
    border-bottom: 1px solid #c0c0c0;
}
.LayoutDefault__main {
    padding-top: 1.5em;
    padding-bottom: 2em;
}
.LayoutDefault__footer {
    padding-top: 1em;
    padding-bottom: 1em;
    border-top: 1px solid #c0c0c0;
}
</style>