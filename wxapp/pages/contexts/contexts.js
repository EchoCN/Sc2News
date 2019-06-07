// pages/contexts/contexts.js
var app = getApp();
Page({
  data : {
    msgData:[]
  },
  changeInputValue(ev){
    this.setData({
      inputVal:ev.detail.value
    })
  },
  DelMsg(ev){
    var n=ev.target.dataset.index;

    var list = this.data.msgData;
    list.splice(n,1);

    this.setData({
      msgData:list
    })
  },
  addMsg(){
     var list = this.data.msgData;
     list.push({
     msg:this.data.inputVal
    });

    this.setData({
      msgData:list,
      inputVal:''
    });
  },
  /**
   * 页面的初始数据
   */
})