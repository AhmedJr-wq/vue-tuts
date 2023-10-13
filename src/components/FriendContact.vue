<template>
    <li>
        <h2>{{ name }}</h2>
        <button @click="toggleDetails">{{ showTextDetails }} details</button>
        <ul v-if="showDetails">
            <li><strong>Phone: </strong>{{ phoneNumber }}</li>
            <li><strong>Email: </strong>{{ emailAddress }}</li>
        </ul>
        <button class="delete" @click="deleteFriend">Delete</button>
    </li>
</template>

<script>
    export default {
        // props can be used either as an array or an object to specify explicitly the type of data required
        // props: [
        //     'name',
        //     'phoneNumber',
        //     'emailAddress'
        // ],
        props: {
            id: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true,
            },
            phoneNumber: {
                type: String,
                required: true,
            },
            emailAddress: {
                type: String,
                required: true,
            }
        },
        emits: ['delete'],
        data() {
            return {
                showDetails: false
            }
        },
        computed: {
            showTextDetails() {
                return this.showDetails ? 'Hide' : 'Show'
            }
        },
        methods: {
            toggleDetails() {
                this.showDetails = !this.showDetails
            },
            deleteFriend() {
                this.$emit('delete', this.id)
            }
        }
    }
</script>