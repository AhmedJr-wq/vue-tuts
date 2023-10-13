const app = Vue.createApp({
    data() {
        return {
            friends: [
                {id: 'manuel', name: 'Manuel Lorenz', phone: '33455666362', email: 'mvfhgjgtj@l.com'},
                {id: 'john', name: 'John Lorenz', phone: '334556687999', email: 'jahrtju6i5@l.com'},
                {id: 'jules', name: 'Jules Lorenz', phone: '334556668793', email: 'ahrqyxnxxnh@a.com'},
            ],

        }
    },
    // computed: {
    //     showDetailsText() {
    //         return this.showDetails ? 'Hide' : 'Show'
    //     }
    // }
})

app.component('friend-contact', {
    template: `
        <div>
            <h2>{{friend.name}}</h2>
            <button @click="toggleDetails">{{showDetails ? 'Hide' : 'Show'}} Details</button>
            <ul class="details" v-if="showDetails">
                <li class="container"><strong>Phone: </strong>{{friend.phone}}</li>
                <li class="container"><strong>Email: </strong>{{friend.email}}</li>
            </ul>
        </div>
    `,
    data() {
        return {
            showDetails: false,
            friend:  {
                id: 'jules',
                name: 'Jules Lorenz',
                phone: '334556668793',
                email: 'ahrqyxnxxnh@a.com'
            },
        }
    },
    methods: {
        toggleDetails() {
            this.showDetails = !this.showDetails
        }
    }
})

app.mount("#app")