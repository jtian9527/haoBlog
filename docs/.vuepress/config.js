
module.exports = {
  title: 'Hao\'s blog',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: '测试基础', link: '/accumulate1/' },
      {text: '前端基础', link: '/accumulate2/' },
      {text: '后端基础', link: '/accumulate3/' },
      {text: '算法学习', link: '/algorithm1/'},
      {text: '生活分享', link: '/algorithm2/'},
      {text: 'github', link: 'https://github.com/jtian9527'}      
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  }
};