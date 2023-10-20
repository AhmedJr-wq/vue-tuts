<template>
    <ul>
        <li :class="{ active: activeOption === 'poor' }"><button @click="activateButton('poor')">Poor</button></li>
        <li :class="{ active: activeOption === 'average' }"><button @click="activateButton('average')">Average</button></li>
        <li :class="{ active: activeOption === 'great' }"><button @click="activateButton('great')">Great</button></li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            rating: 1,
            activeOption: null,
        }
    },
    methods: {
        activateButton(buttonIndex) {
            this.activeOption = buttonIndex;
        }
    }
}

</script>

<style scoped>
.active {
    border-color: #a00078;
}

.active button {
    color: #a00078;
}
ul {
    list-style: none;
    margin: 0.5rem 0;
    padding: 0;
    display: flex;
}

li {
    margin: 0 1rem;
    border: 1px solid #ccc;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

button {
    font: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
}
</style>