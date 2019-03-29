Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    selected: 0,
    list: [{
        pagePath: "/pages/index/index",
        icon: "icon-home",
        text: "首页"
      },
      {
        pagePath: "/pages/index/index",
        icon: "icon-goods",
        text: "商品"
      },
      {
        pagePath: "/pages/index/index",
        icon: "icon-mail",
        text: "消息"
      },
      {
        pagePath: "/pages/index/index",
        icon: "icon-my",
        text: "我的"
      }
    ]
  },
  methods: {
    switchTab(e) {
      const url = e.currentTarget.dataset.path;
      wx.switchTab({
        url
      })
    }
  },
  pageLifetimes: {

  },
});
