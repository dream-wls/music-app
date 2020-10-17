module.exports = {
    // 配置postcss-pxtorem
    css: {
      loaderOptions: {
        postcss: {
          plugins: [
            require('postcss-pxtorem')({
              rootValue: 37.5,//效果图
              unitPrecision: 5,
              propList: ['*'],//不进行转换的列表
              selectorBlackList: [],
              replace: true,
              mediaQuery: false,
              minPixelValue: 0,
              exclude: /node_modules/i
            })
          ]
        }
      }
    },
    devServer: {
        open: true,
            proxy: {
                '/api': {
                    target:'http://localhost:3000',
                    changeOrigin: true,
                    pathRewrite: {
                        '/api': '/'
                    }
                }
            }
    },
 
} 
 