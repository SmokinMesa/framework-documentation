export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'frontend-framework-showcase',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/app.css',
        '@/assets/scss/imports.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        {
            src: '~/plugins/vue-markdown-render.js'
        },
        {
            src: '~/plugins/filters.js'
        },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        [
            '@nuxtjs/axios',
                {
                    proxy: false
                }
        ],
    ],

    axios: {
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    }
}
