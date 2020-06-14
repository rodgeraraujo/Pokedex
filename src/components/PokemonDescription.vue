<template>
    <section v-if="pokemonSpecie">
        <article class="flavor is-dark">
            <div class="flavor-body">
                <p class="flavor-text">{{getRandomDescription()}}</p>
            </div>
        </article>
    </section>
</template>

<script>
import { mapGetters } from "vuex";

import { FETCH_POKEMON_SPECIES } from "@/store/type/actions";

export default {
    name: "PokemonDescription",
    props: ["pokemonName"],
    computed: {
        ...mapGetters(["pokemonSpecie"])
    },
    beforeMount() {
        this.fetchPokemonSpecie(this.pokemonName);
    },
    methods: {
        fetchPokemonSpecie(slug) {
            this.$store.dispatch(FETCH_POKEMON_SPECIES, slug);
        },
        getRandomDescription() {
            if (this.pokemonSpecie === null) {
                return;
            }

            var flavors = [],
                randomFlavor;

            this.pokemonSpecie.flavor_text_entries.forEach(flavor => {
                if (flavor.language.name === "en") flavors.push(flavor);
            });

            randomFlavor = flavors[Math.floor(Math.random() * flavors.length)];

            return randomFlavor.flavor_text;
        }
    }
};
</script>

<style scoped>
.flavor-body {
    width: 100%;
    border-radius: 5px;
}
.flavor.is-dark .flavor-body {
    border-left: 5px solid #363636;
    color: #2a2a2a;
    background-color: #d4d4d4;
}
.flavor-text {
    overflow: hidden;
    padding: 10px;
    color: #565656;
    font-size: 20px;
}
</style>