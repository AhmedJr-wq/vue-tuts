//configure vue app
const app = Vue.createApp({
    //this data function always returns an object
    data() {
        return {
            counter: 0,
            name: '',
            fullname: '',
        }
    },
    //Watcher allows you to execute function when one of its dependencies change
    watch: {
        name(value) {
            if(value === '') {
                this.fullname = ''
            } else {
                this.fullname = value + ' ' + 'Rufai'
            }
        }
    },

    //computed properties allow you to define complex logic that includes reactive data
    computed: {
        // fullName() {
        //     if(this.name === '') {
        //         return ''
        //     }
        //     return this.name + ' ' + 'Rufai'
        // }
    },

    //methods allow you to write functions which should execute when something happens, it also takes an object
    methods: {
        confirmInput() {
            this.confirmedName = this.name
        },
        submitForm() {
            alert('Form submitted')
        },
        resetInput() {
            this.name = ''
        },
        setName(event, lastName){
            this.name = event.target.value
        },
        add(num) {
           this.counter = this.counter + num
        }, 
        reduce(num) {
            this.counter = this.counter - num
        }
    }
});

app.mount('#events')