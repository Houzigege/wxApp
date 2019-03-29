Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    selected: 0,
    list: [{
        pagePath: "/pages/basics/home/home",
        icon: "icon-home",
        text: "首页"
      },
      {
        pagePath: "/pages/component/home/home",
        icon: "icon-goods",
        text: "商品"
      },
      {
        pagePath: "/pages/plugin/home/home",
        icon: "icon-mail",
        text: "消息"
      },
      {
        pagePath: "/pages/about/home/home",
        icon: "icon-my",
        text: "我的"
      }
    ]
  },
  methods: {
    switchTab(e) {
      const url = e.currentTarget.dataset.path
      wx.switchTab({
        url
      })
    }
  },
  pageLifetimes: {
  },
})
