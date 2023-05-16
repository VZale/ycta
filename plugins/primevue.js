import Vue from 'vue'
import PrimeVue from 'primevue/config'
import Tooltip from 'primevue/tooltip';

Vue.use(PrimeVue)
Vue.directive('tooltip', Tooltip);
