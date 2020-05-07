const app = getApp()
Page({
  data: {
    list: ["学校建立", "选址建校", "主席接见", "改设工厂", "校门变迁", "校门变迁2", "迁址复校", "稳步前行", "稳步前行2", "稳步前行3", "学院成立", "国际交流", "国际交流2", "国际联欢",  "竞赛", "科技大会", "领导人科学家交流", "djs-130计算机", "党建工作", "共建杭电", "建立保密学院", "联合办学",  "青山湖校区", "更多信息"],
    clickNumber: 0,
  },
  //点击上方文字 切换
  centerTap: function (event) {
    //点击的偏移量
    console.log(event);
    var cs = event.target.dataset.cs

    if (this.data.clickNumber == cs) {
      return false
    } else {
      this.setData({
        clickNumber: cs
      })
    }

    //调整置中
  },

  changeSwipe: function (event) {
    console.log(event);
    var type =
      event.detail.current;
    this.setData({
      clickNumber: type
    });
  },

  onLoad: function () {
    
  },

})
