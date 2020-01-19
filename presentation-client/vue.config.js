const PrerenderSPAPlugin = require('prerender-spa-plugin');
const path = require('path');


module.exports = {
    configureWebpack: (config) => {
        config.plugins.push(new PrerenderSPAPlugin({
            // Required - The path to the webpack-outputted app to prerender.
            staticDir: path.join(__dirname, 'dist'),
            // Required - Routes to render.
            routes: [
                '/', 
                '/slides', 
                '/slides/1',
                '/slides/2',
                '/slides/3',
                '/slides/4',
                '/slides/5',
                '/slides/6',
                '/slides/7',
                '/slides/8',
                '/slides/9',
                '/slides/10',
            ],
        }));
    }
}