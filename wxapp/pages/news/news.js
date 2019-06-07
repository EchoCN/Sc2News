// pages/news/news.js

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(){
    var th = this
    wx.request({
      url: "http://sc2news.test:5001/v1/news",
      method:'GET',
      header:{
        'content-type':'application/json'
      },
      success:function(res){
        console.log(res);
        th.setData({
          result:res.data
        });
      },
      fail:function(res){
        console.log("失败")
      }
    })
  },

  OnPost:function(event){
    var content = event.currentTarget.dataset.content;
    var author = event.currentTarget.dataset.author;
    var created_time = event.currentTarget.dataset.created_time;

    wx.navigateTo({
      url: "/pages/news/news-about/news-about?content="+ content + "&author=" + author + 
      "&created_time=" + created_time
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})