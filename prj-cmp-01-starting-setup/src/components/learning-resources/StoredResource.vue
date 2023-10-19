<template>
    <ul>
        <learning-resource
            v-for="resource in this.resources"
            :key="resource.id"
            :id="resource.id"
            :title="resource.title"
            :description="resource.description"
            :link="resource.link"
        >
        </learning-resource>
    </ul>
</template>

<script>
import LearningResource from "@/components/learning-resources/LearningResource.vue";

export default {
    inject: ['resources'],
    components: {LearningResource},
}
</script>

<style scoped>
ul {
    list-style: none;
    padding: 0;
    margin: auto;
    max-width: 40rem;
}
</style>