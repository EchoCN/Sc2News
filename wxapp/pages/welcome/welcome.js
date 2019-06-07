Page({
  onTap:function(){
    wx.redirectTo({
      url: '../news/news',
      success:function(res){
        // success
      },
      fail:function(){
        //fail
      },
      complete:function(){
        //complete
      }
    })
  },
  onContext: function () {
    wx.redirectTo({
      url: '../contexts/contexts',
      success: function (res) {
        // success
      },
      fail: function () {
        //fail
      },
      complete: function () {
        //complete
      }
    })
  },
  onUnload:function(){
    console.log('welcome')
  }
})