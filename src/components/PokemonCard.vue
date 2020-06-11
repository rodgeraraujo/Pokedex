<template>
    <div class="cards">
        <div class="card">
            <div class="image">
                <img
                    crossorigin="anonymous"
                    ref="picture"
                    width="100"
                    :src="`https://pokeres.bastionbot.org/images/pokemon/${pokemonId + 1}.png`"
                />
                <br />
                <br />
                {{ pokemon.name }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PokemonCard",
    props: ["pokemon", "pokemonId"]
};
</script>

<style scoped>
.image {
    color: #e1ede7;
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 10px;
    margin: 5px 0;
    position: relative;
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
    width: 90%;
    height: auto;
}

.card {
    background: white;
    margin-bottom: 2em;
}

.card a {
    color: black;
    text-decoration: none;
}

.card a:hover {
    box-shadow: 3px 3px 8px hsl(0, 0%, 80%);
}

.card-content {
    padding: 1.4em;
}

.card-content h2 {
    margin-top: 0;
    margin-bottom: 0.5em;
    font-weight: bold;
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
</style>