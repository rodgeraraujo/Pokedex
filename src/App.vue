<template>
    <div id="app">
        <div v-if="!isLoading">
            <p>pokedex</p>
            <p>pokemon counter: {{pokemonCount}}</p>
            <div class="cards">
                <div v-for="(p, index) in pokemon" :key="index">
                    <ul>
                        <li>{{p.name}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_POKEMON } from "@/store/type/actions";

export default {
    name: "App",
    computed: {
        ...mapGetters(["pokemonCount", "isLoading", "pokemon"])
    },
    mounted() {
        this.fetchPokemon();
    },
    methods: {
        fetchPokemon() {
            this.$store.dispatch(FETCH_POKEMON);
        }
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
