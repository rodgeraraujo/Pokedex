<template>
    <div id="app">
        <component :is="layout">
            <router-view :layout.sync="layout" />
        </component>
    </div>
</template>

<script>
export default {
    name: `App`,
    data() {
        return {
            layout: `div`
        };
    }
};
</script>

<style>
body {
    background-color: #b0b4ca;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    /* margin-top: 20px; */
}
</style>
