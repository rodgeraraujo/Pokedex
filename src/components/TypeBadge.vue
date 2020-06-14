<template>
    <li>
        <span :class="`${type.name } badge`">
            {{type.name}}
            <img class="type-icon" :src="url" />
        </span>
    </li>
</template>

<script>
export default {
    name: "TypeBadge",
    props: ["type"],
    data() {
        return {
            url: ""
        };
    },
    mounted() {
        this.url = require("../assets/images/icons/svg/" +
            this.type.name +
            ".svg");
    }
};
</script>

<style>
h1 {
    display: inline;
}

span {
    display: block;
}

.badge {
    color: #fff;
    border-radius: 10rem;
    display: inline-block;
    padding: 0.25em 0.4em;
    margin-bottom: 5px;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.type-icon {
    display: inline;
    border: 0;
    width: 10px;
}
</style>