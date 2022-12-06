const { createApp } = Vue;

createApp({
    data() {
        return {
            numEmail: 10,
            arrayEmail: []

        }
    },
    methods: {
        requestEmail() {

            for (let i = 0; i < this.numEmail; i++) {

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {

                    this.arrayEmail.push(result.data.response)

                })
            }
        }
    },
    mounted() {
        this.requestEmail()
    }
}).mount('#app');