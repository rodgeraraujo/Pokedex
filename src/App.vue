<template>
    <div id="app">
        <div v-if="!isLoading">
            <p>pokedex</p>

            <p>pokemon counter: {{pokemonCount}}</p>
            <!-- <input
                type="text"
                v-model.trim="search"
                placeholder="Search pokemon..."
                @keyup="getPokemonList"
            />-->
            <br />
            <br />

            <div class="cards">
                <div v-for="(p, index) in pokemon" :key="index">
                    <PokemonCard :pokemon="p" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_POKEMON } from "@/store/type/actions";

import PokemonCard from "@/components/PokemonCard";

export default {
    name: "App",
    components: {
        PokemonCard
    },
    data() {
        return {
            pokemonList: [],
            search: ""
        };
    },
    computed: {
        ...mapGetters(["pokemonCount", "isLoading", "pokemon"])
    },
    mounted() {
        this.fetchPokemon();
    },
    methods: {
        fetchPokemon() {
            this.$store.dispatch(FETCH_POKEMON);
            this.pokemonList = this.pokemon;
        }
        // getPokemonList() {
        //     if (this.search) {
        //         this.pokemonList = this.pokemon.filter(p =>
        //             p.name.toLowerCase().includes(this.search.toLowerCase())
        //         );
        //         console.log(this.pokemonList);
        //     } else {
        //         this.pokemonList = this.pokemon;
        //     }
        // }
    }
};
</script>

<style>
body {
    background-color: #404667;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
