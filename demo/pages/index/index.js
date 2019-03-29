//index.js
//获取应用实例
import {
  connect,
  routerRedux
} from '../../lib/index.js';

Page(connect(({ index }) => ({ index }))({
   data: {
     navBarData: {
       showCapsule: 0, //是否显示左上角回退图标   1表示显示    0表示不显示
       title: '首页',
     },
     DotStyle: ''
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad(options) {
     this.dispatch({
       type: 'index/login',
     });

     // this.dispatch({
     //   type: 'index/getCode',
     // })
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

  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
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

 }));
