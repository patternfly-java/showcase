const path = require('path');
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                include: [
                    path.resolve(__dirname, 'src/main/webapp'),
                    path.resolve(__dirname, 'node_modules/@patternfly/patternfly')
                ],
                use: ["style-loader", "css-loader"]
            }
        ]
    }
});
