//index.js
//获取应用实例
import {
  connect,
  routerRedux
} from '../../lib/index.js';

Page(connect(({ index }) => ({ index }))({

   /**
    * 页面的初始数据
    */
   data: {
     nvabarData: {
       showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
       title: '我的主页', //导航栏 中间的标题
     },
     imgUrls: [
       'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
       'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
       'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
     ],
     indicatorDots: false,
     autoplay: false,
     interval: 5000,
     duration: 1000
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad(options) {
     this.dispatch({
       type: 'index/adjust',
       payload: 2
     })
   },

   /**
    * 生命周期函数--监听页面初次渲染完成
    */
   onReady() {
   },

   /**
    * 生命周期函数--监听页面显示
    */
   onShow() {
   },

   /**
    * 生命周期函数--监听页面隐藏
    */
   onHide() {

   },

   /**
    * 生命周期函数--监听页面卸载
    */
   onUnload() {

   },

   /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
   onPullDownRefresh() {

   },

   /**
    * 页面上拉触底事件的处理函数
    */
   onReachBottom() {

   },

   /**
    * 用户点击右上角分享
    */
   onShareAppMessage() {

   },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },

   plus() {
     this.dispatch({
       type: 'index/adjust',
       payload: 1
     })
   },

   minus(){
     this.dispatch({
       type: 'index/adjust',
       payload: -1
     })
   },


   login(){
     this.dispatch({
       type: 'index/login',
     })
   },

   goDouyu(){
     this.dispatch(routerRedux({
       pathname: '/pages/douyu/room',
       query: {
         type: 'LOL',
       },
     }))

   }
 }))
