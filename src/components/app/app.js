import SiteHeader from '../widgets/header/Header.vue'
import SiteFooter from '../widgets/footer/Footer.vue'
import Modal from '../widgets/modal/Modal.vue'
import HomeScreen from '../pages/home-screen/HomeScreen.vue'
import SearchScreen from '../pages/search-screen/SearchScreen.vue'

export default {
    name: 'App',
    components: {
        SiteHeader,
        SiteFooter,
        HomeScreen,
        SearchScreen,
        Modal
    },
}