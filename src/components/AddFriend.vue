<template>
    <form @submit.prevent="addFriend" >
        <div>
            <label for="name">Name</label>
            <input type="text" v-model="name" />
        </div>
        <div>
            <label for="phone">Phone</label>
            <input type="tel" v-model="phone"/>
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" v-model="email"/>
        </div>
        <button>Add friend</button>
    </form>
</template>

<script>
    export default {
        name: 'AddFriend',
        emits: ['add-friend'],
        data() {
            return {
                name: '',
                phone: '',
                email: ''
            }
        },
        methods: {
            addFriend() {
                if (this.name === '' || this.phone === '' || this.email === '') {
                    alert('Please enter all fields')
                } else {
                    this.$emit('add-friend', this.name, this.phone, this.email)
                    this.clearInput()
                }
            },
            clearInput() {
                this.name = ''
                this.phone = ''
                this.email = ''
            }
        }
    }
</script>
