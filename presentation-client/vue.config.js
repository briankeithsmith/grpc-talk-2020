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
                '/slides/1/0',
                '/slides/2/0',
                '/slides/3/0',
                '/slides/4/0',
                '/slides/5/0',
                '/slides/6/0',
                '/slides/7/0',
                '/slides/8/0',
                '/slides/9/0',
                '/slides/10/0',
            ],
        }));
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/grpc-talk-2020/' : '/grpc-talk-2020/'
}