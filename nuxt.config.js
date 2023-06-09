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
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
            {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
            {rel: 'preconnect', href: 'https://fonts.gstatic.com'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap'}
        ]
    },
    server: {
        host: process.env.NUXT_HOST,
        port: process.env.NUXT_PORT,
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/css/general.css',
        '@/css/slider.css'
    ],

    router: {
        extendRoutes(routes, resolve) {
            routes.push({
                name: '404',
                path: '*',
                component: resolve(__dirname, 'pages/404')
            })
            routes.push({
                name: 'Главная',
                path: '/',
                component: resolve(__dirname, 'pages/index'),
                title: 'Главная'
            })
            routes.push({
                name: 'О Компании',
                path: '/about',
                component: resolve(__dirname, 'pages/About'),
            })
            routes.push({
                name: 'Доставка',
                path: '/guarantee',
                component: resolve(__dirname, 'pages/Guarantee'),
            })
            routes.push({
                name: 'Оплата',
                path: '/payment',
                component: resolve(__dirname, 'pages/Payment'),
            })
            routes.push({
                name: 'Контакты',
                path: '/contacts',
                component: resolve(__dirname, 'pages/Contacts'),
            })
            routes.push({
                name: 'Политика конфиденциальности',
                path: '/privacy',
                component: resolve(__dirname, 'pages/Privacy'),
            })
            routes.push({
                name: 'Поиск',
                path: '/search/:name',
                component: resolve(__dirname, 'pages/Searched'),
            })
            routes.push({
                name: 'Каталог товаров',
                path: '/catalog/:name/:id',
                component: resolve(__dirname, 'pages/Product/ProductCatalog'),
            })
            routes.push({
                name: 'Каталог подтоваров',
                path: '/catalog/:category_name/:subcategory_name/:id',
                component: resolve(__dirname, 'pages/Product/ProductCatalog'),
            })
            routes.push({
                name: 'Товары',
                path: '/catalog',
                component: resolve(__dirname, 'pages/Product/Catalog'),
            })
            routes.push({
                name: 'Товар',
                path: '/catalog/:category_name/:subcategory_name/:subcategory_id/:name/:id',
                component: resolve(__dirname, 'pages/Product/SingleProduct'),
            })
        }
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        {src: '~/plugins/vue-slick.js', mode: 'client'},
        {src: '~/plugins/primevue.js'},
        {src: "~/plugins/map.js", mode: 'client', ssr: true},
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
    ssr: false,

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
            lang: 'ru'
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}
