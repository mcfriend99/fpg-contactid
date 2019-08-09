// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/app/App.vue'
import router from './router'

import axios from 'axios'

axios.defaults.headers = {
  'Content-type': 'application/json',
  'Accepts': 'application/json'
};

const globalState = new Vue({
  data(){
    return {
      searching: false,
      searchText: '',
      contacts: [],
      selectedContact: null
    }
  }
});

Vue.mixin({
  computed: {
    $searching: {
      get(){ return globalState.$data.searching },
      set(newValue){ globalState.$data.searching = newValue }
    },
    $searchText: {
      get(){ return globalState.$data.searchText },
      set(newValue){ globalState.$data.searchText = newValue }
    },
    $contacts: {
      get(){ return globalState.$data.contacts },
      set(newValue){ globalState.$data.contacts = newValue }
    },
    $selectedContact: {
      get(){ return globalState.$data.selectedContact },
      set(newValue){ globalState.$data.selectedContact = newValue }
    },
  }
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>',
})
