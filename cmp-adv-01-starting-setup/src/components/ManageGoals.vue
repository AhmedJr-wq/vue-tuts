<template>
    <h2>
        Manage Goals
    </h2>
    <input type="text" ref="goal" v-model="enteredGoal">
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
            // const enteredGoal = this.$refs.goal.value;
            if (this.enteredGoal === '') {
                this.inputIsInvalid = true;
            } else {
                this.$emit('goalSet', this.enteredGoal);
            }
        },
        confirmError() {
            this.inputIsInvalid = false;
        }
    }
}
</script>