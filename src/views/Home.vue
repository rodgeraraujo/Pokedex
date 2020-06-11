<template>
    <layout name="LayoutDefault">
        <div v-if="!isLoading">
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
    </layout>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_POKEMON } from "@/store/type/actions";

import Layout from "@/layouts/Layout";
import PokemonCard from "@/components/PokemonCard";

export default {
    name: "Home",
    components: {
        PokemonCard,
        Layout
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
</style>