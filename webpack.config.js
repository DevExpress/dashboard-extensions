const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: { 
        'online-map-item': './src/online-map-item/online-map-extension.ts',
        'dashboard-panel': './src/dashboard-panel/dashboard-panel.ts',
        'funnel-d3-item': './src/funnel-d3-item/funnel-d3-extension.ts',
        'parameter-item': './src/parameter-item/parameter-item-extension.ts',
        'webpage-item': './src/webpage-item/webpage-extension.ts'
    },
    output: {
        
        libraryTarget: 'umd',
        path: path.resolve('./'),
        filename: "dist/[name].js"
    },
    externals: {
        'jquery': { root: '$', commonjs2: 'jquery', commonjs: 'jquery', amd: 'jquery' },
        'd3-funnel': { root: 'D3Funnel', commonjs2: 'd3-funnel', commonjs: 'd3-funnel', amd: 'd3-funnel' },
        'devextreme/ui/map': { root: ['DevExpress', 'ui', 'dxMap'], commonjs2: 'devextreme/ui/map', commonjs: 'devextreme/ui/map', amd: 'devextreme/ui/map' },
        'devextreme/core/devices': { root: ['DevExpress', 'devices'], commonjs2: 'devextreme/core/devices', commonjs: 'devextreme/core/devices', amd: 'devextreme/core/devices' },
        '@devexpress/analytics-core/dx-analytics-core': { root: 'DevExpress', commonjs2: '@devexpress/analytics-core/dx-analytics-core', commonjs: '@devexpress/analytics-core/dx-analytics-core', amd: '@devexpress/analytics-core/dx-analytics-core' },
        '@devexpress/analytics-core/dx-querybuilder': { root: 'DevExpress', commonjs2: '@devexpress/analytics-core/dx-querybuilder', commonjs: '@devexpress/analytics-core/dx-querybuilder', amd: '@devexpress/analytics-core/dx-querybuilder' },

        'devexpress-dashboard': { root: ['DevExpress', 'Dashboard'], commonjs2: 'devexpress-dashboard', commonjs: 'devexpress-dashboard', amd: 'devexpress-dashboard' },
        'devexpress-dashboard/common': { root: ['DevExpress', 'Dashboard'], commonjs2: 'devexpress-dashboard/common', commonjs: 'devexpress-dashboard/common', amd: 'devexpress-dashboard/common' },
        'devexpress-dashboard/model': { root: ['DevExpress', 'Dashboard', 'Model'], commonjs2: 'devexpress-dashboard/model', commonjs: 'devexpress-dashboard/model', amd: 'devexpress-dashboard/model' },
        'devexpress-dashboard/data': { root: ['DevExpress', 'Dashboard', 'Data'], commonjs2: 'devexpress-dashboard/data', commonjs: 'devexpress-dashboard/data', amd: 'devexpress-dashboard/data' },
        'devexpress-dashboard/designer': { root: ['DevExpress', 'Dashboard', 'Designer'],commonjs2: 'devexpress-dashboard/designer', commonjs: 'devexpress-dashboard/designer', amd: 'devexpress-dashboard/designer' },
        'devexpress-dashboard/model/index.metadata': { root: ['DevExpress', 'Dashboard', 'Metadata'], commonjs2: 'devexpress-dashboard/model/index.metadata', commonjs: 'devexpress-dashboard/model/index.metadata', amd: 'devexpress-dashboard/model/index.metadata' },
    },

    mode: 'production',
    optimization: {
		minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    output: {
                        comments: '/^\/*!/',
                        beautify: true
                    },
                    mangle: false,
                    compress: false
                }
            })
          ]
	},
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/ }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: '**/*.html', to: __dirname + '/dist/', context: __dirname + '/src', flatten: true },
            { from: '**/*.css', to: __dirname + '/dist/', context: __dirname + '/src', flatten: true } 
        ], { force: true })
    ]
};