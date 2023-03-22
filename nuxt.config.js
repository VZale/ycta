export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'ycta',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
            {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
            {rel: 'preconnect', href: 'https://fonts.gstatic.com'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap'}
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/css/general.css',
        '@/css/slider.css'
    ],

    router: {
        extendRoutes(routes, resolve) {
            routes.push({
                name: 'Главная',
                path: '/',
                component: resolve(__dirname, 'pages/index.vue'),
                title: 'Главная'
            })
            routes.push({
                name: 'О Компании',
                path: '/about',
                component: resolve(__dirname, 'pages/About.vue'),
            })
        }
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        {src: '~/plugins/vue-slick.js', mode: 'client'}
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}
