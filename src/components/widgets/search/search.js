import axios from 'axios'

export default {
    methods: {
        search(){
            if(this.$searchText === null || this.$searchText.length === 0) {
                this.$searching = false;
                this.$contacts = [];
            } else {
                this.$searching = true;

                axios.get(`https://randomuser.me/api/?results=3&seed=${this.$searchText.trim()}`)
                    .then(res => {
                        console.log(res);

                        this.$searching = false;
                        if(res === null){
                            alert('No results found.')
                        } else {
                            this.$contacts = res.data.results;
                        }
                    })
                    .catch(err => {
                        console.error(err);

                        alert(`An error occurred.`);
                        this.$searching = false;
                    });
            }
        }
    }
}