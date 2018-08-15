'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');
const merge = require('webpack-merge');
const Visualizer = require('webpack-visualizer-plugin');
const webpack = require('webpack');
build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

build.configureWebpack.setConfig({
    additionalConfiguration: function (config) {
        var vueConfig = {
            plugins: [
                new webpack.ProvidePlugin({
                  Vue: 'vue',
                  'window.Vue': 'vue'
                }),
                new Visualizer()
              ]
        };

        return merge(config, vueConfig);
    }
});

build.initialize(gulp);
