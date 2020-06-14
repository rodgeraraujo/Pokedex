<template>
    <div class="stats-bar">
        <h1>HP</h1>
        <div class="base-stats-bar">
            <div
                class="base-stats-percent"
                :style="{'background-color': '#FF5959',  width: `${stats[0].base_stat}px` }"
            >{{stats[0].base_stat}}/255</div>
        </div>
        <h1>Attack</h1>
        <div class="base-stats-bar">
            <div
                class="base-stats-percent"
                :style="{'background-color': '#F6AC78',  width: `${stats[1].base_stat}px` }"
            >{{stats[1].base_stat}}/255</div>
        </div>
        <h1>Defense</h1>
        <div class="base-stats-bar">
            <div
                class="base-stats-percent"
                :style="{'background-color': '#FAE078',  width: `${stats[2].base_stat}px` }"
            >{{stats[2].base_stat}}/255</div>
        </div>

        <h1>Sp. Attack</h1>
        <div class="base-stats-bar">
            <div
                class="base-stats-percent"
                :style="{'background-color': '#9DB7F5',  width: `${stats[3].base_stat}px` }"
            >{{stats[3].base_stat}}/255</div>
        </div>

        <h1>Sp. Defense</h1>
        <div class="base-stats-bar">
            <div
                class="base-stats-percent"
                :style="{'background-color': '#A8DB8D',  width: `${stats[4].base_stat}px` }"
            >{{stats[4].base_stat}}/255</div>
        </div>

        <h1>Speed</h1>
        <div class="base-stats-bar">
            <div
                class="base-stats-percent"
                :style="{'background-color': '#FA92B2',  width: `${stats[5].base_stat}px` }"
            >{{stats[5].base_stat}}/300</div>
        </div>

        <h1>Base Experience</h1>
        <div class="base-stats-bar">
            <div
                class="base-stats-percent exp"
                :style="{'background-color': '#1BA83C',  width: `${baseExp/4}px` }"
            >{{baseExp}}/1000</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "StatsBar",
    props: ["stats", "baseExp"]
};
</script>

<style>
.stats-bar {
    /* background-color: #4c4c4c;
    border-radius: 10px; */
    margin-left: 20px;
    margin-right: -20px;
    /* padding-bottom: 10px;
    padding-left: 7px; */
}
.stats-bar h1 {
    color: #4c4c4c;
    font-size: 12px;
}

.stats-bar .base-stats-bar {
    font-size: 12px;
    font-weight: 20;
    margin: -3px;
    width: 100%;
    border-radius: 50px;
    background-color: #ccc;
    display: flex;
    justify-content: flex-start;
}
.stats-bar .base-stats-bar .base-stats-percent .exp {
    max-width: 1000px;
}

.stats-bar .base-stats-bar .base-stats-percent {
    max-width: 255px;
    /* margin: -3px; */
    border-radius: 50px;
    color: #fff;
    transition: background-position 1s;
    background-position: left;
}
</style>