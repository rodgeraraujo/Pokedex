<template>
    <div class="cards">
        <div class="card" v-if="isFetched">
            <div class="image" :style="{ 'background-color': pokemonColor }">
                <img
                    crossorigin="anonymous"
                    ref="picture"
                    width="10"
                    :src="`https://pokeres.bastionbot.org/images/pokemon/${ pokemonDetails.id }.png`"
                />
                <figcaption>#{{pokemonDetails.id}} - {{ pokemonDetails.name }}</figcaption>
            </div>
        </div>
    </div>
</template>

<script>
import ColorThief from "colorthief";

import { PokemonDescriptionService } from "@/services/api";

export default {
    name: "PokemonCard",
    props: ["pokemon"],
    data() {
        return {
            pokemonDetails: null,
            pokemonColor: "",
            isFetched: false
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
                    this.isFetched = true;
                })
                .catch(error => {
                    throw new Error(error);
                });

            this.adaptativeBackground();
            console.log(this.pokemonDetails);
        },
        adaptativeBackground() {
            const colorThief = new ColorThief();
            var color = colorThief.getColor(this.$refs["picture"]);
            this.pokemonColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        }
    }
};
</script>

<style>
figcaption {
    position: unset;
    text-shadow: -1px 3px 2px rgba(89, 85, 81, 0.18);
    line-height: 1.6;
    top: 1%;
    bottom: 0;
}

.image {
    width: 215px;
    height: 215px;
    color: #e1ede7;
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 2px;
    position: relative;
    display: grid;
    overflow: hidden;
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
    border-radius: 10px;
    transition: 0.5s;
    background: white;
    margin-bottom: 2em;
}

.card a {
    color: black;
    text-decoration: none;
}

.card:hover {
    border-radius: 10px;
    box-shadow: 3px 3px 8px;
    transition: 0.5s;
    -webkit-box-shadow: 3px 3px 8px;
    -moz-box-shadow: 3px 3px 8px;
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
    justify-content: space-between;
}

.card {
    flex: 0 1 calc(20% - 1em);
}

@media (max-width: 500px) {
    .image {
        width: 450px;
        height: 450px;
    }

    .image img {
        width: 450px;
        height: 450px;
    }

    .cards {
        /* margin: 10%; */
        /* width: 100%; */
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>