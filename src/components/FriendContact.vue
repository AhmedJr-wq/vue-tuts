<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">Show details</button>
    </li>
    <ul v-if="showDetails">
        <li>Phone: <strong>{{ friend.phone }}</strong></li>
        <li>Email: <strong>{{ friend.email }}</strong></li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                showDetails: false,
                friend: {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '3345 56663 6277',
                    email: 'mvfhgjgtj@l.com'
                }
            }
        },
        methods: {
            toggleDetails() {
                this.showDetails = !this.showDetails
            }
        }
    }
</script>