<template>
    <layout name="LayoutDefault">
        <div>
            <input
                type="text"
                v-model.trim="search"
                placeholder="Search pokemon..."
                @keyup="getPokemonList"
            />
            <br />
            <br />

            <div class="cards" v-if="pokemonList">
                <div v-for="(p, index) in pokemonList" :key="index">
                    <router-link class="clean-link" :to="'/pokemon/'+ p.name">
                        <div :ref="p.name">
                            <PokemonCard :key="componentKey" :pokemon="p" />
                        </div>
                    </router-link>
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

export default {
    name: "Home",
    components: {
        PokemonCard,
        Layout
    },
    data() {
        return {
            pokemonList: [],
            search: "",
            componentKey: 0
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
        },
        getPokemonList() {
            if (this.search) {
                this.pokemonList = this.pokemon.filter(p =>
                    p.name.toLowerCase().includes(this.search.toLowerCase())
                );
                this.forceRerender();
            } else {
                this.pokemonList = this.pokemon;
            }
        },
        forceRerender() {
            this.componentKey += 1;
        }
    },
    beforeMount() {
        this.fetchPokemon();
    }
};
</script>

<style>
.clean-link {
    color: inherit;
    text-decoration: inherit;
}
</style>