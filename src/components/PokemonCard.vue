<template>
    <div class="cards">
        <div class="card-animation">
            <div class="card fade" v-if="pokemonDetails">
                <div class="image ripple" :style="{ 'background-color': pokemonColor }">
                    <!-- <span class="pokemon-number">#{{ ('000'+pokemonDetails.id).slice(-'000'.length)}}</span> -->
                    <img
                        class="zoom-in"
                        crossorigin="anonymous"
                        ref="picture"
                        width="10"
                        :alt="pokemonDetails.name"
                        @load="adaptativeBackground()"
                        :src="`https://pokeres.bastionbot.org/images/pokemon/${ pokemonDetails.id }.png`"
                    />
                    <figcaption>
                        <strong>{{ pokemonDetails.name }}</strong>
                    </figcaption>
                </div>
                <ul class="types">
                    <TypeBadge
                        v-for="(t, index) in pokemonDetails.types"
                        :key="index"
                        :type="t.type"
                    />
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import ColorThief from "colorthief";

import { PokemonDescriptionService } from "@/services/api";

import TypeBadge from "@/components/TypeBadge";

export default {
    name: "PokemonCard",
    components: {
        TypeBadge
    },
    props: ["pokemon"],
    data() {
        return {
            pokemonDetails: null,
            pokemonColor: "",
            renderComponent: false
        };
    },
    mounted() {
        this.fetchPokemonDetails();
    },
    methods: {
        async fetchPokemonDetails() {
            await PokemonDescriptionService.get(this.pokemon.name)
                .then(({ data }) => {
                    this.pokemonDetails = data;
                })
                .catch(error => {
                    throw new Error(error);
                });
        },
        adaptativeBackground() {
            const colorThief = new ColorThief();
            var color = colorThief.getColor(this.$refs["picture"]);
            this.pokemonColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
            this.renderComponent = true;
        }
    }
};
</script>

<style>
figcaption {
    position: unset;
    color: white;
    text-shadow: #2b303a 0px 0px 1px;
    -webkit-font-smoothing: antialiased;
    line-height: 1.6;
    top: 1%;
    bottom: 0;
}

.card-animation {
    height: 280px;
}

.image {
    width: 235px;
    height: 235px;
    background-color: #9194b0;
    color: #e1ede7;
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 0 10px;
    margin-bottom: -48px;
    position: relative;
    display: grid;
    overflow: hidden;
    -webkit-box-shadow: -1px 4px 10px -3px rgba(0, 0, 0, 0.44);
    -moz-box-shadow: -1px 4px 10px -3px rgba(0, 0, 0, 0.44);
    box-shadow: -1px 4px 10px -3px rgba(0, 0, 0, 0.44);
    transition: 0.3s;
}

.image img {
    /* position: absolute; */
    max-width: 500px;
    width: 200px;
    max-height: 500px;
    height: 200px;
}

img {
    display: block;
    border: 0;
    width: 100%;
    height: auto;
}

.card {
    width: 235px;
    cursor: pointer;
    border-radius: 10px;
    transition: 0.5s;
    background: #7e83a8;
    margin-bottom: 2em;
}

.card a {
    color: black;
    text-decoration: none;
}

.image:hover {
    margin-bottom: 2px;
}
.card:hover {
    border-radius: 10px;
    transition: 0.5s;
}

.card-content {
    padding: 1.4em;
}

.card-content p {
    font-size: 80%;
}

.cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    text-align: center;
}

.card {
    flex: 0 1 calc(20% - 1em);
    transition: opacity 1.5s;
    animation: 1s ease-out 0s 1 cardTransition;
}

.pokemon-number {
    position: absolute;
    top: 12px;
    left: 180px;
    font-size: 15px;
    font-weight: 700;
    color: white;
    text-shadow: #2b303a 0px 1px 1px;
    line-height: 1.6;
}

@keyframes cardTransition {
    0% {
        transform: 200ms ease-out 320ms;
        transform: translateX(-50%);
    }
    100% {
        transform: translateX(0);
    }
}

@media (max-width: 500px) {
    .image {
        width: 150px;
        height: 150px;
    }

    .image img {
        width: 130px;
        height: 130px;
    }

    .cards {
        grid-template-columns: repeat(2, 1fr);
    }

    .card-animation {
        height: 200px;
    }
    .card {
        width: 150px;
    }

    .image {
        margin-bottom: 2px;
    }
}
</style>