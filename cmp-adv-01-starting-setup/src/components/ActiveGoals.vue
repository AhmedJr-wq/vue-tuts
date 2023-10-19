<template>
    <ul>
        <li @goal-set="myGoals" v-for="goal in goals" :key="goal"></li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            goals: ['Learn Vue', 'Build something awesome']
        }
    },
    methods: {
        myGoals(goal) {
            this.goals = this.goals.push(goal);
        }
    }
}
</script>

