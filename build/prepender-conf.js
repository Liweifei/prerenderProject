
const PrerenderSPAPlugin = require('prerender-spa-plugin')//预渲染
const path = require('path')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

// 预渲染配置
// 在vue-cli生成的文件的基础上，只有下面这个才是我们要配置的
const plugin=new PrerenderSPAPlugin({
  // 生成文件的路径，也可以与webpakc打包的一致。
  // 下面这句话非常重要！！！
  // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
  staticDir: path.join(__dirname, '../dist'),

  // 对应自己的路由文件，比如index有参数，就需要写成 /index/param1。
  routes: ['/', '/page1', '/page2'],

  // 这个很重要，如果没有配置这段，也不会进行预编译
  renderer: new Renderer({
    inject: {
      foo: 'bar'
    },
    headless: false,
    // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
    renderAfterDocumentEvent: 'render-event'
  })
})
module.exports=plugin;