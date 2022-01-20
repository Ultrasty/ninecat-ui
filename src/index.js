import Vue from 'vue'
import App from './index.vue'
import Ninecatui from '../package/ninecatui'

Vue.use(Ninecatui)

new Vue({
    render: h => h(App)
}).$mount('#app')
