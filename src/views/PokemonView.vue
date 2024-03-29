<template>
    <layout name="LayoutDefault">
        <div class="pokemon-container">
            <div class="wrapper" v-if="pokemonDetails">
                <div class="pokemon-card pokemon">
                    <div
                        class="card-image card-image--pokemon"
                        :style="{ 'background-color': cardBg }"
                    >
                        <img
                            @load="cardBackground()"
                            crossorigin="anonymous"
                            ref="picture"
                            :src="`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${(getPokemonId())}.png`"
                            alt="pokemon"
                        />
                    </div>
                    <div
                        class="card-level card-level--pokemon"
                    >#{{ getPokemonId() }}</div>
                    <div class="unit-name">{{pokemonDetails.name}}</div>
                    <ul class="types">
                        <TypeBadge
                            v-for="(t, index) in pokemonDetails.types"
                            :key="index"
                            :type="t.type"
                        />
                    </ul>

                    <div class="mass">
                        <div class="weight">
                            <p>{{pokemonWeight}} kg</p>
                            <p>weight</p>
                        </div>
                        <div class="height">
                            <p>{{pokemonHeight}} m</p>
                            <p>height</p>
                        </div>
                    </div>

                    <div class="unit-description">
                        <PokeDescription :pokemonName="pokemonDetails.name" />
                    </div>
                    <hr />

                    <div class="row">
                        <div class="column">
                            <h3 class="stats-title">Stats</h3>
                            <StatsBar
                                :stats="pokemonDetails.stats"
                                :baseExp="pokemonDetails.base_experience"
                            />
                        </div>
                        <div class="column">
                            <div class="unit-abilities">
                                <h3 class="stats-title">Abilities</h3>
                                <ul v-for="(a, index) in pokemonDetails.abilities" :key="index">
                                    <li
                                        class="pokemon-ability"
                                        :style="{ 'background-color': cardBg, borderRadius: '5px', color: 'white', width: '100%' }"
                                    >{{a.ability.name.replace("-"," ")}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />

                    <div class="unit-stats unit-stats--pokemon clearfix">
                        <div class="one-third">
                            <div class="stat">{{pokemonDetails.stats[0].base_stat}}</div>
                            <div class="stat-value">{{pokemonDetails.stats[0].stat.name}}</div>
                        </div>

                        <div class="one-third">
                            <div class="stat">{{pokemonDetails.stats[1].base_stat}}</div>
                            <div class="stat-value">atk</div>
                        </div>

                        <div class="one-third no-border">
                            <div class="stat">{{pokemonDetails.stats[2].base_stat}}</div>
                            <div class="stat-value">def</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrapper" v-else>
                <div class="pokemon-notfound" v-if="pokemon4o4">
                    <div class="pokemon-404">
                        <img src="@img/404.png" alt="error 404" />
                    </div>

                    <h3 class="notfound-title">No pokemon was found for "{{$route.params.name}}".</h3>

                    <router-link class="clean-link button-notfound" to="/">
                        <strong>← Go back home</strong>
                    </router-link>
                </div>
            </div>
        </div>
    </layout>
</template>

<script>
import ColorThief from "colorthief";

// import { PokemonDescriptionService } from "@/services/api";
import { FETCH_POKEMON_DESCRIPTION } from "@/store/type/actions";

import conversions from "@/util/units";
import { formatingPokemonId } from "@/util";

import Layout from "@/layouts/Layout";

import TypeBadge from "@/components/TypeBadge";
import StatsBar from "@/components/StatsBar";
import PokeDescription from "@/components/PokemonDescription";

export default {
    name: "Pokemon",
    title: "Pokemon Description",
    components: {
        Layout,
        TypeBadge,
        StatsBar,
        PokeDescription
    },
    data() {
        return {
            pokemonWeight: null,
            pokemonHeight: null,
            cardBg: "",
            pokemon4o4: false
        };
    },
    computed: {
        pokemonDetails() {
            return this.$store.state.pokemon.pokemonDescription;
        },
        isPokemon() {
            return this.$store.state.pokemon.isPokemon;
        }
    },
    beforeMount() {
        this.$store
            .dispatch(FETCH_POKEMON_DESCRIPTION, this.$route.params.name)
            .then(() => {
                this.convertUnits(
                    this.pokemonDetails.weight,
                    this.pokemonDetails.height
                );
            })
            .catch(err => {
                this.pokemon4o4 = true;
                console.log(err);
            });
    },
    methods: {
        cardBackground() {
            const colorThief = new ColorThief();
            var color = colorThief.getColor(this.$refs["picture"]);
            this.cardBg = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
            return this;
        },
        convertUnits(weight, height) {
            this.pokemonWeight = conversions.functions.converter(
                "area",
                "decimeter",
                "meter",
                weight
            );

            this.pokemonHeight = conversions.functions.converter(
                "mass",
                "hectogram",
                "kilogramm",
                height
            );
            return this;
        },
        getPokemonId() {
            return formatingPokemonId(this.pokemonDetails.id);
        }
    }
};
</script>

<style scooped>
*,
*:before,
*:after {
    box-sizing: border-box;
}
body {
    background-size: cover;
    font: 14px/20px "Lato", Arial, sans-serif;
    color: #9e9e9e;
    margin-top: 30px;
}

.stats-title {
    color: #2c3f51;
    font-size: 17px;
}
.column {
    float: left;
    width: 50%;
    padding: 10px;
    height: 300px;
}

.row:after {
    content: "";
    display: table;
    clear: both;
}

.pokemon-container {
    margin: auto;
    width: 700px;
    text-align: center;
}
.wrapper {
    padding-top: 65px;
    padding-bottom: 40px;
    /* flex: 0 1 calc(20% - 1em); */
    transition: opacity 1.5s;
    animation: 1s ease-out 0s 1 wrapperTransaction;
}

@keyframes wrapperTransaction {
    0% {
        transition: opacity 200ms linear 320ms;
        transform: 100ms ease-out 320ms;
        transform: translateY(30%);
    }
    100% {
        transform: translateX(0);
    }
}

.wrapper:focus {
    outline: 0;
}
.pokemon-notfound {
    background: #f9f9f9;
    width: 100%;
    height: 400px;
    display: inline-block;
    margin: auto;
    border-radius: 19px;
    position: relative;
    text-align: center;
    box-shadow: -1px 15px 30px -12px black;
    z-index: 9999;
}

.pokemon-notfound .pokemon-404 img {
    position: absolute;
    display: block;
    border: 0;
    left: 255px;
    top: 55px;
    width: 200px;
    height: auto;
}

.notfound-title {
    position: absolute;
    left: 200px;
    top: 150px;
    color: #2c3f51;
    font-size: 17px;
}

.button-notfound {
    display: block;
    position: relative;
    height: 50px;
    top: 250px;
    text-align: center;
    /* color: #fff; */
    line-height: 50px;
    font-size: 18px;
    padding: 0 70px;
    white-space: nowrap;
}

.button-notfound:hover {
    border-color: #fff;
}

.pokemon-card {
    background: white;
    width: 100%;
    display: inline-block;
    margin: auto;
    border-radius: 19px;
    position: relative;
    text-align: center;
    box-shadow: -1px 15px 30px -12px black;
    /* z-index: 9999; */
}
.card-image {
    position: relative;
    height: 230px;
    margin-bottom: 35px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
}
.card-image--pokemon {
    background: url(../assets/images/poke-bg.png);
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: -10% 90%;
    border: 1px solid white;
}
.card-image--pokemon img {
    width: 300px;
    position: absolute;
    top: -55px;
    left: -9px;
}
.card-level {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 3px;
}
.card-level--pokemon {
    color: #ec9b3b;
}

.unit-name {
    font-size: 26px;
    color: black;
    font-weight: 900;
    margin-bottom: 5px;
}
.unit-description {
    padding: 20px;
    margin-bottom: 10px;
}
.unit-stats--pokemon {
    background: #737a81;
}
.unit-stats--pokemon .one-third {
    border-right: 1px solid #44484c;
}

.unit-stats {
    color: white;
    font-weight: 700;
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
}
.unit-stats .one-third {
    width: 33%;
    float: left;
    padding: 20px 15px;
}
.unit-stats sup {
    position: absolute;
    bottom: 4px;
    font-size: 45%;
    margin-left: 2px;
}
.unit-stats .stat {
    position: relative;
    font-size: 24px;
    margin-bottom: 10px;
}
.unit-stats .stat-value {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 12px;
}
.unit-stats .no-border {
    border-right: none;
}

.unit-abilities {
    font-weight: 700;
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
}

.clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
}

.mass {
    display: flex;
    align-items: center;
    justify-content: center;
}

.mass p {
    color: gray;
    font-size: 15px;
    margin-bottom: -15px;
}

.mass .weight {
    padding-right: 40px;
}

.mass p:first-of-type {
    color: #334750;
    font-weight: 700;
    margin-top: 0;
}

.mass p:last-of-type {
    color: #68818c;
    margin-bottom: 5px;
}

@media (max-width: 630px) {
    .pokemon-container {
        margin: auto;
        width: 100%;
    }

    .card-image--pokemon {
        background-size: 80%;
        background-position: -10% 1%;
    }

    .pokemon-notfound .pokemon-404 img {
        left: 90px;
        top: 55px;
    }

    .notfound-title {
        left: 35px;
        top: 150px;
    }
}
</style>
