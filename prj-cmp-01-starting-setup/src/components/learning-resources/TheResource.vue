<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resource')" :mode="storedResButtonMode">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resource</base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script >
import BaseCard from "@/components/UI/BaseCard.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
import StoredResource from "./StoredResource.vue";
import AddResource from "./AddResource.vue";


export default {
    components: {BaseButton, BaseCard, StoredResource, AddResource},
    data() {
        return {
            selectedTab: 'StoredResource',
            storedResources: [
                { id: 'official-guide', title: 'Official Guide', description: 'The official Vue.js documentation', link: 'https://vuejs.org' },
                { id: 'google', title: 'Google', description: 'Learn to google...', link: 'https://google.org' },
            ]
        }
    },
    provide() {
        return {
            resources: this.storedResources,
            addResource: this.addNewResource,
            deleteResource: this.deleteResource
        }
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab === 'StoredResource' ? null : 'flat';
        },
        addResButtonMode() {
            return this.selectedTab === 'AddResource' ? 'flat' : null;
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        addNewResource(title, description, link) {
            const newResource = {
                id: new Date().toISOString(),
                title,
                description,
                link
            }
            this.storedResources.unshift(newResource);
            this.selectedTab = 'StoredResource';
        },
        deleteResource(resId) {
            const resIndex = this.storedResources.findIndex(res => res.id === resId);
            this.storedResources.splice(resIndex, 1);}
    }
}
</script>