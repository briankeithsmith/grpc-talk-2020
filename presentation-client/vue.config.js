const PrerenderSPAPlugin = require('prerender-spa-plugin');
const path = require('path');


const AllSlides = [
    {
        maxSubSlides: 0,
        name: 'Title'
    },
    {
        maxSubSlides: 4,
        name: 'GRPC'
    },
    {
        maxSubSlides: 21,
        name: 'Features'
    },
    {
        maxSubSlides: 22,
        name: 'UseCase-MicroService'
    },
    {
        maxSubSlides: 3,
        name: 'UseCase-Versioning'
    },
    {
        maxSubSlides: 4,
        name: 'TechnicalDetails-Workflow'
    },
    {
        maxSubSlides: 4,
        name: 'TechnicalDetails-WireFormat'
    },
    {
        maxSubSlides: 4,
        name: 'TechnicalDetails-LibraryStructure'
    },
    {
        maxSubSlides: 4,
        name: 'Limitations'
    },
];

const slideRoutes = [
    '/slides',
];
for (let i = 0; i < AllSlides.length; i++) {
    slideRoutes.push(`/slides/${AllSlides[i].name}`);
    slideRoutes.push(`/slides/${AllSlides[i].name}/0`);
    slideRoutes.push(`/slides/${AllSlides[i].name}/${AllSlides[i].maxSubSlides}`);
}

module.exports = {
    pluginOptions: {
        webpackBundleAnalyzer: {
            openAnalyzer: false
        }
    },
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        },
        proxy: {
            '^/presentations/api/': {
                target: 'https://apps.v2tools.com'
            }
        }
    },
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'prod') {
            config.plugins.push(new PrerenderSPAPlugin({
                // Required - The path to the webpack-outputted app to prerender.
                staticDir: path.join(__dirname, 'dist'),
                // Required - Routes to render.
                routes: [
                    '/',
                    '/demo',
                    ...slideRoutes,
                ],
            }));
        }
    },
    publicPath: '/presentations/',
    pwa: {
        name: 'GRPC Presentation',
        themeColor: '#2DA6B0',
        msTileColor: '#FFFFFF',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        manifestOptions: {
            short_name: 'GRPC',
        }
    },
}