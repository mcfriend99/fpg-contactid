export default {
    props: {
        name: String,
        email: String,
        phone: String,
        image: String,
        country: String,

        contact: Object,
    },
    methods: {
        showContact(){
            if(this.contact !== undefined && this.contact !== ''){
                this.$selectedContact = this.contact;
            }
        }
    }
}