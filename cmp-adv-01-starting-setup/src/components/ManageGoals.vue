<template>
    <h2>
        Manage Goals
    </h2>
    <input type="text" ref="goal">
    <button @click="setGoal">Save Goal</button>
    <teleport to="body">
        <error-alert v-if="inputIsInvalid">
            <h2>Input is invalid!</h2>
            <p>Make sure you enter a valid goal and try again.</p>
            <button @click="confirmError">Ok</button>
        </error-alert>
    </teleport>
</template>

<script>

import ErrorAlert from "./ErrorAlert.vue";

export default {
    components: {ErrorAlert},
    data() {
        return {
            inputIsInvalid: false,
            enteredGoal: ''
        }
    },
    methods: {
        setGoal() {
            const enteredGoal = this.$refs.goal.value;
            if (enteredGoal === '') {
                this.inputIsInvalid = true;
            }
        },
        confirmError() {
            this.inputIsInvalid = false;
        }
    }
}
</script>