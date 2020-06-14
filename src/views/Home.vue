<template>
    <layout name="LayoutDefault">
        <div class="card-container">
            <div class="cards" v-if="pokemon">
                <div v-for="(p, index) in pokemon" :key="index">
                    <router-link class="clean-link" :to="'/pokedex/'+ p.name">
                        <PokemonCard :pokemon="p" />
                    </router-link>
                </div>
            </div>
            <br />
            <!-- <button v-if="pokemon" :click="loadMoreProducts">load more</button> -->
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
            noMorePokemon: false
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
        },
        fetchPokemonQuery() {
            if (this.pokemon.length <= 807) {
                this.$store.dispatch(FETCH_POKEMON_QUERY, {
                    offset: this.pokemon.length,
                    limit: 20
                });
                console.log(this.$store.state.pokemon);
            } else {
                this.noMorePokemon = true;
            }
        },
        scroll() {
            setTimeout(() => {
                let bottomOfWindow;
                window.onscroll = () => {
                    bottomOfWindow =
                        document.documentElement.scrollTop +
                            window.innerHeight ===
                        document.documentElement.offsetHeight;
                    if (bottomOfWindow) {
                        this.fetchPokemonQuery();
                    }
                };

                window.ontouchmove = () => {
                    bottomOfWindow =
                        document.documentElement.scrollTop +
                            window.innerHeight ===
                        document.documentElement.offsetHeight;
                    if (bottomOfWindow) {
                        this.fetchPokemonQuery();
                    }
                };
            }, 1000);
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
.card-container {
    position: relative;
    top: 15px;
    min-height: 500px;
}
</style>