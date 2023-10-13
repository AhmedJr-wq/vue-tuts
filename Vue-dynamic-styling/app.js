const app = Vue.createApp({
    data() {
        return {
           boxASelected: false,
           boxBSelected: false,
           boxCSelected: false, 
        }
    },
    //dynamic classes properties
    computed: {
        boxAClasses() {
            return { active: this.boxASelected }
        },
        boxBClasses() {
            return { active: this.boxBSelected }
        },
        boxCClasses() {
            return { active: this.boxCSelected }
        }
    },
    methods: {
        selectBox(box) {
            if (box === 'A') {
                this.boxASelected = !this.boxASelected
            } else if (box === 'B') {
                this.boxBSelected = !this.boxBSelected
            } else {
                this.boxCSelected = !this.boxCSelected
            }
        }
    }
})

app.mount('#styling')