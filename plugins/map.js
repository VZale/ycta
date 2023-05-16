import Vue from "vue"

import YmapPlugin from 'vue-yandex-maps'

const settings = {
    apiKey: 'd46455f9-466e-4b4c-af96-9e1278553250',
    lang: 'ru_RU',
    coordorder: 'latlong',
    enterprise: false,
    version: '2.1',
}
Vue.use(YmapPlugin, settings)
