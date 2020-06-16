<template>
    <layout name="LayoutDefault">
        <div id="container" class="card-container">
            <div class="cards" v-if="pokemon">
                <div v-for="(p, index) in pokemon" :key="index">
                    <router-link class="clean-link" :to="'/pokedex/'+ p.name" :name="p.name">
                        <PokemonCard :pokemon="p" />
                    </router-link>
                </div>
            </div>
            <div class="button-container">
                <button
                    id="loadButton"
                    v-if="pokemon != null"
                    v-on:click="loadMorePokemon"
                >{{loadMoreText}}</button>
            </div>
        </div>
    </layout>
</template>

<script>
import { FETCH_POKEMON, FETCH_POKEMON_QUERY } from "@/store/type/actions";

import Layout from "@/layouts/Layout";
import PokemonCard from "@/components/PokemonCard";

export default {
    name: "Home",
    title: "Home",
    components: {
        PokemonCard,
        Layout
    },
    data() {
        return {
            noMorePokemon: false,
            pokeCount: 0,
            loadMoreText: ""
        };
    },
    computed: {
        pokemon() {
            return this.$store.state.pokemon.pokemonList;
        }
    },
    created() {
        this.loadMoreText = "Load more.";
    },
    beforeMount() {
        this.$store.dispatch(FETCH_POKEMON);
    },
    mounted() {
        this.scroll(this.pokemon);
    },
    methods: {
        loadPokemon() {
            if (this.pokemon.length >= 807) {
                this.noMorePokemon = true;
                return;
            }

            this.$store.dispatch(FETCH_POKEMON_QUERY, {
                offset: this.pokemon.length,
                limit: 20
            });
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
                        this.loadMorePokemon();
                    }
                };
            }, 1000);
        },
        async loadMorePokemon() {
            var button = document.querySelector("#loadButton");

            this.loadMoreText = "Load more ↓";

            if (this.pokemon.length >= 807) {
                this.loadMoreText = "No more pokemon to load :)";
                return;
            }

            button.classList.add("load");

            this.$store
                .dispatch(FETCH_POKEMON_QUERY, {
                    offset: this.pokemon.length,
                    limit: 20
                })
                .then(() => {
                    if (this.pokemon.length >= 807) {
                        this.noMorePokemon = true;
                        return;
                    }
                });

            setTimeout(function() {
                button.classList.remove("load");
            }, 1000);
        }
    }
};
</script>

<style>
.button-container {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
}
button {
    border: 0 none;
    background: #8589ac;
    font-size: 15px;
    padding: 10px;

    border-radius: 50px;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
}
button:hover,
button:focus {
    outline: 0;
    background: #8589ac;
}
button:before {
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border-radius: 50%;
    border: 0 none;
    margin-right: 0;
    transition: all 0.5s;
}
button.load:before {
    width: 20px;
    height: 20px;
    border: 2px solid #8589ac;
    border-top-color: white;
    margin-right: 10px;
    animation: rotating 1s infinite;
}
@keyframes rotating {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

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