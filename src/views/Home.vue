<template>
    <layout name="LayoutDefault">
        <div v-if="!isFetched">
            Loading Please wait...
            <DotLoader />
        </div>
        <div v-else>
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
import { FETCH_POKEMON, FETCH_POKEMON_QUERY } from "@/store/type/actions";

import Layout from "@/layouts/Layout";
import PokemonCard from "@/components/PokemonCard";
import DotLoader from "@/components/DotLoader";

export default {
    name: "Home",
    components: {
        PokemonCard,
        Layout,
        DotLoader
    },
    data() {
        return {
            isFetched: false,
            pokemonList: [],
            search: ""
        };
    },
    computed: {
        ...mapGetters(["pokemonCount", "isLoading", "pokemon"])
    },
    mounted() {
        this.scroll(this.pokemon);
    },
    methods: {
        fetchPokemon() {
            this.$store.dispatch(FETCH_POKEMON);
            this.pokemonList = this.pokemon;

            setTimeout(() => (this.isFetched = true), 1000);
        },
        fetchPokemonQuery() {
            this.$store.dispatch(FETCH_POKEMON_QUERY, {
                offset: this.pokemon.length,
                limit: 20
            });
            console.log(this.$store.state.pokemon);
        },
        scroll() {
            let bottomOfWindow;
            window.onscroll = () => {
                bottomOfWindow =
                    document.documentElement.scrollTop + window.innerHeight ===
                    document.documentElement.offsetHeight;
                if (bottomOfWindow) {
                    this.fetchPokemonQuery();
                }
            };

            window.ontouchmove = () => {
                bottomOfWindow =
                    document.documentElement.scrollTop + window.innerHeight ===
                    document.documentElement.offsetHeight;
                if (bottomOfWindow) {
                    this.fetchPokemonQuery();
                }
            };
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
    },
    beforeMount() {
        this.fetchPokemon();
    }
};
</script>

<style>
</style>