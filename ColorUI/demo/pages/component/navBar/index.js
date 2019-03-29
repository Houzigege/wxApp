const app = getApp()
Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    navBarData: {
      type: Object,
      value: {},
    }
  },
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    navBarData: {
      showCapsule: 1,
      title: '轮播图'
    }
  },
  methods: {

  }
});
