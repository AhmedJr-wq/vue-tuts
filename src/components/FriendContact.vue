<template>
    <li>
        <h2>{{ name }}</h2>
        <button @click="toggleDetails">{{ showTextDetails}} details</button>
        <ul v-if="showDetails">
            <li><strong>Phone: </strong>{{ phoneNumber }}</li>
            <li><strong>Email: </strong>{{ emailAddress }}</li>
        </ul>
    </li>
</template>

<script>
    export default {
        props: [
            'name',
            'phoneNumber',
            'emailAddress'
        ],
        data() {
            return {
                showDetails: false,
                // friend: {
                //     id: 'manuel',
                //     name: 'Mayor Mitchy',
                //     phone: '3345 56663 6277',
                //     email: 'mvfhgjgtj@l.com'
                // }
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
            }
        }
    }
</script>